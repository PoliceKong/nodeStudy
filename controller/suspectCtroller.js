const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertSuspect(req, res) {
    let SUBJECT_CATEGORY = req.body.SUBJECT_CATEGORY; //主体类别
    let NAME_OF_SUSPECT = req.body.NAME_OF_SUSPECT; //嫌疑人姓名
    let SUSPECT_GENDER = req.body.SUSPECT_GENDER; //性别
    let NATION = req.body.NATION; //民族
    let EDUCATION = req.body.EDUCATION; //文化程度
    let DATE_OF_BIRTH = req.body.DATE_OF_BIRTH; //出生日期
    let HOMETOWN = req.body.HOMETOWN; //籍贯
    let RESIDENCE_ADDRESS = req.body.RESIDENCE_ADDRESS; //户籍地址
    let CURRENT_ADDRESS = req.body.CURRENT_ADDRESS; //现住址
    let EMPLOYER = req.body.EMPLOYER; //工作单位
    let OCCUPATION = req.body.OCCUPATION; //职业
    let CRIME_TIME = req.body.CRIME_TIME; //犯罪时间
    let AGE_OF_CRIME = req.body.AGE_OF_CRIME; //犯罪年龄
    let CRIMINAL_HISTORY = req.body.CRIMINAL_HISTORY; //前科情况
    let CRIMINAL_BEHAVIOR = req.body.CRIMINAL_BEHAVIOR; //犯罪行为
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    //现在数据库中查询是否存在相同的人员
    userDao.selectSuspect([NAME_OF_SUSPECT, SUSPECT_GENDER, DATE_OF_BIRTH], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('嫌疑人已经存在，名字是：', NAME_OF_SUSPECT);
          userDao.selectCasenumSuspnum([data[0].SUSPECT_NUMBER, CASE_NUMBER], (err, data) => {
            if (err) {
              res.status(500).send();
            } else {
              if (data.length !== 0) {
                console.log('重复绑定');
              } else {
                userDao.bindCaseNum_susNum([data[0].SUSPECT_NUMBER, CASE_NUMBER], (err, data) => {
                  if (err) {
                    console.log('嫌疑人编号与案件编号绑定失败，err是：', err);
                    res.status(500).send();
                  } else {
                    console.log('新的案件与数据库已有的嫌疑人绑定成功！');
                  }
                });
              }
            }
          });
          res.status(201).send({
            suspectOk: false,
            suspectNumber: data[0].SUSPECT_NUMBER,
          });
        } else {
          let SUSPECT_NUMBER = "R" + randomNum.randomNumber(); //生成嫌疑人编号
          userDao.registerSuspect([SUSPECT_NUMBER, SUBJECT_CATEGORY, NAME_OF_SUSPECT, SUSPECT_GENDER, NATION, EDUCATION, DATE_OF_BIRTH, HOMETOWN, RESIDENCE_ADDRESS, CURRENT_ADDRESS, EMPLOYER, OCCUPATION, CRIME_TIME, AGE_OF_CRIME, CRIMINAL_HISTORY, CRIMINAL_BEHAVIOR], (err, data) => {
            if (err) {
              console.log('嫌疑人登记出现错误，数据库err是：', err);
              res.status(500).send();
            } else {
              console.log('嫌疑人信息登记成功');
              userDao.selectCasenumSuspnum([SUSPECT_NUMBER, CASE_NUMBER], (err, data) => {
                if (err) {
                  res.status(500).send();
                } else {
                  if (data.length !== 0) {
                    console.log('重复绑定');
                  } else {
                    userDao.bindCaseNum_susNum([SUSPECT_NUMBER, CASE_NUMBER], (err, data) => {
                      if (err) {
                        console.log('嫌疑人编号与案件编号绑定出错，err是：', err);
                        res.status(500).send();
                      } else {
                        console.log('嫌疑人编号与案件编号绑定成功');
                      }
                    });
                  }
                }
              });
              res.status(201).send({
                suspectOk: true,
                suspectNumber: SUSPECT_NUMBER,
              });
            }
          });
        }
      }
    })
  }
}