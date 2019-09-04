/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */

class Shipping {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.shippingMethod = null;
  }

  /**
   *sets the shipping method of the object
   * @param {String} shippingMethod
   */
  setShipping(shippingMethod) {
    this.setShipping = shippingMethod;
  }

  /**
   * returns the shipping method of the object
   * @returns shippingMethod
   */
  getShippingMethod() {
    return this.shippingMethod;
  }
}
