const express = require('express');
const app = express();
const port = 3000;

(function init() {
  const { getUserRepository } = require('./user/repository.factory');
  const users = require('./data.json');
  getUserRepository().save(users);
})();

const user_router = require('./user/adapter/restfulapi/user.controller');
app.use('/api', user_router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});