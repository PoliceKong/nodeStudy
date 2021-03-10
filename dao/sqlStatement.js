//将具体业务的sql语句独立出来，全部存储业务需要的sql语句，对数据库内容进行集中管理CREATE TABLE newtable (
const sqlStatement = {
  //登记案件信息
  register_case: "insert into case_information_form(CASE_NUMBER, CASE_NAME,CASE_SOURCE, TIME_OF_CASE, LOCATION_OF_CASE,AMOUNT_INVOLVED,NUMBER_OF_OFFENDERS,BRIEF_INTRODUCTION) values(?,?,?,?,?,?,?,?);",
  //查询同名案件
  select_case_name: 'select * from case_information_form where CASE_NAME=?;',
  //查询同名嫌疑人
  select_suspect: 'select * from suspect_information_form where NAME_OF_SUSPECT = ? and SUSPECT_GENDER =? and DATE_OF_BIRTH =?;',
  //注册嫌疑人
  register_suspect: 'insert into suspect_information_form(SUSPECT_NUMBER,SUBJECT_CATEGORY,NAME_OF_SUSPECT,SUSPECT_GENDER,NATION,EDUCATION,DATE_OF_BIRTH,HOMETOWN,RESIDENCE_ADDRESS,CURRENT_ADDRESS,EMPLOYER,OCCUPATION,CRIME_TIME,AGE_OF_CRIME,CRIMINAL_HISTORY,CRIMINAL_BEHAVIOR) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
  //绑定案件编号&嫌疑人编号
  bind_case_num_susp_num: 'insert into case_and_suspect_association_form(SUSPECT_NUMBER,CASE_NUMBER) values(?,?);',
  //登记涉案食品
  register_case_food: 'insert into food_information_form(FOOD_NUMBER,FOOD_NAME,FOOD_TYPE,FOOD_INGREDIENTS,FOOD_QUANTITY) values(?,?,?,?,?);',
  //绑定案件编号与涉案食品
  bind_casefood_case: 'insert into case_and_food_form(CASE_NUMBER,FOOD_NUMBER)values(?,?);',
  //登记毒害物
  register_pioson: 'insert into poison_information_form(POISON_NUMBER,SCIENTIFIC_NAME_OF_POISON,POISON_ALIAS_01,POISON_ALIAS_02,TOXIC_CHEMICAL_COMPOSITION,ACTUAL_MEASUREMENT_OF_POISON) values(?,?,?,?,?,?);',
  //绑定毒害物与涉案食品编号
  bind_casefood_pioson: 'insert into food_and_poisons_form (FOOD_NUMBER,POISON_NUMBER) values (?,?);',
  //根据判决书编号查询相同的判决书
  select_judgment: 'select * from judgment_information_form where JUDGMENT_NUMBER =?;',
  //登记新的判决书
  register_judgment: 'insert into judgment_information_form (JUDGMENT_NUMBER,DOCUMENT_NAME,TRIAL_PROCEDURE,PUBLIC_PROSECUTION_DATE,JUDGMENT_DATE) values (?,?,?,?,?);',
  //绑定案件编号与判决书编号
  bind_casenum_judgment_num: 'insert into judgments_and_cases_form (CASE_NUMBER,JUDGMENT_NUMBER) values (?,?);',
  //登记侦查机关（公安机关）信息
  register_police: 'insert into investigation_agency_information_form (INVESTIGATION_AGENCY_NUMBER,NAME_OF_INVESTIGATION_AGENCY,INVESTIGATIVE_AGENCY_LEVEL) values (?,?,?);',
  //查找同名公安机关
  select_police: 'select * from investigation_agency_information_form where NAME_OF_INVESTIGATION_AGENCY=? and INVESTIGATIVE_AGENCY_LEVEL=?;',
  //根据判决书编号，绑定公安机关编号
  bind_police_num: 'update judgment_information_form set INVESTIGATION_AGENCY_NUMBER =? where JUDGMENT_NUMBER =?;',
  //查询同名公诉机关（检察院）
  select_procuratorate: 'select * from public_prosecution_information_form where NAME_OF_PROCURATORATE =? and PROCURATORATE_LEVEL=?;',
  //注册新的公诉机关
  register_procuratorate: 'insert into public_prosecution_information_form (PROCURATORATE_NUMBER,NAME_OF_PROCURATORATE,PROCURATORATE_LEVEL) values(?,?,?);',
  //绑定公诉记挂编号与判决文书编号
  bind_procuratorate_num: 'update judgment_information_form set PROCURATORATE_NUMBER =? where JUDGMENT_NUMBER =?;',
  //查询同名法院
  select_court: 'select * from information_form_of_trial_agency where COURT_NAME=? and COURT_LEVEL=?;',
  //注册新的法院信息
  register_court: 'insert into information_form_of_trial_agency (COURT_NUMBER,COURT_NAME,COURT_LEVEL) values (?,?,?);',
  //绑定新的法院信息
  bind_court_num: 'update judgment_information_form set COURT_NUMBER =? where JUDGMENT_NUMBER =?;',
  //查询同名侦查人员
  select_investigation: 'select * from investigator_information_form where INVESTIGATOR_NAME=? and INVESTIGATION_AGENCY_NUMBER=?;',
  //注册新的侦查人员
  register_investigation: 'insert into investigator_information_form (INVESTIGATOR_NUMBER,INVESTIGATOR_NAME,INVESTIGATION_AGENCY_NUMBER) values (?,?,?);',
  //查询同名公诉人员
  select_pub_pro: 'select * from prosecutor_information_form where PUBLIC_PROSECUTOR_NAME=? and PROCURATORATE_NUMBER=?;',
  //注册新的公诉人员
  register_pub_pro: 'insert into prosecutor_information_form (PUBLIC_PROSECUTOR_NUMBER,PUBLIC_PROSECUTOR_NAME,PROCURATORATE_NUMBER) values (?,?,?);',
  //查询同名审理人员
  select_reviewer: 'select * from trial_staff_information_form where NAME_OF_TRIAL_OFFICER=? and TRIAL_STAFF_CATEGORY=? and COURT_NUMBER=?;',
  //注册新的审理人员
  register_reviewer: 'insert into trial_staff_information_form (REVIEWER_NUMBER,NAME_OF_TRIAL_OFFICER,TRIAL_STAFF_CATEGORY,COURT_NUMBER) values (?,?,?,?);',
  //查询同名书记员
  select_clerk: 'select * from clerk_information_form where CLERK_NAME=? and COURT_NUMBER=?;',
  //注册新的书记员
  regsiter_clerk: 'insert into clerk_information_form (CLERK_NUMBER,CLERK_NAME,COURT_NUMBER) values(?,?,?);',



}



module.exports = sqlStatement;