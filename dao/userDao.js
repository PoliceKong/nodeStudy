const dbpool = require('../config/poolConfig');
const sqlStatement = require('./sqlStatement');
module.exports = {
  // --------------------------1.案件信息模块--------------------------------------------------
  //1.1 登记案件
  registerCase(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_case, array, callback);
  },
  //1.2 查询有无同名案件
  selectCaseName(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_case_name, array, callback);
  },
  //1.3 根据案件编号查询案件信息
  selectCaseCaseNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.selectcase_casenum, array, callback);
  },
  //1.4 查询所有案件信息
  selectAllcase(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allcase, array, callback);
  },
  // ---------------------------2.嫌疑人信息模块------------------------------------------------
  //2.1 查询同名嫌疑人
  selectSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_suspect, array, callback);
  },
  //2.2 註冊嫌疑人信息
  registerSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_suspect, array, callback);
  },
  //2.3 查询案例编号与嫌疑人编号的绑定
  selectCasenumSuspnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenum_suspnum, array, callback);
  },
  //2.4 绑定案例编号与嫌疑人编号
  bindCaseNum_susNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_case_num_susp_num, array, callback);
  },
  //2.5 查询所有犯罪嫌疑人数据
  selectAllsuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allsuspect, array, callback);
  },
  //2.6 查询单个犯罪嫌疑人信息
  selectOneSuspect(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_onesuspect, array, callback);
  },
  //2.7 根据案件编号查询犯罪嫌疑人信息
  selectSuspectByCaseNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_suspect_by_CaseNum, array, callback);
  },
  //--------------------------- 3.涉案食品信息模块----------------------------------------------
  //3.1 登记涉案食品
  registerCaseFood(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_case_food, array, callback);
  },
  //3.2 查询食品编号与案件编号的重复绑定
  selectCasenumFoodnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenum_foodnum, array, callback);
  },
  //3.3 绑定案件编号与涉案食品
  bindCaseFood_Case(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casefood_case, array, callback);
  },
  //3.4 查询所有的涉案食品信息
  selectAllFoodsInfo(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.seclect_all_foodsInfo, array, callback);
  },
  //3.5 根据案例编号查询涉案食品
  selectFoodByCaseNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_foodInfo_ByCaseNum, array, callback);
  },
  // ---------------------------4.毒害物信息模块-----------------------------------------------
  //4.1 登记毒害物
  registerPioson(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_pioson, array, callback);
  },
  //4.2 查询毒害物编号与食品编号
  selectPoisonnumFoodnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_piosonnum_foodnum, array, callback);
  },
  //4.3 绑定毒害物和食品编号
  bindCasefood_Pioson(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casefood_pioson, array, callback);
  },
  //4.4 查询所有的毒害物
  selectAllPoisons(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_allpoisons, array, callback);
  },
  //4.5 根据案件编号查询毒害物信息
  selectPoisoninfoByCaseNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_poisonInfo_byCaseNum, array, callback);
  },
  // ----------------------------5.判决书信息模块--------------------------------------------
  //5.1 同名判决书查询
  selectJudgment(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_judgment, array, callback);
  },
  //5.2 登记判决书信息
  registerJudgment(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_judgment, array, callback);
  },
  //5.3 查询案件编号与判决书编号的绑定情况
  selectCasenunJudgmentnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_casenun_judgmentnum, array, callback);
  },
  //5.4 绑定案件编号与判决书编号
  bindCasenumJudgmentNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_casenum_judgment_num, array, callback);
  },
  // 5.5 根据案例编号查询判决书基础信息
  selectJudgmengByCaseNum(array, callback){
    'use strict';
    dbpool.connect(sqlStatement.select_judgmentInfo_byCaseNum, array, callback);
  },
  // ----------------------------6.侦查机关信息模块-------------------------------------------
  //6.1 登记公安机关
  registerPolice(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_police, array, callback);
  },
  //6.2 查询同名公安机关
  selectPolice(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_police, array, callback);
  },
  //6.3 根据判决书编号，向判决书信息表写入侦查机关编号
  bindPolicenum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_police_num, array, callback);
  },
  //6.4 根据案件编号查询侦查机关信息
  selectPoliceStationByCaseNum(array, callback){
    'use strict';
    dbpool.connect(sqlStatement.select_police_byCaseNum, array, callback);
  },
  //--------------------------- 7.公诉机关信息模块--------------------------------------------
  //7.1 查询同名公诉机关
  selectProcuratorate(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_procuratorate, array, callback);
  },
  //7.2 注册新的公诉机关
  registerProcuratorate(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_procuratorate, array, callback);
  },
  //7.3 绑定公诉机关编号到判决文书
  bindProcuratorateNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_procuratorate_num, array, callback);
  },
  // 7.4 根据案例编号查询公诉机关信息
 selectProcuratorateByCaseNum(array, callback){
  'use strict';
  dbpool.connect(sqlStatement.select_procuratorate_byCaseNum, array, callback);
 },
  //--------------------------- 8.审判机关信息模块--------------------------------------------
  //8.1 查询同名法院
  selectCourt(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_court, array, callback);
  },
  //8.2 注册新的法院
  registerCourt(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_court, array, callback);
  },
  //8.3 绑定法院编号到判决文书
  bindCourtNum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_court_num, array, callback);
  },
  //8.4 根据案例编号查询审判机关信息
  selectCourtInfoByCaseNum(array, callback){
    'use strict';
    dbpool.connect(sqlStatement.select_courtInfo_byCaseNum, array, callback);
  },
  // ---------------------------9.侦查人员信息模块--------------------------------------------
  //9.1 查询同名侦查人员
  selectInvestigation(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_investigation, array, callback);
  },
  //9.2 注册新的侦查人员
  registerInvestigation(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_investigation, array, callback);
  },
  // ---------------------------10.公诉人员信息模块------------------------------------------
  //10.1 查询同名公诉人员
  selectPubPro(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_pub_pro, array, callback);
  },
  //10.2 注册新的公诉人员
  registerPubPro(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_pub_pro, array, callback);
  },
  // ---------------------------11.审理人员信息模块----------------------------------------
  //11.1 查询同名审理人员
  selectReviewer(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_reviewer, array, callback);
  },
  //11.2 注册新的审理人员
  registerReviewer(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_reviewer, array, callback);
  },
  // ---------------------------12.书记员信息模块-----------------------------------------
  //12.1 查询同名书记员
  selectClerk(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_clerk, array, callback);
  },
  //12.2 登记新的书记员
  regsiterClerk(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.regsiter_clerk, array, callback);
  },
  // --------------------------13.鉴定机构信息模块----------------------------------------
  //13.1 查询同名鉴定机构
  selectJiandingjigou(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_jiandingjigou, array, callback);
  },
  //13.2 注册新的鉴定机构
  registerJiandingjigou(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_jiandingjigou, array, callback);
  },
  //13.3 绑定鉴定机构编号与毒害物编号
  bindPoisonnumAndJDJGnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.bind_poisonnum_jdjgnum, array, callback);
  },
  //13.4 查询绑定的毒害物编号与鉴定机构编号
  selectpoisonnumJdjgnum(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.selectPoisonnum_jdjgnum, array, callback);
  },
  //13.5 查询所有的鉴定机构信息
  selectAllAppraisalAgencyInfo(array, callback) {
    'use strict';
    dbpool.connect(
      sqlStatement.select_all_appraisalAgencyInfo,
      array,
      callback
    );
  },
  //13.6 根据案件编号查询鉴定机构
  selectAppraisalagencyinfoByCaseNum(array, callback) {
    'use strict';
    dbpool.connect(
      sqlStatement.select_appraisalAgencyInfo_byCaseNum,
      array,
      callback
    );
  },
  // -------------------------14.判决结果信息模块-----------------------------------------
  //14.1 注册裁决结果
  registerJudgmentResulte(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.regsiter_judgment_resulte, array, callback);
  },
  //14.2 注册法条信息
  registerLegal(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.register_legal, array, callback);
  },
  //14.3 查询法条信息
  selectLegal(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_legal, array, callback);
  },
  //14.4 查询同名罪名
  selcetSameCrime(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_same_crime, array, callback);
  },
  //14.5 注册罪名
  addCrime(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.add_crime_info, array, callback);
  },
  //14.6 查詢法條信息
  selectLegalInfo(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.select_same_lagal, array, callback);
  },
  //14.7 添加新的法條信息
  addLegalInfo(array, callback) {
    'use strict';
    dbpool.connect(sqlStatement.add_legal_info, array, callback);
  },
};
