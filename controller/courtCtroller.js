const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {
  insertCourt(req, res) {
    'use strict';
    let COURT_NAME = req.COURT_NAME; //获取法院名称
    let COURT_LEVEL = req.COURT_LEVEL; //获取法院级别
    let JUDGMENT_NUMBER = req.JUDGMENT_NUMBER; //判决书编号

    userDao.selectCourt([COURT_NAME, COURT_LEVEL], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('此法院已经注册，名称是：', data[0].COURT_NAME);
          res.status(201).send({
            registerCourtOk: false,
            courtNumber: data[0].COURT_NUMBER
          });
        } else {
          let COURT_NUMBER = 'Court' + randomNum.randomNumber();
          userDao.registerCourt([COURT_NUMBER, COURT_NAME, COURT_LEVEL], (err) => {
            if (err) {
              console.log('法院注册时遇到问题，err是：', err);
              res.status(500).send();
            } else {
              userDao.bindCourtNum([COURT_NUMBER, JUDGMENT_NUMBER], (err, data) => {
                if (err) {
                  res.status(500).send();
                } else {
                  if (data.changedRows === 0) {
                    console.log('该法院已经绑定该判决书');
                  } else {
                    console.log('该法院与判决书绑定成功');
                  }
                }
              });
              res.status(201).send({
                registerCourtOk: true,
                courtNumber: COURT_NUMBER
              });
            }
          });

        }
      }
    });
  }
};