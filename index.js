const appUtils = require("./public/resources/js/utils/AppUtils");
const CustController = require("./public/resources/js/controller/CustomerInformationController");

const partOrderedControllerInvoker = require("./public/resources/js/controller/PartOrderedController");

const shippingAndHandlingInvoker = require("./public/resources/js/controller/ShippingAndHandlingController");

// starting the app
appUtils.AppUtils.getAppIgnition();

// this.partNumber = 0;
// this.description = null;
// this.pricePerPart = 0;
// this.quantity = 0;
// this.overSizeContainer = false;

const po = {
  partNumber: "10564",
  description: "this is just a description test",
  pricePerPart: 7.51,
  quantity: 2,
  overSizeContainer: true
};

const newPartOrdered = partOrderedControllerInvoker.PartOrderedController.getPartOrdered(
  po
);

// const cust = {
//   id: "01",
//   name: "Habasha",
//   state: "Asmara",
//   retailCustomer: false
// };

const sah = {
  shippingMethod: "UPS",
  chargePerPart: 7
};

const newSah = shippingAndHandlingInvoker.ShippingAndHandlingController.getShippingAndHandling(
  sah
);

// console.log(
//   shippingAndHandlingInvoker.ShippingAndHandlingController.getShippingAndHandling(
//     sah
//   )
// );

const outPutControllerInvoker = require("./public/resources/js/controller/OutPutController");

// this.cost = 0;
// this.salesTax = 0;
// this.shippingAndHandling = 0;

const output = {
  cost: newPartOrdered.getPricePerPart() * newPartOrdered.getQuantity(),
  salesTax:
    0.1 * newPartOrdered.getPricePerPart() * newPartOrdered.getQuantity(),
  shippingAndHandling: newSah.getChargePerPart() * newPartOrdered.getQuantity()
};

const total = output.cost + output.salesTax + output.shippingAndHandling;

console.log(".................");
console.log(output);
console.log(total);

const dbUtils = require("./public/resources/js/utils/DBUtils");

const toDb = {
  one: "value one",
  two: "value two",
  three: "value three"
};

let arrayObj = [toDb.one, toDb.two, toDb.three];

// dbUtils.DBUtils.insert("the_table_name", ["one", "two", "three"], arrayObj);

// dbUtils.DBUtils.update("name", 1, ["one", "two"], ['one','two']);

// dbUtils.DBUtils.delete('table',5);
