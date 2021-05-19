const userDao = require('../dao/userDao');
const randomNum = require('./randomNumber');
module.exports = {

  insertJidingjigou(req, res) {
    'use strict';
    let NAME_OF_APPRAISAL_AGENCY = req.body.NAME_OF_APPRAISAL_AGENCY; //获取鉴定机构名称
    let TYPE_OF_CERTIFICATION_AGENCY = req.body.TYPE_OF_CERTIFICATION_AGENCY; //获取鉴定机构类别
    let ADMINISTRATIVE_DIVISIONS = req.body.ADMINISTRATIVE_DIVISIONS; //获取鉴定机构行政区划
    let IDENTIFICATION_SCOPE = req.body.IDENTIFICATION_SCOPE; //获取鉴定范围
    let APPRAISAL_QUALIFICATION = req.body.APPRAISAL_QUALIFICATION; //获取鉴定资质
    let APPRAISER_NAME = req.body.APPRAISER_NAME; //鉴定人员名称
    let POISON_NUMBER = req.body.POISON_NUMBER; //获取毒害物编号

    userDao.selectJiandingjigou([NAME_OF_APPRAISAL_AGENCY, ADMINISTRATIVE_DIVISIONS], (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        if (data.length !== 0) {
          console.log('该鉴定机构已经存在，名称是：', data[0].NAME_OF_APPRAISAL_AGENCY);
          res.status(201).send({
            registerAgencyOk: false,
            identificationAgencyNumber: data[0].IDENTIFICATION_AGENCY_NUMBER
          });
          userDao.selectpoisonnumJdjgnum([POISON_NUMBER, data[0].IDENTIFICATION_AGENCY_NUMBER], (err, data) => {
            if (err) {
              res.status(500).send();
            } else {
              if (data.length !== 0) {
                console.log('该毒害与鉴定机构已经绑定，无需重复绑定');
              } else {
                userDao.bindPoisonnumAndJDJGnum([POISON_NUMBER, data[0].IDENTIFICATION_AGENCY_NUMBER], (err) => {
                  if (err) {
                    console.log('毒害物编号与鉴定机构编号绑定失败，err是：', err);
                    res.status(500).send();
                  } else {
                    console.log('毒害物编号与鉴定机构编号绑定成功');
                  }
                });
              }
            }
          });
        } else {
          let IDENTIFICATION_AGENCY_NUMBER = 'JDJG' + randomNum.randomNumber();
          userDao.registerJiandingjigou([IDENTIFICATION_AGENCY_NUMBER, NAME_OF_APPRAISAL_AGENCY, TYPE_OF_CERTIFICATION_AGENCY, ADMINISTRATIVE_DIVISIONS, IDENTIFICATION_SCOPE, APPRAISAL_QUALIFICATION, APPRAISER_NAME], (err) => {
            if (err) {
              console.log('注册新的鉴定机构出现错误，err是：', err);
              res.status(500).send();
            } else {
              console.log('鉴定机构注册成功');
              userDao.selectpoisonnumJdjgnum([POISON_NUMBER, IDENTIFICATION_AGENCY_NUMBER], (err, data) => {
                if (err) {
                  res.status(500).send();
                } else {
                  if (data.length !== 0) {
                    console.log('该毒害与鉴定机构已经绑定，无需重复绑定');
                  } else {
                    userDao.bindPoisonnumAndJDJGnum([POISON_NUMBER, IDENTIFICATION_AGENCY_NUMBER], (err) => {
                      if (err) {
                        console.log('绑定毒害物编号与鉴定机构编号失败，err是：', err);
                        res.status(500).send();
                      } else {
                        console.log('毒害物编号与鉴定机构编号绑定成功');
                      }
                    });
                  }
                }
              });
              res.status(201).send({
                registerAgencyOk: true,
                identificationAgencyNumber: IDENTIFICATION_AGENCY_NUMBER
              });
            }
          });
        }
      }
    });
  },
  //查询所有的鉴定机构信息
  selectAllAppraisalAgency(req,res){
    'use strict';
    userDao.selectAllAppraisalAgencyInfo((err,result) => {
      if(err){
        console.log('鉴定机构信息列表查询失败',err);
        res.status(500).send();
      }else{
        console.log('鉴定机构信息列表查询成功');
        res.status(200).send(result);
      }
    });
  },
  // 根据案例编号查询鉴定机构信息
  selectJdjgByCaseNum(req,res){
    'use strict';
    let CASE_NUMBER = req.body.CASE_NUMBER; //获取所在案件编号
    userDao.selectAppraisalagencyinfoByCaseNum([CASE_NUMBER],(err,result) => {
      if(err){
        console.log('根据案例编号查询鉴定机构信息失败',err);
        res.status(500).send();

      }else{
        console.log('根据案例编号查询鉴定机构信息成功');
        res.status(200).send(result);
      }

    });

  }
};