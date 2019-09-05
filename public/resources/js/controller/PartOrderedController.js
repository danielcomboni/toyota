/**
 * @author Daniel Comboni
 *
 * handles Part Ordered logic
 */

// import PartOrdered model
const partOrderedModel = require("../model/PartOrdered");

class PartOrderedController {
  /**
   * sets an arbitrary object with properties matching the
   * PartOrdered to the PartOrdered
   * @param {Object} partOrdered
   */

  static getPartOrdered(partOrdered) {
    let po = new partOrderedModel.PartOdered();
    po.setPartNumber(partOrdered.partNumber);
    po.setDescription(partOrdered.description);
    po.setPricePerPart(partOrdered.pricePerPart);
    po.setQuantity(partOrdered.quantity);
    po.setOverSizeContainer(partOrdered.overSizeContainer);
    return po;
  }
}

module.exports = {
  PartOrderedController
};
