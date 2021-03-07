const mysql = require("mysql");
const poolconfig = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "foodsafty"
}
const dbpool = {
  //创建连接池对象
  pool: {}, //先创建空对象，后续赋值
  create() {
    this.pool = mysql.createPool(poolconfig); //创造连接池后，返回数据池对象，把数据池对象赋值给之前创建好的pool空对象
  },

  connect(sql, array, fun) {
    this.pool.getConnection((err, connection) => {
      connection.query(sql, array, fun);
      connection.release(); //释放该链接
    })

  }
}
dbpool.create();
module.exports = dbpool;