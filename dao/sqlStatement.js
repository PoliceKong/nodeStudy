//将具体业务的sql语句独立出来，全部存储业务需要的sql语句，对数据库内容进行集中管理CREATE TABLE newtable (
const sqlStatement = {
  //--------------------------------------1.案例信息部分----------------------------
  //1.1 登记案件信息
  register_case:
    'insert into case_information_form(CASE_NUMBER, CASE_NAME,CASE_SOURCE, TIME_OF_CASE, LOCATION_OF_CASE,AMOUNT_INVOLVED,NUMBER_OF_OFFENDERS,BRIEF_INTRODUCTION) values(?,?,?,?,?,?,?,?);',
  //1.2 查询同名案件
  select_case_name: 'select * from case_information_form where CASE_NAME=?;',
  //1.3 根据案件编号查询案件信息
  selectcase_casenum:
    'select * from case_information_form where CASE_NUMBER=?;',
  //1.4 查询数据库中所有的案件信息
  select_allcase: 'select * from case_information_form',

  //----------------------------------------2.嫌疑人信息部分--------------------------------
  //2.1 查询同名嫌疑人
  select_suspect:
    'select * from suspect_information_form where NAME_OF_SUSPECT = ? and SUSPECT_GENDER =? and DATE_OF_BIRTH =?;',
  //2.2 注册嫌疑人
  register_suspect:
    'insert into suspect_information_form(SUSPECT_NUMBER,SUBJECT_CATEGORY,NAME_OF_SUSPECT,SUSPECT_GENDER,NATION,EDUCATION,DATE_OF_BIRTH,HOMETOWN,RESIDENCE_ADDRESS,CURRENT_ADDRESS,EMPLOYER,OCCUPATION,CRIME_TIME,AGE_OF_CRIME,CRIMINAL_HISTORY,CRIMINAL_BEHAVIOR) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
  //2.3 查询绑定的案件编号与嫌疑人编号
  select_casenum_suspnum:
    'select * from case_and_suspect_association_form where SUSPECT_NUMBER=? and CASE_NUMBER=?;',
  //2.4 绑定案件编号&嫌疑人编号
  bind_case_num_susp_num:
    'insert into case_and_suspect_association_form(SUSPECT_NUMBER,CASE_NUMBER) values(?,?);',
  //2.5 查询所有犯罪嫌疑人数据
  select_allsuspect: 'select * from suspect_information_form;',
  //2.6 查询一个犯罪嫌疑人的信息
  select_onesuspect:
    'select * from suspect_information_form where SUSPECT_NUMBER = ?;',
  //2.7 根据案例编号查询犯罪嫌疑人信息
  select_suspect_by_CaseNum:
    'select * from suspect_information_form where SUSPECT_NUMBER in (select SUSPECT_NUMBER from case_and_suspect_association_form where CASE_NUMBER=?);',

  //---------------------------------------3.涉案食品信息部分------------------------------
  //3.1 登记涉案食品
  register_case_food:
    'insert into food_information_form(FOOD_NUMBER,FOOD_NAME,FOOD_TYPE,FOOD_INGREDIENTS,FOOD_QUANTITY) values(?,?,?,?,?);',
  //3.2 查询案件编号与食品编号重复绑定问题
  select_casenum_foodnum:
    'select * from case_and_food_form where CASE_NUMBER=? and FOOD_NUMBER=?;',
  //3.3 绑定案件编号与涉案食品
  bind_casefood_case:
    'insert into case_and_food_form(CASE_NUMBER,FOOD_NUMBER)values(?,?);',
  //3.4 查询所有的涉案食品信息
  seclect_all_foodsInfo: 'select * from food_information_form;',
  //3.5 根据案件编号查询所有的涉案食品
  select_foodInfo_ByCaseNum:
    'select * from food_information_form where FOOD_NUMBER in (select FOOD_NUMBER from case_and_food_form where  CASE_NUMBER = ?);',

  //-----------------------------------------4.毒害物信息部分---------------------------------
  //4.1 登记毒害物
  register_pioson:
    'insert into poison_information_form(POISON_NUMBER,SCIENTIFIC_NAME_OF_POISON,POISON_ALIAS_01,POISON_ALIAS_02,TOXIC_CHEMICAL_COMPOSITION,ACTUAL_MEASUREMENT_OF_POISON) values(?,?,?,?,?,?);',
  //4.2 查询毒害物编号与涉案食品编号
  select_piosonnum_foodnum:
    'select * from food_and_poisons_form where FOOD_NUMBER=? and POISON_NUMBER =?;',
  //4.3 绑定毒害物与涉案食品编号
  bind_casefood_pioson:
    'insert into food_and_poisons_form (FOOD_NUMBER,POISON_NUMBER) values (?,?);',
  //4.4 查询所有的毒害物
  select_allpoisons: 'select * from poison_information_form;',
  //4.5 根据案件编号查询毒害物信息
  select_poisonInfo_byCaseNum:
    'select * from poison_information_form where POISON_NUMBER in (select POISON_NUMBER from food_and_poisons_form where  FOOD_NUMBER in (select FOOD_NUMBER from case_and_food_form where CASE_NUMBER=?));',

  //-------------------------------------------5.判决书信息部分-----------------------------
  //5.1 根据判决书编号查询相同的判决书
  select_judgment:
    'select * from judgment_information_form where JUDGMENT_NUMBER =?;',
  //5.2 登记新的判决书
  register_judgment:
    'insert into judgment_information_form (JUDGMENT_NUMBER,DOCUMENT_NAME,TRIAL_PROCEDURE,PUBLIC_PROSECUTION_DATE,JUDGMENT_DATE) values (?,?,?,?,?);',
  //5.3 查询案件编号与判决书编号的绑定情况
  select_casenun_judgmentnum:
    'select * from judgments_and_cases_form where CASE_NUMBER =? and JUDGMENT_NUMBER=?;',
  //5.4 绑定案件编号与判决书编号
  bind_casenum_judgment_num:
    'insert into judgments_and_cases_form (CASE_NUMBER,JUDGMENT_NUMBER) values (?,?);',
  //5.5 根据案例编号查询判决书基础信息
  select_judgmentInfo_byCaseNum:'select * from judgment_information_form where JUDGMENT_NUMBER in (select JUDGMENT_NUMBER from judgments_and_cases_form where CASE_NUMBER=?);',

  //------------------------------------------6.侦查机关信息部分-------------------------------
  //6.1 登记侦查机关（公安机关）信息
  register_police:
    'insert into investigation_agency_information_form (INVESTIGATION_AGENCY_NUMBER,NAME_OF_INVESTIGATION_AGENCY,INVESTIGATIVE_AGENCY_LEVEL) values (?,?,?);',
  //6.2 查找同名公安机关
  select_police:
    'select * from investigation_agency_information_form where NAME_OF_INVESTIGATION_AGENCY=? and INVESTIGATIVE_AGENCY_LEVEL=?;',
  //6.3 根据判决书编号，绑定公安机关编号
  bind_police_num:
    'update judgment_information_form set INVESTIGATION_AGENCY_NUMBER =? where JUDGMENT_NUMBER =?;',
  //6.4 根据案例编号查询侦查机关信息
  select_police_byCaseNum:'select * from investigation_agency_information_form where INVESTIGATION_AGENCY_NUMBER in (select INVESTIGATION_AGENCY_NUMBER from judgment_information_form where JUDGMENT_NUMBER in (select JUDGMENT_NUMBER from judgments_and_cases_form where CASE_NUMBER=?));',

  //------------------------------------------7.公诉机关信息部分-------------------------------
  //7.1 查询同名公诉机关（检察院）
  select_procuratorate:
    'select * from public_prosecution_information_form where NAME_OF_PROCURATORATE =? and PROCURATORATE_LEVEL=?;',
  //7.2 注册新的公诉机关
  register_procuratorate:
    'insert into public_prosecution_information_form (PROCURATORATE_NUMBER,NAME_OF_PROCURATORATE,PROCURATORATE_LEVEL) values(?,?,?);',
  //7.3 绑定公诉机关编号与判决文书编号
  bind_procuratorate_num:
    'update judgment_information_form set PROCURATORATE_NUMBER =? where JUDGMENT_NUMBER =?;',
  //7.4 根据案例编号查询公诉机关信息
  select_procuratorate_byCaseNum:'select * from public_prosecution_information_form where PROCURATORATE_NUMBER in (select PROCURATORATE_NUMBER from judgment_information_form where JUDGMENT_NUMBER in (select JUDGMENT_NUMBER from judgments_and_cases_form where CASE_NUMBER=?));',

  //--------------------------------------------8.判决机关信息部分------------------------------
  //8.1 查询同名法院
  select_court:
    'select * from information_form_of_trial_agency where COURT_NAME=? and COURT_LEVEL=?;',
  //8.2 注册新的法院信息
  register_court:
    'insert into information_form_of_trial_agency (COURT_NUMBER,COURT_NAME,COURT_LEVEL) values (?,?,?);',
  //8.3 绑定法院编号与判决书编号
  bind_court_num:
    'update judgment_information_form set COURT_NUMBER =? where JUDGMENT_NUMBER =?;',
  //8.4 根据案例编号查询审判机关信息
  select_courtInfo_byCaseNum:'select * from information_form_of_trial_agency where COURT_NUMBER in (select COURT_NUMBER from judgment_information_form where JUDGMENT_NUMBER in (select JUDGMENT_NUMBER from judgments_and_cases_form where CASE_NUMBER=?));',

  //---------------------------------------------9.侦查人员信息部分-----------------------
  //9.1 查询同名侦查人员
  select_investigation:
    'select * from investigator_information_form where INVESTIGATOR_NAME=? and INVESTIGATION_AGENCY_NUMBER=?;',
  //9.2 注册新的侦查人员
  register_investigation:
    'insert into investigator_information_form (INVESTIGATOR_NUMBER,INVESTIGATOR_NAME,INVESTIGATION_AGENCY_NUMBER) values (?,?,?);',
  // 9.3 根据案件编号查询侦查人员信息


  //---------------------------------------------10.公诉人员信息部分---------------------------
  //10.1 查询同名公诉人员
  select_pub_pro:
    'select * from prosecutor_information_form where PUBLIC_PROSECUTOR_NAME=? and PROCURATORATE_NUMBER=?;',
  //10.2 注册新的公诉人员
  register_pub_pro:
    'insert into prosecutor_information_form (PUBLIC_PROSECUTOR_NUMBER,PUBLIC_PROSECUTOR_NAME,PROCURATORATE_NUMBER) values (?,?,?);',
  // 10.3 根据案件编号查询公诉人员信息

  // ---------------------------------------------11.审理人员信息部分----------------------------
  //11.1 查询同名审理人员
  select_reviewer:
    'select * from trial_staff_information_form where NAME_OF_TRIAL_OFFICER=? and TRIAL_STAFF_CATEGORY=? and COURT_NUMBER=?;',
  //11.2 注册新的审理人员
  register_reviewer:
    'insert into trial_staff_information_form (REVIEWER_NUMBER,NAME_OF_TRIAL_OFFICER,TRIAL_STAFF_CATEGORY,COURT_NUMBER) values (?,?,?,?);',
  //11.3 根据案件编号查询审理人员信息

  // ---------------------------------------------12.书记员信息部分------------------------------
  //12.1 查询同名书记员
  select_clerk:
    'select * from clerk_information_form where CLERK_NAME=? and COURT_NUMBER=?;',
  //12.2 注册新的书记员
  regsiter_clerk:
    'insert into clerk_information_form (CLERK_NUMBER,CLERK_NAME,COURT_NUMBER) values(?,?,?);',
  // 12.3 根据案件编号查询书记员信息

  //----------------------------------------------13.鉴定机构信息部分----------------------------
  //13.1 查询同名的鉴定机构
  select_jiandingjigou:
    'select * from appraisal_agency_information_form where NAME_OF_APPRAISAL_AGENCY=? and ADMINISTRATIVE_DIVISIONS=?;',
  //13.2 注册新的鉴定机构
  register_jiandingjigou:
    'insert into appraisal_agency_information_form (IDENTIFICATION_AGENCY_NUMBER,NAME_OF_APPRAISAL_AGENCY,TYPE_OF_CERTIFICATION_AGENCY,ADMINISTRATIVE_DIVISIONS,IDENTIFICATION_SCOPE,APPRAISAL_QUALIFICATION,APPRAISER_NAME) values (?,?,?,?,?,?,?);',
  //13.3 绑定毒害物编号与鉴定机构编号
  bind_poisonnum_jdjgnum:
    'insert into poisons_and_identification_agencies_form (POISON_NUMBER,IDENTIFICATION_AGENCY_NUMBER) values (?,?);',
  //13.4 查询重复绑定的毒害物编号与鉴定机构编号
  selectPoisonnum_jdjgnum:
    'select * from poisons_and_identification_agencies_form where POISON_NUMBER =? and IDENTIFICATION_AGENCY_NUMBER=?;',
  //13.5 查询全部鉴定机构信息
  select_all_appraisalAgencyInfo:
    'select * from appraisal_agency_information_form;',
  //13.6 根据案件编号查询鉴定机构信息
  select_appraisalAgencyInfo_byCaseNum:
    'select * from appraisal_agency_information_form where IDENTIFICATION_AGENCY_NUMBER in (select IDENTIFICATION_AGENCY_NUMBER from poisons_and_identification_agencies_form where POISON_NUMBER in (select POISON_NUMBER from food_and_poisons_form where FOOD_NUMBER in (select FOOD_NUMBER from case_and_food_form where CASE_NUMBER=?)) );',

  // ----------------------------------------------14.判决结果信息部分--------------------------
  //14.1 注册判决结果
  regsiter_judgment_resulte:
    'insert into judgment_table (JUDGMENT_RESULT_NUMBER,TYPE_OF_PENALTY,PENALTY_PERIOD,IS_PROBATION,FINE_AMOUNT,IS_ILLEGAL_INCOME,LIGHT_PLOT,SUSPECT_NUMBER) values (?,?,?,?,?,?,?,?);',
  //14.2 注册法条信息
  register_legal:
    'insert into legal_information_form (ARTICLE_NUMBER,ACT_NAME,ACT_CLAUSE,LEGAL_CONTENT,JUDGMENT_RESULT_NUMBER) values (?,?,?,?,?);',
  //14.3 查询法条信息
  select_legal:
    'select * from legal_information_form where ACT_NAME=? and ACT_CLAUSE =?;',
  //14.4 添加罪名信息
  add_crime_info:
    'insert into charge_information_form (COUNT_NUMBER,SUSPECT_NUMBER,CHARGE) values(?,?,?);',
  //14.5 查询同名罪名
  select_same_crime: 'select * from charge_information_form where CHARGE =?;',
  //14.6 查詢同名法条
  select_same_lagal:
    'select * from legal_information_form where ACT_NAME=? and ACT_CLAUSE=?;',
  //14.7 添加新的法条
  add_legal_info:
    'insert into legal_information_form (ARTICLE_NUMBER,ACT_NAME,ACT_CLAUSE,LEGAL_CONTENT,JUDGMENT_RESULT_NUMBER) values(?,?,?,?,?);',
};
module.exports = sqlStatement;
