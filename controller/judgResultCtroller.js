const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {
  insertJudementResult(req, res) {
    'use strict';
    let TYPE_OF_PENALTY = req.body.TYPE_OF_PENALTY; //获取刑罚类别
    let PENALTY_PERIOD = req.body.PENALTY_PERIOD; //获取刑罚期限
    let IS_PROBATION = req.body.IS_PROBATION; //获取是否缓刑
    let FINE_AMOUNT = req.body.FINE_AMOUNT; //罚金数额
    let IS_ILLEGAL_INCOME = req.body.IS_ILLEGAL_INCOME; // 是否追缴违法所得
    let LIGHT_PLOT = req.body.LIGHT_PLOT; //从轻情节
    let SUSPECT_NUMBER = req.body.SUSPECT_NUMBER; //犯罪嫌疑人编号
    let JUDGMENT_RESULT_NUMBER = 'result' + randomNum.randomNumber(); //生成裁决结果编号
    userDao.insertJudementResult([JUDGMENT_RESULT_NUMBER, TYPE_OF_PENALTY, PENALTY_PERIOD, IS_PROBATION, FINE_AMOUNT, IS_ILLEGAL_INCOME, LIGHT_PLOT, SUSPECT_NUMBER], (err) => {
      if (err) {
        res.status(500).send();
      } else {
        console.log('裁决结果登记成功');
        res.status(201).send({
          regsiterResultOk: true,
          judgmentResultNum: JUDGMENT_RESULT_NUMBER
        });
      }
    });
  }
};