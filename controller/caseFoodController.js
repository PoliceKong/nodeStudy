const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {
  insertCaseFood(req, res) {
    'use strict';
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    let FOOD_NAME = req.body.FOOD_NAME; //获取食品名称
    let FOOD_TYPE = req.body.FOOD_TYPE; //获取食品类型
    let FOOD_INGREDIENTS = req.body.FOOD_INGREDIENTS; //获取成分
    let FOOD_QUANTITY = req.body.FOOD_QUANTITY; //获取食品数量
    let FOOD_NUMBER = 'Food' + randomNum.randomNumber(); //生成唯一食品编号
    userDao.registerCaseFood(
      [FOOD_NUMBER, FOOD_NAME, FOOD_TYPE, FOOD_INGREDIENTS, FOOD_QUANTITY],
      (err) => {
        if (err) {
          console.log('食品登记出现的错误是：', err);
          res.status(500).send();
        } else {
          console.log('食品登记成功');
          userDao.selectCasenumFoodnum(
            [CASE_NUMBER, FOOD_NUMBER],
            (err, data) => {
              if (err) {
                res.status(500).send();
              } else {
                if (data.length !== 0) {
                  console.log('该食品编号与案件已经绑定，无需重复绑定');
                  res.status(201).send({
                    foodRegisterOk: true,
                    foodNumber: FOOD_NUMBER,
                  });
                } else {
                  userDao.bindCaseFood_Case(
                    [CASE_NUMBER, FOOD_NUMBER],
                    (err) => {
                      if (err) {
                        console.log('食品编号与案件编号绑定失败，err是：', err);
                        res.status(500).send();
                      } else {
                        console.log('案件编号与食品编号绑定成功');
                        res.status(201).send({
                          foodRegisterOk: true,
                          foodNumber: FOOD_NUMBER,
                        });
                      }
                    }
                  );
                }
              }
            }
          );
        }
      }
    );
  },
  //查询所有的涉案食品信息
  selectAllFoodInfo(req, res) {
    'use strict';
    userDao.selectAllFoodsInfo((err, result) => {
      if (err) {
        console.log('食品信息列表查询失败', err);
        res.status(500).send();
      } else {
        console.log('食品信息列表查询成功');
        res.status(200).send(result);
      }
    });
  },
  //根据案件编号查询涉案食品
  selectFoodByCaseNum(req, res) {
    'use strict';
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    userDao.selectFoodByCaseNum([CASE_NUMBER], (err, result) => {
      if (err) {
        console.log('根据案件编号查询食品信息失败', err);
        res.status(500).send();
      } else {
        console.log('根据案件编号查询食品成功');
        res.status(200).send(result);
      }
    });
  },
};
