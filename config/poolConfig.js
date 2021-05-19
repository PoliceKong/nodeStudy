const mysql = require('mysql');
const poolconfig = {
  host: '122.51.15.192',
  port: '3306',
  user: 'root',
  password: 'Kqx%075437abc',
  database: 'foodsafty'
};
const dbpool = {
  //创建连接池对象
  pool: {}, //先创建空对象，后续赋值
  create() {
    'use strict';
    this.pool = mysql.createPool(poolconfig); //创造连接池后，返回数据池对象，把数据池对象赋值给之前创建好的pool空对象
  },

  connect(sql, array, fun) {
    'use strict';
    this.pool.getConnection((err, connection) => {
      if (err) {
        console.log('数据库连接失败，err是：', err);
        return;
      } else {
        connection.query(sql, array, fun);
        connection.release(); //释放该链接
      }
    });

  }
};
dbpool.create();
module.exports = dbpool;