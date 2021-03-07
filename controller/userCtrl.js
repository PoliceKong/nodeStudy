const userDao = require("../dao/userDao");
module.exports = {
  userCtrl(req, res) {
    console.log('数据提交成功！');
    let reqbody = req.body.Username;
    let pwd = req.body.password;
    userDao.selectCase((err, data) => {
      console.log("返回的数据是：", data);
      res.status(201).send(data);
    });

  }
}