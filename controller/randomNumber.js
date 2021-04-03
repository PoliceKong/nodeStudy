module.exports = {
  //随机生成六位整数，作为要处理事件的编号
  randomNumber() {
    'use strict';
    let mm = Math.random();
    let random_six = '';
    if (mm > 0.1) {
      random_six = Math.round(mm * 10000000);
    } else {
      mm += 0.1;
      random_six = Math.round(mm * 10000000);
    }
    return random_six;
  },
};
