const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {
  insertPoison(req, res) {
    'use strict';
    let SCIENTIFIC_NAME_OF_POISON = req.body.SCIENTIFIC_NAME_OF_POISON; //毒害物名称
    let POISON_ALIAS_01 = req.body.POISON_ALIAS_01; //毒害物别名01
    let POISON_ALIAS_02 = req.body.POISON_ALIAS_02; //毒害物别名02
    let TOXIC_CHEMICAL_COMPOSITION = req.body.TOXIC_CHEMICAL_COMPOSITION; //毒害物化学成分
    let ACTUAL_MEASUREMENT_OF_POISON = req.body.ACTUAL_MEASUREMENT_OF_POISON; //毒害物实测含量
    let FOOD_NUMBER = req.body.FOOD_NUMBER; //含有毒害物的食品编号
    let POISON_NUMBER = 'Du' + randomNum.randomNumber(); //生成毒害物唯一编号
    userDao.registerPioson([POISON_NUMBER, SCIENTIFIC_NAME_OF_POISON, POISON_ALIAS_01, POISON_ALIAS_02, TOXIC_CHEMICAL_COMPOSITION, ACTUAL_MEASUREMENT_OF_POISON], (err) => {
      if (err) {
        console.log('毒害物登记产生的err是：', err);
        res.status(500).send();
      } else {
        console.log('毒害物登记成功',[POISON_NUMBER, SCIENTIFIC_NAME_OF_POISON, POISON_ALIAS_01, POISON_ALIAS_02, TOXIC_CHEMICAL_COMPOSITION, ACTUAL_MEASUREMENT_OF_POISON]);
        userDao.selectPoisonnumFoodnum([FOOD_NUMBER, POISON_NUMBER], (err, data) => {
          // console.log(data);
          // console.log(err);
          if (data.length !== 0) {
            console.log('该毒害物编号与案件编号已经绑定，无需重复绑定');
            res.status(201).send({
              registerPoisonOk: true,
              poisonNumber: POISON_NUMBER
            });
          } else {
            userDao.bindCasefood_Pioson([FOOD_NUMBER, POISON_NUMBER], (err) => {
              if (err) {
                console.log('毒害物编号与案件编号绑定失败，err是：', err);
                res.status(500).send();
              } else {
                console.log('毒害物与食品绑定成功');
                res.status(201).send({
                  registerPoisonOk: true,
                  poisonNumber: POISON_NUMBER
                });
              }
            });
          }
        });
      }
    });
  },
  //查询所有的毒害物
  selectAllPoisonData(req,res){
    'use strict';
    userDao.selectAllPoisons((err,result) => {
      if (err) {
       console.log( '毒害物信息查询失败,错误是',err);
       res.status(500).send();
      } else {
        console.log('毒害物信息查询成功');
        res.status(200).send(result);
      }
    });
  },
  //根据案件编号查询毒害物信息
  selectPoisonsByCaseNum(req,res){
    'use strict';
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    userDao.selectPoisoninfoByCaseNum([CASE_NUMBER],(err,result) => {
      if(err){
        console.log('根据案件编号查询毒害物信息失败',err);
        res.status(500).send();
      }else{
        console.log('根据案例编号查询毒害物信息成功');
        res.status(200).send(result);
      }
    });
  }

};