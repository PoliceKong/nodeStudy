const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertProcuratorate(req, res) {
    let NAME_OF_PROCURATORATE = req.body.NAME_OF_PROCURATORATE; //获取公诉机关名称
    let PROCURATORATE_LEVEL = req.body.PROCURATORATE_LEVEL; //获取公诉机关级别
    let JUDGMENT_NUMBER = req.body.JUDGMENT_NUMBER; //获取刑事判决书的编号
    userDao.selectProcuratorate([NAME_OF_PROCURATORATE, PROCURATORATE_LEVEL], (err, data) => {
      if (data.length !== 0) {
        console.log('该公诉机关已经注册，名称是：', data[0].NAME_OF_PROCURATORATE);
        res.status(201).send({
          registerPROk: false,
          procuratorateNumber: data[0].PROCURATORATE_NUMBER
        });
        userDao.bindProcuratorateNum([data[0].PROCURATORATE_NUMBER, JUDGMENT_NUMBER], (err, data) => {
          if (err) {
            console.log('判决书编号绑定公诉机关编号出错，err是：', err);
          } else {
            if (data.changedRows == 0) {
              console.log('绑定失败', data);
            } else {
              console.log('判决书编号绑定公诉机关编号成功！！！');
            }
          }

        });
      } else {
        let PROCURATORATE_NUMBER = "G" + randomNum.randomNumber(); //生成公诉机关唯一编码
        userDao.registerProcuratorate([], (err, data) => {

        });






      }
    });





  }





}