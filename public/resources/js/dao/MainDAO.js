/**
 * @author Daniel Comboni
 *
 * this is the DAO (Data Access Object)
 *
 * links the database to the server
 */

const dbutils = require("../utils/DBUtils");

const custInfoController = require("../controller/CustomerInformationController");
const customerInfoModel = require("../model/CustomerInformation");

const partOrderedController = require("../controller/PartOrderedController");
const partOrderedModel = require("../model/PartOrdered");

const shippingController = require("../controller/ShippingAndHandlingController");
const shippingModel = require("../model/ShippingAndHandling");

class MainDAO {
  static breakDownObjects(mainObject) {}

  static saveToDB(app, url, tableName, arrayOfColumnNames) {
    app.post(url, (req, res) => {
      let arrayObjectsInfo = [];

      for (let [key, value] of Object.entries(req.body)) {
        for (let [key2, value2] of Object.entries(value)) {
          console.log("value", value2);
          arrayObjectsInfo.push(value2);
        }
      }

      let custInfo = new customerInfoModel.CustomerInformation();
      custInfo = custInfoController.CustomerInformationController.getCustomerInformation(
        arrayObjectsInfo[0]
      );

      // insert customer info
      const id = dbutils.DBUtils.insert(
        tableName,
        arrayOfColumnNames,
        custInfo
      );

      // closes connection after inserting customer info
      dbutils.DBUtils.closeConnection();

      // insert part order (chained with Promise of resolve value insertedId)
      id.then(insertedId => {
        let partOrdered = new partOrderedModel.PartOdered();

        partOrdered = partOrderedController.PartOrderedController.getPartOrdered(
          arrayObjectsInfo[1]
        );

        partOrdered.setCustomerInfoId(insertedId);

        const id2 = dbutils.DBUtils.insert(
          "part_ordered",
          [
            "part_number",
            "description",
            "price_per_part",
            "quantity",
            "is_oversize",
            "customer_id"
          ],
          partOrdered
        );

        // close connection after inserting part ordered

        // insert shipping
        id2.then(insertedId => {
          let shipping = new shippingModel.ShippingAndHandling();
          shipping = shippingController.ShippingAndHandlingController.getShippingAndHandling(
            arrayObjectsInfo[2]
          );

          console.log("third", insertedId);

          shipping.setPartOrderedId(insertedId);

          dbutils.DBUtils.insert(
            "shipping",
            ["shipping_method", "shipping_charge", "part_ordered_id"],
            shipping
          );
        });
      });

      // close connection after inserting shipping
      dbutils.DBUtils.closeConnection();

      res.end();
    });
  }
}

module.exports = {
  MainDAO
};
