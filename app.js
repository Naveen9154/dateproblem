const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const dat = new Date();
  const date = addDays(
    new Date(dat.getFullYear(), dat.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
});

module.exports = app;
