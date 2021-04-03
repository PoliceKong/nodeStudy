const dbpool = require('../config/poolConfig');
const sqlStatement = require('./sqlStatement');
module.exports = {
  //查询有无同名案件
  selectCaseName(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_case_name, array, callback);
  },
  //登记案件
  registerCase(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_case, array, callback);
  },
  //查询有无同名嫌疑人
  selectSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_suspect, array, callback);
  },
  //嫌疑人登记
  registerSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_suspect, array, callback);
  },
  //查询案例编号与嫌疑人编号的绑定
  selectCasenumSuspnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenum_suspnum, array, callback);
  },
  //绑定案例编号与嫌疑人编号
  bindCaseNum_susNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_case_num_susp_num, array, callback);
  },
  //登记涉案食品
  registerCaseFood(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_case_food, array, callback);
  },
  //查询食品编号与案件编号的重复绑定
  selectCasenumFoodnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenum_foodnum, array, callback);
  },
  //绑定食品与案件编号
  bindCaseFood_Case(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casefood_case, array, callback);
  },
  //登记毒害物
  registerPioson(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_pioson, array, callback);
  },
  //查询毒害物编号与食品编号
  selectPoisonnumFoodnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_piosonnum_foodnum, array, callback);
  },
  //绑定毒害物和食品编号
  bindCasefood_Pioson(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casefood_pioson, array, callback);
  },
  //同名判决书查询
  selectJudgment(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_judgment, array, callback);
  },
  //登记判决书信息
  registerJudgment(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_judgment, array, callback);
  },
  //查询案件编号与判决书编号的绑定情况
  selectCasenunJudgmentnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenun_judgmentnum, array, callback);
  },
  //绑定案件编号与判决书编号
  bindCasenumJudgmentNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casenum_judgment_num, array, callback);
  },
  //登记公安机关
  registerPolice(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_police, array, callback);
  },
  //查询同名公安机关
  selectPolice(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_police, array, callback);
  },
  //根据判决书编号，向判决书信息表写入侦查机关编号
  bindPolicenum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_police_num, array, callback);
  },
  //查询同名公诉机关
  selectProcuratorate(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_procuratorate, array, callback);
  },
  //注册新的公诉机关
  registerProcuratorate(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_procuratorate, array, callback);
  },
  //绑定公诉机关编号到判决文书
  bindProcuratorateNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_procuratorate_num, array, callback);
  },
  //查询同名法院
  selectCourt(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_court, array, callback);
  },
  //注册新的法院
  registerCourt(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_court, array, callback);
  },
  //绑定法院编号到判决文书
  bindCourtNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_court_num, array, callback);
  },
  //查询同名侦查人员
  selectInvestigation(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_investigation, array, callback);
  },
  //注册新的侦查人员
  registerInvestigation(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_investigation, array, callback);
  },
  //查询同名公诉人员
  selectPubPro(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_pub_pro, array, callback);
  },
  //注册新的公诉人员
  registerPubPro(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_pub_pro, array, callback);
  },
  //查询同名审理人员
  selectReviewer(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_reviewer, array, callback);
  },
  //注册新的审理人员
  registerReviewer(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_reviewer, array, callback);
  },
  //查询同名书记员
  selectClerk(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_clerk, array, callback);
  },
  //登记新的书记员
  regsiterClerk(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.regsiter_clerk, array, callback);
  },
  //查询同名鉴定机构
  selectJiandingjigou(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_jiandingjigou, array, callback);
  },
  //注册新的鉴定机构
  registerJiandingjigou(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_jiandingjigou, array, callback);
  },
  //绑定鉴定机构编号与毒害物编号
  bindPoisonnumAndJDJGnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_poisonnum_jdjgnum, array, callback);
  },
  //查询绑定的毒害物编号与鉴定机构编号
  selectpoisonnumJdjgnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.selectPoisonnum_jdjgnum, array, callback);
  },
  //注册裁决结果
  registerJudgmentResulte(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.regsiter_judgment_resulte, array, callback);
  },
  //注册法条信息
  registerLegal(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_legal, array, callback);
  },
  //查询法条信息
  selectLegal(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_legal, array, callback);
  },
  //根据案件编号查询案件信息
  selectCaseCaseNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.selectcase_casenum, array, callback);
  },
  //查询所有案件
  selectAllcase(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allcase, array, callback);
  },
  //查询所有犯罪嫌疑人数据
  selectAllsuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allsuspect, array, callback);
  },
  //查询单个犯罪嫌疑人信息
  selectOneSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_onesuspect, array, callback);
  },
  //查询所有的毒害物
  selectAllPoisons(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allpoisons, array, callback);
  },

  //查询同名罪名
  selcetSameCrime(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_same_crime, array, callback);
  },
  //注册罪名
  addCrime(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.add_crime_info, array, callback);
  },
  //查詢法條信息
  selectLegalInfo(array, callback){
    'use strict';
    dbpool.connect(sqlStatement.select_same_lagal, array, callback);
  },
  //添加新的法條信息
  addLegalInfo(array, callback){
    'use strict';
    dbpool.connect(sqlStatement.add_legal_info, array, callback);
  }
};
