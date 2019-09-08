/**
 * @author Daniel Comboni
 *
 *
 * handles customer information logic
 */

// import / require customer informationmodel class
const customerInormationModel = require("../model/CustomerInformation");

class CustomerInformationController {
  /**
   * sets an arbitrary object with properties matching the
   * CustomerInformation to the CustomerInformation
   * @param {Object} customerInformation
   */
  static getCustomerInformation(customerInformation) {
    let ci = new customerInormationModel.CustomerInformation();
    ci.setId(customerInformation.id);
    ci.setName(customerInformation.name);
    ci.setState(customerInformation.state);
    ci.setRetailCustomer(customerInformation.retailCustomer);
    return ci;
  }

  // static postCustomerDetails(app) {
  //   app.post("/api/toyota/post", (req, res) => {
  //     console.log(JSON.stringify(req.body));
  //     res.end();
  //   });
  // }
}

module.exports = {
  CustomerInformationController
};
