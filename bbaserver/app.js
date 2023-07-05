const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

(function init() {
  const { getUserRepository } = require('./user/repository.factory');
  const users = require('./data.json');
  getUserRepository().save(users);
})();

const user_router = require('./user/adapter/restfulapi/user.controller');
app.use('/api', user_router);

app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist" + "/index.html");
});

app.listen(port, () => {
  console.log(`Start app listening on http://localhost:${port}`);
});