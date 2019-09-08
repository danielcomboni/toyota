const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const crypto = require("crypto");
const mysql = require("mysql");

const app = express();

app.use(express.static("./public"));

app.use(morgan("short"));

app.use(parser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/view/index.html");
});

const dao = require("./public/resources/js/dao/MainDAO");

dao.MainDAO.saveToDB(app, "/api/toyota/post", "customer_info", [
  "cust_id",
  "name",
  "state",
  "is_retail"
]);

app.listen(3005);
console.log("getting started...");
