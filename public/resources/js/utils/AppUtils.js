/**
 * @author Daniel Comboni
 *
 * provides utilities for database access
 */

const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const crypto = require("crypto");
const mysql = require("mysql");
// const session = require("express-session");

class AppUtils {
  /**
   * starts the application
   */
  static startApp() {
    const app = express();
    app.use(morgan("short"));

    var html_dir = "./public/";

    app.use(morgan("short"));

    app.use(express.static("./public"));

    app.use(parser.urlencoded({ extended: false }));

    app.get("/", function(req, res) {
      res.sendfile(html_dir + "index.html");
    });

    app.listen(3001);

    console.log("App running at Port 3001");
  }

  static getAppIgnition() {
    return AppUtils.startApp();
  }
}

module.exports = {
  AppUtils
};
