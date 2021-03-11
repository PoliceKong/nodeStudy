const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertCase(req, res) {

    //获取请求数据
    let CASE_NAME = req.body.CASE_NAME; //案件名称
    let CASE_SOURCE = req.body.CASE_SOURCE; //案件来源
    let TIME_OF_CASE = req.body.TIME_OF_CASE; //发案时间
    let LOCATION_OF_CASE = req.body.LOCATION_OF_CASE; //发案地点
    let AMOUNT_INVOLVED = req.body.AMOUNT_INVOLVED; //涉案金额
    let NUMBER_OF_OFFENDERS = req.body.NUMBER_OF_OFFENDERS; //涉案人数
    let BRIEF_INTRODUCTION = req.body.BRIEF_INTRODUCTION; //简要案情
    //查询数据库中有无同名案件
    userDao.selectCaseName([CASE_NAME], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log("案件已经存在,案件名称是：", CASE_NAME);
          res.status(201).send({
            registerOK: false,
            caseNum: data[0].CASE_NUMBER,
            caseName: data[0].CASE_NAME
          });
        } else {
          // 无同名案件的情况下，执行注册，将新的案件信息写入数据库中
          let CASE_NUMBER = "Case" + randomNum.randomNumber(); //生成随机6位案件编号，唯一
          userDao.registerCase([CASE_NUMBER, CASE_NAME, CASE_SOURCE, TIME_OF_CASE, LOCATION_OF_CASE, AMOUNT_INVOLVED, NUMBER_OF_OFFENDERS, BRIEF_INTRODUCTION], (err, data) => {
            if (err) {
              console.log("新案件登记，数据库出现的err是：", err);
              res.status(500).send();
            } else {
              console.log("案件新登记成功");
              res.status(201).send({
                registerOK: true,
                caseNum: CASE_NUMBER,
                caseName: CASE_NAME
              });
            }
          })
        }
      }
    });
  }
}