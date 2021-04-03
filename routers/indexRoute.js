const express = require('express');
const caseController = require('../controller/caseCtroller');
const suspectCtroller = require('../controller/suspectCtroller');
const caseFoodCtroller = require('../controller/caseFoodController');
const poisonCtroller = require('../controller/poisonCtroller');
const judgmentCtroller = require('../controller/judeMentCtroller');
const policeCtroller = require('../controller/policeCtroller');
const procuratorateCtroller = require('../controller/procuratorateCtroller');
const courtCtroller = require('../controller/courtCtroller');
const investigtionCtro = require('../controller/investigationCtro');
const prosecutorCtroller = require('../controller/prosecutorCtroller');
const reviewerCtroller = require('../controller/reviewerCtroller');
const clerkCtroller = require('../controller/clerkCtroller');
const jiandingjigouCtroller = require('../controller/jiandingjigouCtroller');
const judgmentResultCtroller = require('../controller/judgResultCtroller');
const legalCtroller = require('../controller/legalCtroller');
const route = express.Router();
//使用post方法拦截网址

route.post('/caseRg.do', caseController.insertCase); //案件登记
route.post('/suspect.do', suspectCtroller.insertSuspect); //嫌疑人登记
route.post('/casefood.do', caseFoodCtroller.insertCaseFood); //涉案食品登记
route.post('/poison.do', poisonCtroller.insertPoison); //毒害物登记
route.post('/judgment.do', judgmentCtroller.insertJudgMent); //判决书基本信息登记
route.post('/police.do', policeCtroller.insertPolice); //侦查机关（公安机关）登记
route.post('/procuratorate.do', procuratorateCtroller.insertProcuratorate); //公诉机关（检察院）登记
route.post('/court.do', courtCtroller.insertCourt); //审理机关（法院）登记
route.post('/investigation.do', investigtionCtro.insertInvestigation); //登记侦查人员
route.post('/prosecutor.do', prosecutorCtroller.insertProsecutor); //登记公诉人员
route.post('/reviewer.do', reviewerCtroller.insertReviewer); //登记审理人员
route.post('/clerk.do', clerkCtroller.insertClerk); //登记法院书记员
route.post('/jiandingjigou.do', jiandingjigouCtroller.insertJidingjigou); //鉴定机构登记
route.post('/judgResult.do', judgmentResultCtroller.insertJudementResult); //裁决结果登记
route.post('/legal.do', legalCtroller.insertLegal); //法条信息登记
route.post('/selcase.do', caseController.selectCaseInfoFromNum); //根据案件编号查询案件信息
route.post('/queryAllCases.do', caseController.selectAllcase); //查询所有的案件信息
route.post('/queryAllsuspect.do', suspectCtroller.selectAllSuspect); //查询所有犯罪嫌疑人的信息
route.post('/queryOnesuspect.do', suspectCtroller.selectOneSuspect); //查询一个犯罪嫌疑人的信息
route.post('/queryAllPoisonsdata.do', poisonCtroller.selectAllPoisonData); //查询所有毒害物数据
route.post('/addCrime.do', suspectCtroller.addCrime); //添加犯罪罪名
route.post('/addLegal.do',judgmentResultCtroller.addLegalInfo);//添加新的法条
module.exports = route;