const post = require('./indexRoute');
module.exports = (app) => {
  'use strict';
  app.use(post);
};