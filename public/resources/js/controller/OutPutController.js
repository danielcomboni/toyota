/**
 * @author Daniel Comboni
 *
 * handles out put logic
 */

// import Out Put model
const outPutModel = require("../model/OutPut");

class OutPutController {
  /**
   * sets an arbitrary object with properties matching the
   * OutPut to the OutPut
   * @param {Object} outPut
   */

  static getOutPut(outPut) {
    let op = new outPutModel.OutPut();
    op.setCost(op.cost);
    op.setSalesTax(op.salesTax);
    op.setShippingAndHandling(op.shippingAndHandling);
  }

  static finalOutPut(partOrdered, ) {
    
    const partOrderedModel = require("../model/PartOrdered");
    let newPartOrdered = new partOrderedModel.PartOdered();
    newPartOrdered = partOrdered;

    const 

  }
}

module.exports = {
  OutPutController
};
