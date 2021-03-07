const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertPolice(req, res) {
    let NAME_OF_INVESTIGATION_AGENCY = req.body.NAME_OF_INVESTIGATION_AGENCY; //获取侦查机关名称
    let INVESTIGATIVE_AGENCY_LEVEL = req.body.INVESTIGATIVE_AGENCY_LEVEL; //获取侦查机关行政级别
    let JUDGMENT_NUMBER = req.body.JUDGMENT_NUMBER; //获取刑事判决书的编号
    userDao.selectPolice([NAME_OF_INVESTIGATION_AGENCY, INVESTIGATIVE_AGENCY_LEVEL], (err, data) => {
      if (data.length !== 0) {
        console.log('数据库内已存在该侦查机关，名称是：', data[0].NAME_OF_INVESTIGATION_AGENCY);
        res.status(201).send({
          registerOk: false,
          policeNum: data[0].NAME_OF_INVESTIGATION_AGENCY
        });
        //将数据库中侦查机关的编号与判决书的编号绑定
        userDao.bindPolicenum([data[0].INVESTIGATION_AGENCY_NUMBER, JUDGMENT_NUMBER], (err, data) => {
          if (err) {
            console.log('判决书编号绑定公安机关编号出错，err是：', err);
          } else {
            if (data.changedRows == 0) {
              console.log('绑定失败', data);
            } else {
              console.log('判决书编号绑定公安机关编号成功！！！');
            }

          }
        })
      } else {
        let INVESTIGATION_AGENCY_NUMBER = "P" + randomNum.randomNumber(); //生成侦查机关编号
        userDao.registerPolice([INVESTIGATION_AGENCY_NUMBER, NAME_OF_INVESTIGATION_AGENCY, INVESTIGATIVE_AGENCY_LEVEL], (err, data) => {
          if (err) {
            console.log('登记公安机关信息出错，err是：', err);
          } else {
            console.log('公安机关信息登记成功');
            res.status(201).send({
              registerOk: true,
              policeNum: NAME_OF_INVESTIGATION_AGENCY
            });
          }
        });
        userDao.bindPolicenum([INVESTIGATION_AGENCY_NUMBER, JUDGMENT_NUMBER], (err, data) => {
          if (err) {
            console.log('判决书编号绑定公安机关编号出错，err是：', err);
          } else {
            if (data.changedRows == 0) {
              console.log('绑定失败');
            } else {
              console.log('判决书编号绑定公安机关编号成功！！！');
            }
          }

        });
      }
    });

  }
}