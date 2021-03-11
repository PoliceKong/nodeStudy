const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertProsecutor(req, res) {
    let PUBLIC_PROSECUTOR_NAME = req.body.PUBLIC_PROSECUTOR_NAME; //获取公诉人员名称
    let PROCURATORATE_NUMBER = req.body.PROCURATORATE_NUMBER; //获取公诉机关（检察院）编号
    userDao.selectPubPro([PUBLIC_PROSECUTOR_NAME, PROCURATORATE_NUMBER], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('该公诉人员你已经存在，无需注册，他的名字是：', data[0].PUBLIC_PROSECUTOR_NAME);
          res.status(201).send({
            registerProOk: false,
            publicProsecutorNumber: data[0].PUBLIC_PROSECUTOR_NUMBER
          });
        } else {
          let PUBLIC_PROSECUTOR_NUMBER = "GSR" + randomNum.randomNumber();
          userDao.registerPubPro([PUBLIC_PROSECUTOR_NUMBER, PUBLIC_PROSECUTOR_NAME, PROCURATORATE_NUMBER], (err, data) => {
            if (err) {
              console.log('注册新的公诉人员失败，err是：', err);
              res.status(500).send();
            } else {
              console.log('新的公诉人员注册成功');
              res.status(201).send({
                registerProOk: true,
                publicProsecutorNumber: PUBLIC_PROSECUTOR_NUMBER
              });
            }
          });
        }
      }















    });

  }
}