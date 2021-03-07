const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertCaseFood(req, res) {
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    let FOOD_NAME = req.body.FOOD_NAME; //获取食品名称
    let FOOD_TYPE = req.body.FOOD_TYPE; //获取食品类型
    let FOOD_INGREDIENTS = req.body.FOOD_INGREDIENTS; //获取成分
    let FOOD_QUANTITY = req.body.FOOD_QUANTITY; //获取食品数量
    let FOOD_NUMBER = "F" + randomNum.randomNumber(); //生成唯一食品编号

    userDao.registerCaseFood([FOOD_NUMBER, FOOD_NAME, FOOD_TYPE, FOOD_INGREDIENTS, FOOD_QUANTITY], (err, data) => {

      if (err) {
        console.log('食品登记出现的错误是：', err);
      } else {
        console.log('食品登记成功，数据库返回的数据是：', data);
      }
    });
    userDao.bindCaseFood_Case([CASE_NUMBER, FOOD_NUMBER], (err, data) => {
      console.log('案件编号与食品编号绑定成功');
      res.status(201).send({
        foodRegisterOk: true,
        foodNumber: FOOD_NUMBER
      })
    })
  }










}