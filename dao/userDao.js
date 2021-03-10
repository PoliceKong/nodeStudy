const dbpool = require("../config/poolConfig");
const sqlStatement = require("./sqlStatement");
module.exports = {
  //查询有无同名案件
  selectCaseName(array, callback) {
    dbpool.connect(sqlStatement.select_case_name, array, callback)
  },
  //登记案件
  registerCase(array, callback) {
    dbpool.connect(sqlStatement.register_case, array, callback)
  },
  //查询有无同名嫌疑人
  selectSuspect(array, callback) {
    dbpool.connect(sqlStatement.select_suspect, array, callback)
  },
  //嫌疑人登记
  registerSuspect(array, callback) {
    dbpool.connect(sqlStatement.register_suspect, array, callback)
  },
  //绑定案例编号与嫌疑人编号
  bindCaseNum_susNum(array, callback) {
    dbpool.connect(sqlStatement.bind_case_num_susp_num, array, callback)
  },
  //登记涉案食品
  registerCaseFood(array, callback) {

    dbpool.connect(sqlStatement.register_case_food, array, callback)

  },
  //绑定食品与案件编号
  bindCaseFood_Case(array, callback) {
    dbpool.connect(sqlStatement.bind_casefood_case, array, callback)
  },
  //登记毒害物
  registerPioson(array, callback) {
    dbpool.connect(sqlStatement.register_pioson, array, callback)
  },
  //绑定毒害物和食品编号
  bindCasefood_Pioson(array, callback) {
    dbpool.connect(sqlStatement.bind_casefood_pioson, array, callback)
  },
  //同名判决书查询
  selectJudgment(array, callback) {
    dbpool.connect(sqlStatement.select_judgment, array, callback)
  },
  //登记判决书信息
  registerJudgment(array, callback) {
    dbpool.connect(sqlStatement.register_judgment, array, callback)
  },
  //绑定案件编号与判决书编号
  bindCasenumJudgmentNum(array, callback) {
    dbpool.connect(sqlStatement.bind_casenum_judgment_num, array, callback)
  },
  //登记公安机关
  registerPolice(array, callback) {
    dbpool.connect(sqlStatement.register_police, array, callback)
  },
  //查询同名公安机关
  selectPolice(array, callback) {
    dbpool.connect(sqlStatement.select_police, array, callback)
  },
  //根据判决书编号，向判决书信息表写入侦查机关编号
  bindPolicenum(array, callback) {
    dbpool.connect(sqlStatement.bind_police_num, array, callback)
  },
  //查询同名公诉机关
  selectProcuratorate(array, callback) {
    dbpool.connect(sqlStatement.select_procuratorate, array, callback)
  },
  //注册新的公诉机关
  registerProcuratorate(array, callback) {
    dbpool.connect(sqlStatement.register_procuratorate, array, callback)
  },
  //绑定公诉机关编号到判决文书
  bindProcuratorateNum(array, callback) {
    dbpool.connect(sqlStatement.bind_procuratorate_num, array, callback)
  },
  //查询同名法院
  selectCourt(array, callback) {
    dbpool.connect(sqlStatement.selectCourt, array, callback)
  },
  //注册新的法院
  registerCourt(array, callback) {
    dbpool.connect(sqlStatement.register_court, array, callback)
  },
  //绑定法院编号到判决文书
  bindCourtNum(array, callback) {
    dbpool.connect(sqlStatement.bind_court_num, array, callback)
  }

}