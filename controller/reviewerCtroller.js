const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {

  insertReviewer(req, res) {
    'use strict';
    let NAME_OF_TRIAL_OFFICER = req.body.NAME_OF_TRIAL_OFFICER; //获取审理人员姓名
    let TRIAL_STAFF_CATEGORY = req.body.TRIAL_STAFF_CATEGORY; //获取审理人员类别
    let COURT_NUMBER = req.body.COURT_NUMBER; //获取法院编号
    userDao.selectReviewer([NAME_OF_TRIAL_OFFICER, TRIAL_STAFF_CATEGORY, COURT_NUMBER], (err, result) => {
      if (err) {
        res.status(500).send();
      } else {
        if (result.length !== 0) {
          console.log('该审理人员已经注册，名字是：', result[0].NAME_OF_TRIAL_OFFICER);
          res.status(201).send({
            registerRevOk: false,
            reviewerNumber: result[0].REVIEWER_NUMBER
          });
        } else {
          let REVIEWER_NUMBER = 'SLR' + randomNum.randomNumber();
          console.log('请求提交的审理人员信息是:',REVIEWER_NUMBER, NAME_OF_TRIAL_OFFICER, TRIAL_STAFF_CATEGORY, COURT_NUMBER);
          
          userDao.registerReviewer([REVIEWER_NUMBER, NAME_OF_TRIAL_OFFICER, TRIAL_STAFF_CATEGORY, COURT_NUMBER], (err) => {
            if (err) {
              console.log('审理人员注册失败，err是:', err);
              res.status(500).send();
            } else {
              console.log('审理人员注册成功');
              res.status(201).send({
                registerRevOk: false,
                reviewerNumber: REVIEWER_NUMBER
              });
            }
          });
        }
      }
    });
  }
};