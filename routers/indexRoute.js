const express = require("express");
const userCtrl = require("../controller/userCtrl");
const caseController = require('../controller/caseCtroller');
const suspectCtroller = require("../controller/suspectCtroller");
const caseFoodCtroller = require('../controller/caseFoodController');
const poisonCtroller = require("../controller/poisonCtroller");
const judgmentCtroller = require('../controller/judeMentCtroller');
const policeCtroller = require("../controller/policeCtroller");
const procuratorateCtroller = require('../controller/procuratorateCtroller');
const route = express.Router();
//使用post方法拦截网址
route.post('/login.do', userCtrl.userCtrl); //测试用
route.post('/caseRg.do', caseController.insertCase); //案件登记
route.post('/suspect.do', suspectCtroller.insertSuspect); //嫌疑人登记
route.post('/casefood.do', caseFoodCtroller.insertCaseFood); //涉案食品登记
route.post('/poison.do', poisonCtroller.insertPoison); //毒害物登记
route.post('/judgment.do', judgmentCtroller.insertJudgMent); //判决书基本信息登记
route.post('/police.do', policeCtroller.insertPolice); //侦查机关（公安机关）登记
route.post('/procuratorate.do', procuratorateCtroller.insertProcuratorate); //公诉机关（检察院）登记




module.exports = route;