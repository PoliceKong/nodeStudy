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
const judgResultCtroller = require('../controller/judgResultCtroller');
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
route.post('/querySuspectDataByCaseNum.do',suspectCtroller.selectSuspectDataByCaseNum);//根据案例编号查询犯罪嫌疑人数据
route.post('/queryAllPoisonsdata.do', poisonCtroller.selectAllPoisonData); //查询所有毒害物数据
route.post('/addCrime.do', suspectCtroller.addCrime); //添加犯罪罪名
route.post('/addLegal.do', judgmentResultCtroller.addLegalInfo); //添加新的法条
route.post('/queryAllFoodInfo.do', caseFoodCtroller.selectAllFoodInfo); //查询所有的涉案食品信息
route.post('/queryFoodByCaseNum.do', caseFoodCtroller.selectFoodByCaseNum); //根据案件编号查询所有食品
route.post('/queryPoisonByCaseNum.do', poisonCtroller.selectPoisonsByCaseNum); //根据案件编号查询毒害物信息
route.post('/queryJdjgByCaseNum.do', jiandingjigouCtroller.selectJdjgByCaseNum); //根据案例编号查询鉴定机构信息
route.post('/queryJudgmentInfoByCaseNum.do',judgmentCtroller.selectJudgmentInfoByCaseNum); //根据案例编号查询判决书基础信息
route.post('/queryAllJudgmentInfo.do',judgmentCtroller.selectAllJudgmentData);//查询所有的判决书基础数据
route.post('/queryPoliceInfoByCaseNum.do',policeCtroller.selectPoliceStationDataByCaseNum); //根据案例编号查询侦查机关信息
route.post('/queryProcuratorateInfoByCaseNum.do',procuratorateCtroller.selectProcuratorateDataByCaseNum);//根据案例编号查询公诉机关信息
route.post('/queryCourtInfoByCaseNum.do',courtCtroller.selectCourtDataByCaseNum);//根据案例编号查询审判机关信息
route.post('/updateBaseCaseInfo.do',caseController.updateBaseCaseInfoByCaseNum);//根据案例编号更新案例基础数据
route.post('/queryJudgmentResultBySuspectNum.do',judgResultCtroller.selectJudgmentResultBySuspectNum);//根据嫌疑人编号查询裁决结果
route.post('/queryChargeResultBySuspectNum.do',judgResultCtroller.selectChargeResultBySuspectNum);//根据犯罪嫌疑人信息查询罪名结果
route.post('/updateSuspectBaseIndo.do',suspectCtroller.updateSuspectBaseInfoBySuspectNum);//更新犯罪嫌疑人基础数据
route.post('/updateJudgmentResultByNum.do',judgResultCtroller.updateJudgMentResultByJudgmentNum);//根据裁决结果编号更新裁决结果
route.post('/updateChargeInfoByNum.do',suspectCtroller.updateChargeInfoByChargeNum);//根据罪名编号更新罪名信息
module.exports = route;
