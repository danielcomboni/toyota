/**
 * @author Daniel Comboni
 *
 * provides utilities for CRUD operations
 */

const mysql = require("mysql");

class DBUtils {
  /**
   * returns connection to the database
   * @returns connection
   */
  static getConnection() {
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "ciu_one",
      password: "mysql"
    });
  }

  /**
   * closes connection to the database
   */
  static closeConnection() {
    DBUtils.getConnection().end();
  }

  static insert(tableName, arrayOfColumnNames) {
    let theArrayOfColumnNames = new Array();
    theArrayOfColumnNames = [...arrayOfColumnNames];

    let arrayOfWildCards = [];

    theArrayOfColumnNames.forEach(() => {
      arrayOfWildCards.push("?");
    });

    let sqlStr =
      `insert into ` +
      tableName +
      `(` +
      theArrayOfColumnNames.join() +
      `) 
      
        values()    

      `;
  }
}
