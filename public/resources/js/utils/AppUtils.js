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
  static getRouter() {
    return express.Router();
  }

  /**
   * starts the application
   */
  static startApp() {
    const app = express();

    app.use(morgan("short"));

    var html_dir = "./public/";

    app.use(morgan("short"));

    // app.use(express.static("./public"));
    // app.use("/resources", express.static(__dirname + "/public"));

    app.use(parser.urlencoded({ extended: false }));

    app.set("view engine", "hbs");

    // app.get("/", function(req, res) {
    //   res.sendfile(html_dir + "index.html");
    // });

    return app;
  }

  static getAppIgnition() {
    return AppUtils.startApp();
  }
}

module.exports = {
  AppUtils
};
