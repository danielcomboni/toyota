/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */
class PartOdered {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.partNumber = 0;
    this.description = null;
    this.pricePerPart = 0;
    this.quantity = 0;
    this.overSizeContainer = false;
    this.customerInfoId = 1;
  }

  /**
   * sets part number of the part ordered
   * @param {Number} partNumber
   */
  setPartNumber(partNumber) {
    this.partNumber = partNumber;
  }

  /**
   *returns part number of the part ordered
   * @returns partNumber
   */
  getPartNumber() {
    this.partNumber;
  }

  /**
   * sets description of the part ordered
   * @param {String} description
   */
  setDescription(description) {
    this.description = description;
  }

  /**
   *returns description of the part ordered
   * @returns description
   */
  getDescription() {
    return this.description;
  }

  /**
   * sets unit price for the each part ordered
   * @param {Number} pricePerPart
   */
  setPricePerPart(pricePerPart) {
    this.pricePerPart = pricePerPart;
  }

  /**
   * returns the unit price for each part ordered
   * @returns pricePerPart
   */
  getPricePerPart() {
    return this.pricePerPart;
  }

  /**
   *sets the quantity of the part ordered
   * @param {Number} quantity
   */
  setQuantity(quantity) {
    this.quantity = quantity;
  }

  /**
   * returns quantity of the part ordered
   * @returns quantity
   */
  getQuantity() {
    return this.quantity;
  }

  /**
   * sets true of false as to whether the container is oversize
   * @param {Boolean} overSizeContainer
   */
  setOverSizeContainer(overSizeContainer) {
    this.overSizeContainer = overSizeContainer;
  }

  /**
   * returns true or false as to whether the container is oversize
   * @returns overSizeContainer
   */
  isOverSizeContainer() {
    return this.overSizeContainer;
  }

  /**
   * sets the id (foreign key) of the customer info
   * @param {Number} id
   */
  setCustomerInfoId(id) {
    this.customerInfoId = id;
  }

  /**
   * returns customer info id
   * @returns customerInfoId
   */
  getCustomerInfoId() {
    return this.customerInfoId;
  }
}

module.exports = {
  PartOdered
};
