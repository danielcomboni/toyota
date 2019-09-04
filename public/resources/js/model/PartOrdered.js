/**
 * @author Daniel Comboni
 *
 * This class handles customer information
 *
 */
class Ordered {
  /**
   * a non-parameterized constructor
   */
  constructor() {
    this.partNumber = 0;
    this.description = null;
    this.pricePerPart = 0;
    this.quantity = 0;
    this.overSizeContainer = false;
  }

  /**
   * sets part number of the part ordered
   * @param {int} partNumber
   */
  setPartNumber(partNumber) {
    this.partNumber = partNumber;
  }

  /**
   *returns part of the part ordered
   * @returns partNumber
   */
  getPartNumber() {
    this.partNumber;
  }
}
