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
}

module.exports = {
  OutPutController
};
