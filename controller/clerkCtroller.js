const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertClerk(req, res) {
    let CLERK_NAME = req.body.CLERK_NAME; //书记员姓名
    let COURT_NUMBER = req.body.COURT_NUMBER; //法院编号
    userDao.selectClerk([CLERK_NAME, COURT_NUMBER], (err, data) => {
      if (data.length !== 0) {
        console.log('该书记员已经注册，名字是：', data[0].CLERK_NAME);
        res.status(201).send({
          registerClerkOk: false,
          clerkNumber: data[0].CLERK_NUMBER
        });

      } else {
        let CLERK_NUMBER = "SJY" + randomNum.randomNumber();
        userDao.regsiterClerk([CLERK_NUMBER, CLERK_NAME, COURT_NUMBER], (err, data) => {
          if (err) {
            console.log('书记员注册失败，err是：', err);

          } else {
            console.log('书记员注册成功');
            res.status(201).send({
              registerClerkOk: true,
              clerkNumber: CLERK_NUMBER
            });

          }

        });
      }

    });


  }
}