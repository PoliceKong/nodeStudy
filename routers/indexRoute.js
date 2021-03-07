const express = require("express");
const userCtrl = require("../controller/userCtrl");
const caseController = require('../controller/caseCtroller');
const suspectCtroller = require("../controller/suspectCtroller");
const caseFoodCtroller = require('../controller/caseFoodController');
const poisonCtroller = require("../controller/poisonCtroller");
const judgmentCtroller = require('../controller/judeMentCtroller');
const policeCtroller = require("../controller/policeCtroller");
const route = express.Router();
//使用post方法拦截网址
route.post('/login.do', userCtrl.userCtrl);
route.post('/caseRg.do', caseController.insertCase)
route.post('/suspect.do', suspectCtroller.insertSuspect);
route.post('/casefood.do', caseFoodCtroller.insertCaseFood);
route.post('/poison.do', poisonCtroller.insertPoison);
route.post('/judgment.do', judgmentCtroller.insertJudgMent);
route.post('/police.do', policeCtroller.insertPolice);




module.exports = route;