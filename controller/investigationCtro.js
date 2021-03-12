//这是侦查人员录入控制器
const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {

  insertInvestigation(req, res) {
    'use strict';
    let INVESTIGATOR_NAME = req.body.INVESTIGATOR_NAME; //获取侦查人员姓名
    let INVESTIGATION_AGENCY_NUMBER = req.body.INVESTIGATION_AGENCY_NUMBER; //获取侦查机关编号
    userDao.selectInvestigation([INVESTIGATOR_NAME, INVESTIGATION_AGENCY_NUMBER], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('该侦查人员已经存在，名字是：', data[0].INVESTIGATOR_NAME);
          res.status(201).send({
            registerInvOk: false,
            investigator: data[0].INVESTIGATOR_NUMBER
          });
        } else {
          let INVESTIGATOR_NUMBER = 'Police' + randomNum.randomNumber(); //生成侦查人员编号
          userDao.registerInvestigation([INVESTIGATOR_NUMBER, INVESTIGATOR_NAME, INVESTIGATION_AGENCY_NUMBER], (err) => {
            if (err) {
              console.log('侦查人员注册失败，err是：', err);
              res.status(500).send();
            } else {
              console.log('侦查人员注册成功');
              res.status(201).send({
                registerInvOk: true,
                investigator: INVESTIGATOR_NUMBER
              });
            }
          });
        }
      }
    });
  }
};