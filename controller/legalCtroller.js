const userDao = require("../dao/userDao");
const randomNum = require("./randomNumber");
module.exports = {
  insertLegal(req, res) {
    let ACT_NAME = req.body.ACT_NAME; //法案名称
    let ACT_CLAUSE = req.body.ACT_CLAUSE; //条款信息
    let LEGAL_CONTENT = req.body.LEGAL_CONTENT; //具体内容
    let JUDGMENT_RESULT_NUMBER = req.body.JUDGMENT_RESULT_NUMBER; //裁决结果编号
    userDao.selectLegal([ACT_NAME, ACT_CLAUSE], (req, res) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('无需重复登记法条');
          res.status(201).send({
            registerActOk: false,
            ArticleNumber: data[0].ARTICLE_NUMBER
          });
        } else {
          let ARTICLE_NUMBER = "legal" + randomNum.randomNumber(); //随机生成法条编码
          userDao.registerLegal([ARTICLE_NUMBER, ACT_NAME, ACT_CLAUSE, LEGAL_CONTENT, JUDGMENT_RESULT_NUMBER], (err, data) => {
            if (err) {
              res.status(500).send();
            } else {
              console.log('法条登记成功');
              res.status(201).send({
                registerActOk: true,
                ArticleNumber: ARTICLE_NUMBER
              });
            }
          });
        }
      }
    });
  }
}