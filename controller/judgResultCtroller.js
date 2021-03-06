const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {
  insertJudementResult(req, res) {
    'use strict';
    let TYPE_OF_PENALTY = req.body.TYPE_OF_PENALTY; //获取刑罚类别
    let PENALTY_PERIOD = req.body.PENALTY_PERIOD; //获取刑罚期限
    let IS_PROBATION = req.body.IS_PROBATION; //获取是否缓刑
    let FINE_AMOUNT = req.body.FINE_AMOUNT; //罚金数额
    let IS_ILLEGAL_INCOME = req.body.IS_ILLEGAL_INCOME; // 是否追缴违法所得
    let LIGHT_PLOT = req.body.LIGHT_PLOT; //从轻情节
    let SUSPECT_NUMBER = req.body.SUSPECT_NUMBER; //犯罪嫌疑人编号
    let JUDGMENT_RESULT_NUMBER = 'result' + randomNum.randomNumber(); //生成裁决结果编号
    userDao.registerJudgmentResulte(
      [
        JUDGMENT_RESULT_NUMBER,
        TYPE_OF_PENALTY,
        PENALTY_PERIOD,
        IS_PROBATION,
        FINE_AMOUNT,
        IS_ILLEGAL_INCOME,
        LIGHT_PLOT,
        SUSPECT_NUMBER,
      ],
      (err) => {
        console.log(req.body);

        if (err) {
          res.status(500).send();
          console.log(err);
        } else {
          console.log('裁决结果登记成功');
          res.status(201).send({
            regsiterResultOk: true,
            judgmentResultNum: JUDGMENT_RESULT_NUMBER,
          });
        }
      }
    );
  },
  //添加法條信息
  addLegalInfo(req, res) {
    'use strict';
    let ACT_NAME = req.body.ACT_NAME; //法案名称
    let ACT_CLAUSE = req.body.ACT_CLAUSE; //第*条款
    let LEGAL_CONTENT = req.body.LEGAL_CONTENT; //条款具体内容
    let JUDGMENT_RESULT_NUMBER = req.body.JUDGMENT_RESULT_NUMBER; //裁决结果编号
    userDao.selectLegalInfo([ACT_NAME, ACT_CLAUSE], (err, result) => {
      if (err) {
        console.log('同名法条查询失败', err);
        res.status(500).send();
      } else {
        if (result.length) {
          console.log('该法条已经存在');
          userDao.addLegalInfo(
            [
              result[0].ARTICLE_NUMBER,
              ACT_NAME,
              ACT_CLAUSE,
              LEGAL_CONTENT,
              JUDGMENT_RESULT_NUMBER,
            ],
            (err) => {
              if (err) {
                console.log('法条注册失败',err);
                res.status(500).send();
              } else {
                console.log('法条注册成功');
                res.status(201).send();
              }
            }
          );
        }else{
          let ARTICLE_NUMBER = 'legal'+randomNum.randomNumber();
          userDao.addLegalInfo(
            [
              ARTICLE_NUMBER,
              ACT_NAME,
              ACT_CLAUSE,
              LEGAL_CONTENT,
              JUDGMENT_RESULT_NUMBER,
            ],
            (err) => {
              if (err) {
                console.log('法条注册失败',err);
                res.status(500).send();
              } else {
                console.log('法条注册成功');
                res.status(201).send();
              }
            }
          );
        }
      }
    });
  },
  //根据嫌疑人编号查询裁决结果信息
  selectJudgmentResultBySuspectNum(req,res){
    'use strict';
    let SUSPECT_NUMBER = req.body.SUSPECT_NUMBER; //犯罪嫌疑人编号
    userDao.selectJudgmentResultBySuspectNum([SUSPECT_NUMBER],(err,result) => {
      if (err) {
        console.log('根据嫌疑人编号查询裁决结果失败',err);
        res.status(500).send();
      } else {
        console.log('根据嫌疑人编号查询裁决结果成功');
        res.status(200).send(result);

      }

    });
  },
  //根据犯罪嫌疑人编号查询涉嫌的罪名信息
  selectChargeResultBySuspectNum(req,res){
    'use strict';
    let SUSPECT_NUMBER = req.body.SUSPECT_NUMBER; //犯罪嫌疑人编号
    userDao.selectChargeResultBySuspectNum([SUSPECT_NUMBER],(err,result) => {
      if (err) {
        console.log('根据嫌疑人编号查询罪名结果失败',err);
        res.status(500).send();
      } else {
        console.log('根据嫌疑人编号查询罪名结果成功');
        res.status(200).send(result);

      }

    });
  },
  //根据裁决结果编号更新裁决结果
  updateJudgMentResultByJudgmentNum(req,res){
    'use strict';
    let JUDGMENT_RESULT_NUMBER=req.body.JUDGMENT_RESULT_NUMBER;
    let TYPE_OF_PENALTY = req.body.TYPE_OF_PENALTY; //获取刑罚类别
    let PENALTY_PERIOD = req.body.PENALTY_PERIOD; //获取刑罚期限
    let IS_PROBATION = req.body.IS_PROBATION; //获取是否缓刑
    let FINE_AMOUNT = req.body.FINE_AMOUNT; //罚金数额
    let IS_ILLEGAL_INCOME = req.body.IS_ILLEGAL_INCOME; // 是否追缴违法所得
    let LIGHT_PLOT = req.body.LIGHT_PLOT; //从轻情节
    userDao.updateJudgmentResultByResultNum([TYPE_OF_PENALTY,PENALTY_PERIOD,IS_PROBATION,FINE_AMOUNT,IS_ILLEGAL_INCOME,LIGHT_PLOT,JUDGMENT_RESULT_NUMBER],(err) => {
      if (err) {
        console.log('根据裁决结果编号更新裁决结果数据失败',err);
        res.status(500).send();
      } else {
        console.log('根据裁决结果编号更新裁决结果数据成功');
        res.status(201).send();
      }
    });
  },
};
