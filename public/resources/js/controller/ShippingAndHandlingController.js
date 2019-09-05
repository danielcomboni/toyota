/**
 * @author Daniel Comboni
 *
 * handles Shipping and Handling logic
 */

// import Shipping and handling model
const shippingAndHandlingModel = require("../model/ShippingAndHandling");

class ShippingAndHandlingController {
  /**
   * sets an arbitrary object with properties matching the
   * ShippingAndHandling to the ShippingAndHandling
   * @param {Object} shippingAndHandling
   */

  static getShippingAndHandling(shippingAndHandling) {
    let sah = new shippingAndHandlingModel.ShippingAndHandling();
    sah.setShippingMethod(shippingAndHandling.shippingMethod);
    sah.setChargePerPart(shippingAndHandling.chargePerPart);
    return sah;
  }
}

module.exports = {
  ShippingAndHandlingController
};
