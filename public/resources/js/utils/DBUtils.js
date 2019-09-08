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

  /**
   *
   *Accepts a String of tableName, array of column names of the table whose name is specified
   *and array of values of the request object
   *  @param {String} tableName
   * @param {Array} arrayOfColumnNames
   * @param {Array} arrayValuesOfObject
   */
  static insert(tableName, arrayOfColumnNames, objectToBeInserted) {
    let theArrayOfColumnNames = new Array();
    theArrayOfColumnNames = [...arrayOfColumnNames];

    let arrayOfWildCards = [];

    theArrayOfColumnNames.forEach(() => {
      arrayOfWildCards.push("?");
    });

    // the query string to insert into the database
    let sqlStr = `insert into ${tableName} (${theArrayOfColumnNames.join()}) values(${arrayOfWildCards.join()})`;

    console.log(`\ninsert command::: ${sqlStr} \n`);

    let arrayValuesOfObject = [];
    for (let [key, value] of Object.entries(objectToBeInserted)) {
      arrayValuesOfObject.push(value);
    }

    console.log("inserting objects", arrayValuesOfObject);

    return new Promise((resolve, reject) => {
      DBUtils.getConnection().query(
        sqlStr,
        arrayValuesOfObject,
        (err, result) => {
          // console.log("insert id:", result.insertId);

          resolve(result.insertId);
        }
      );
    });
  }

  /**
   * accepts 3 params
   * selectStatement, response and tableName
   * @param {String} selectStatement
   * @param {Response} res
   * @param {String} tableName
   */
  static select(selectStatement, res, tableName) {
    let theRes = Response();
    theRes = res;
    DBUtils.getConnection().query(selectStatement, (error, results) => {
      if (error) throw error;

      theRes.render(tableName, {
        results: results
      });

      // close connection to the database
      DBUtils.closeConnection();
    });
  }

  static update(tableName, id, arrayColumnNamesForUpdate, arrayValuesOfObject) {
    let arrayColumnsName = [];
    arrayColumnsName = [...arrayColumnNamesForUpdate];

    let theColumnSets = new String();

    arrayColumnsName.forEach((element, index) => {
      // make sure the last column does not have a comma after its wild card
      if (index < arrayColumnsName.length - 1) {
        theColumnSets = theColumnSets.concat(element).concat("=?,");
      } else {
        theColumnSets = theColumnSets.concat(element).concat("=?");
      }
    });

    console.log(theColumnSets);

    let sqlStr = `update ${tableName} set ${theColumnSets} where id=${id}`;

    console.log(`\nupdate command::: ${sqlStr} \n`);

    DBUtils.getConnection().query(sqlStr, arrayValuesOfObject);

    DBUtils.closeConnection();
  }

  static delete(tableName, id) {
    let sqlStr = `delete from ${tableName} where id=?`;
    let sqlStr2 = `delete from ${tableName} where id=${id}`;
    console.log(`\ndelete command::: ${sqlStr2} \n`);

    DBUtils.getConnection().query(sqlStr, [id]);

    DBUtils.closeConnection();
  }
}

module.exports = {
  DBUtils
};
