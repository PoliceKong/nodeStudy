const userDao = require("../dao/userDao");
const {
  use
} = require("../routers/indexRoute");
const randomNum = require("./randomNumber");
module.exports = {

  insertReviewer(req, res) {

    let NAME_OF_TRIAL_OFFICER = req.body.NAME_OF_TRIAL_OFFICER; //获取审理人员姓名
    let TRIAL_STAFF_CATEGORY = req.body.TRIAL_STAFF_CATEGORY; //获取审理人员类别
    let COURT_NUMBER = req.body.COURT_NUMBER; //获取法院编号
    userDao.selectReviewer([NAME_OF_TRIAL_OFFICER, TRIAL_STAFF_CATEGORY, COURT_NUMBER], (err, data) => {
      if (data.length !== 0) {
        console.log('该审理人员已经注册，名字是：', data[0].NAME_OF_TRIAL_OFFICER);
        res.status(201).send({
          registerRevOk: false,
          reviewerNumber: data[0].REVIEWER_NUMBER
        });
      } else {
        let REVIEWER_NUMBER = "SLR" + randomNum.randomNumber();
        userDao.registerReviewer([REVIEWER_NUMBER, NAME_OF_TRIAL_OFFICER, TRIAL_STAFF_CATEGORY, COURT_NUMBER], (err, data) => {
          if (err) {
            console.log('审理人员注册失败，err是:', err);
          } else {
            console.log('审理人员注册成功');
            res.status(201).send({
              registerRevOk: false,
              reviewerNumber: REVIEWER_NUMBER
            });
          }
        });
      }

    });

  }
}