const userDao = require("../dao/userDao");
module.exports = {
  insertJudgMent(req, res) {
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取案件编号
    let JUDGMENT_NUMBER = req.body.JUDGMENT_NUMBER; //获取判决书文号
    let DOCUMENT_NAME = req.body.DOCUMENT_NAME; //获取判决书名称
    let TRIAL_PROCEDURE = req.body.TRIAL_PROCEDURE; //获取审理程序
    let PUBLIC_PROSECUTION_DATE = req.body.PUBLIC_PROSECUTION_DATE; //获取公诉日期
    let JUDGMENT_DATE = req.body.JUDGMENT_DATE; //获取判决日期

    userDao.selectJudgment([JUDGMENT_NUMBER], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('该判决书已经存在，名称是：', JUDGMENT_NUMBER);
          res.status(201).send({
            judeMentOK: false,
            caseNum: CASE_NUMBER,
            judgmentNum: JUDGMENT_NUMBER
          });
        } else {
          userDao.registerJudgment([JUDGMENT_NUMBER, DOCUMENT_NAME, TRIAL_PROCEDURE, PUBLIC_PROSECUTION_DATE, JUDGMENT_DATE], (err, data) => {
            if (err) {
              console.log('判决书注册是遇到错误，err是：', err);
              res.status(500).send();
            } else {
              console.log('判决书注册成功');
              userDao.selectCasenunJudgmentnum([CASE_NUMBER, JUDGMENT_NUMBER], (err, data) => {
                if (err) {
                  res.status(500).send();
                } else {
                  if (data.length !== 0) {
                    console.log('该判决书编号与案件编号已经绑定，无需重复绑定');
                    res.status(201).send({
                      judeMentOK: true,
                      caseNum: CASE_NUMBER,
                      judgmentNum: JUDGMENT_NUMBER
                    });
                  } else {
                    userDao.bindCasenumJudgmentNum([CASE_NUMBER, JUDGMENT_NUMBER], (err, data) => {
                      if (err) {
                        console.log('案件编号与文书编号绑定失败，err是：', err);
                        res.status(500).send();
                      } else {
                        console.log('案件编号与文书编号绑定成功');
                        res.status(201).send({
                          judeMentOK: true,
                          caseNum: CASE_NUMBER,
                          judgmentNum: JUDGMENT_NUMBER
                        });
                      }
                    });
                  }
                }
              });
            }
          });
        }
      }
    });
  }
}