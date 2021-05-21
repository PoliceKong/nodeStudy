const userDao = require('../dao/userDao');
const { use } = require('../routers/indexRoute');
const randomNum = require('./randomNumber');
module.exports = {
  insertCourt(req, res) {
    'use strict';
    let COURT_NAME = req.body.COURT_NAME; //获取法院名称
    let COURT_LEVEL = req.body.COURT_LEVEL; //获取法院级别
    let JUDGMENT_NUMBER = req.body.JUDGMENT_NUMBER; //判决书编号

    userDao.selectCourt([COURT_NAME, COURT_LEVEL], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('此法院已经注册，名称是：', data[0].COURT_NAME);
          res.status(201).send({
            registerCourtOk: false,
            courtNumber: data[0].COURT_NUMBER,
          });
        } else {
          let COURT_NUMBER = 'Court' + randomNum.randomNumber();
          userDao.registerCourt(
            [COURT_NUMBER, COURT_NAME, COURT_LEVEL],
            (err) => {
              // console.log(req.body,COURT_NUMBER, COURT_NAME, COURT_LEVEL);

              if (err) {
                console.log('法院注册时遇到问题，err是：', err);
                res.status(500).send();
              } else {
                userDao.bindCourtNum(
                  [COURT_NUMBER, JUDGMENT_NUMBER],
                  (err, data) => {
                    if (err) {
                      res.status(500).send();
                    } else {
                      if (data.changedRows === 0) {
                        console.log('重复绑定---该法院已经绑定该判决书');
                      } else {
                        console.log('该法院与判决书绑定成功');
                      }
                    }
                  }
                );
                res.status(201).send({
                  registerCourtOk: true,
                  courtNumber: COURT_NUMBER,
                });
              }
            }
          );
        }
      }
    });
  },
  //根据案例编号查询审判机关信息
  selectCourtDataByCaseNum(req, res) {
    'use strict';
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    userDao.selectCourtInfoByCaseNum([CASE_NUMBER], (err, result) => {
      if (err) {
        console.log('根据案例编号查询审判机关信息失败', err);
        res.status(500).send();
      } else {
        console.log('根据案例编号查询审判机关信息成功');
        res.status(200).send(result);
      }
    });
  },
};
