class AllEntities {
  constructor() {
    this.customerInfo = new require("../model/CustomerInformation")();
  }

  setCustomerInfo(custInfo) {
    this.customerInfo = custInfo;
  }

  getCustomerInfo() {
    return this.customerInfo;
  }
}
