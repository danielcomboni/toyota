/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */

class OutPut {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.cost = 0;
    this.salesTax = 0;
    this.shippingAndHandling = 0;
  }

  /**
   * sets the cost
   * @param {Number} cost
   */
  setCost(cost) {
    this.cost = cost;
  }

  /**
   * returns cost
   * @returns cost
   */
  getCost() {
    return this.cost;
  }

  /**
   *sets salesTax
   * @param {Number} salesTax
   */
  setSalesTax(salesTax) {
    this.salesTax = salesTax;
  }

  /**
   * returns salesTax
   * @returns salesTax
   */
  getSalesTax() {
    return this.salesTax;
  }

  /**
   * sets shippingAndHandling
   * @param {Boolean} shippingAndHandling
   */
  setShippingAndHandling(shippingAndHandling) {
    this.shippingAndHandling = shippingAndHandling;
  }

  /**
   *returns shippingAndHandling
   * @returns shippingAndHandling
   */
  getShippingAndHandling() {
    return this.shippingAndHandling;
  }
}

module.exports = {
  OutPut
};
