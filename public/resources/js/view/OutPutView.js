/**
 * @author Daniel Comboni
 *
 */

/**
 * importing models and controller files
 */
const partOrderedController = require("../controller/PartOrderedController");
const customerInfoCOntroller = require("../controller/CustomerInformationController");
const shippingAndHandlingController = require("../controller/ShippingAndHandlingController");
const outPutModel = require("../model/OutPut");
const pickFromDom = require("./PickFormValues");

/**
 *
 * helps to display the output on to the UI
 *
 * @param {Object} objectToBreakDown
 */
const printOutPut = objectToBreakDown => {
  // extract part ordered from the objectToBreakDown
  const partOrdered = partOrderedController.PartOrderedController.getPartOrdered(
    objectToBreakDown.partOrdered
  );

  // extra customer info from the objectToBreakDown
  const customerInfo = customerInfoCOntroller.CustomerInformationController.getCustomerInformation(
    objectToBreakDown.customerInfo
  );

  // extra shipping and handling from the objectToBreakDown
  const shippingAndHandling = shippingAndHandlingController.ShippingAndHandlingController.getShippingAndHandling(
    objectToBreakDown.shipping
  );

  // creates a new object (instantiation) of OutPut model class
  let outPut = new outPutModel.OutPut();
  // set cost
  outPut.setCost(partOrdered.getPricePerPart() * partOrdered.getQuantity());

  // determine if the customer is a retailer or not
  if (customerInfo.isRetailCustomer() == true) {
    if (customerInfo.getState() == "kla") {
      outPut.setSalesTax(0.1 * outPut.getCost());
      pickFromDom.getElById(
        "sales-tax"
      ).textContent = `$ ${outPut.getSalesTax().toFixed(2)}`;
    }

    // otherwise the user is not a retailer
    else {
      outPut.setSalesTax(0.05 * outPut.getCost());
      pickFromDom.getElById(
        "sales-tax"
      ).textContent = `$ ${outPut.getSalesTax().toFixed(2)}`;
    }
  }

  // display cost to the UI
  pickFromDom.getElById("cost").textContent = `$ ${outPut.getCost().toFixed(2)}`;

  // display shipping and handling to the UI
  pickFromDom.getElById("shipping").textContent = `$ ${(
    partOrdered.getQuantity() * shippingAndHandling.getChargePerPart()
  ).toFixed(2)}`;

  let total = 0;

  // check if the container is oversize then add $5 to the total
  // else leave as is
  if (partOrdered.isOverSizeContainer() == true) {
    total =
      outPut.getCost() +
      outPut.getSalesTax() +
      partOrdered.getQuantity() * shippingAndHandling.getChargePerPart() +
      5;
  } else {
    total =
      outPut.getCost() +
      outPut.getSalesTax() +
      partOrdered.getQuantity() * shippingAndHandling.getChargePerPart();
  }

  // display total to the UI
  pickFromDom.getElById("total").textContent = `$ ${total.toFixed(2)}`;
};

module.exports = {
  printOutPut
};
