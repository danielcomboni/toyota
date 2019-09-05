/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */

// import PartOrdered model
// require("./PartOrdered");

class ShippingAndHandling {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.shippingMethod = null;
    this.chargePerPart = 0;
  }

  /**
   *sets the shipping method of the object
   * @param {String} shippingMethod
   */
  setShippingMethod(shippingMethod) {
    this.shippingMethod = shippingMethod;
  }

  /**
   * returns the shipping method of the object
   * @returns shippingMethod
   */
  getShippingMethod() {
    return this.shippingMethod;
  }

  /**
   * sets the shipping cost
   * @param {Number} chargePerPart
   */
  setChargePerPart(chargePerPart) {
    this.chargePerPart = chargePerPart;
  }

  /**
   * returns the shipping cost
   * @returns chargePerPart
   */
  getChargePerPart() {
    return this.chargePerPart;
  }
}

module.exports = {
  ShippingAndHandling
};
