/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */

class CustomerInformation {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.id = null;
    this.name = null;
    this.state = null;
    this.retailCustomer = false;
  }

  /**
   *sets an id of a customer object
   * @param {String} id
   */
  setId(id) {
    this.id = id;
  }

  /**
   * returns id of a customer object
   * @returns id
   */
  getId() {
    return this.id;
  }

  /**
   * sets name of a customer object
   * @param {String} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * returns name of a customer object
   * @returns name
   */
  getName() {
    return this.name;
  }

  /**
   * sets state of a customer object
   * @param {String} state
   */
  setState(state) {
    this.state = state;
  }

  /**
   * returns state of a customer object
   * @returns state
   */
  getState() {
    return this.state;
  }

  /**
   * sets boolean of whether this customer is a retail buyer or not
   * @param {Boolean} retailCustomer
   */
  setRetailCustomer(retailCustomer) {
    this.retailCustomer = retailCustomer;
  }

  /**
   * returns boolean of whether this customer is a retail buyer or not
   * @returns retail customer
   */
  isRetailCustomer() {
    return this.retailCustomer;
  }
}
