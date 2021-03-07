const post = require("./indexRoute");
module.exports = (app) => {
  app.use(post);
}