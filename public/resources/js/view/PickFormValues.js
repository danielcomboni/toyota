const Validation = require(`./Validation`);

const getValueById = id => {
  return document.getElementById(id).value;
};

const getElById = id => {
  return document.getElementById(id);
};

/**
 * get customer info
 */
const customerInfo = () => {
  
  // get id
  const customerId = getValueById("customer-id-input");
  // validate id
  let validateCustomerId = Validation.validateValue(`customer-id-input`,/^\d{3}-\d{2}-\d{4}$/,`customer_span`,`please check id format`);
  // check if id format is not valid
  if(validateCustomerId == false){
    return;
  }

  // get name
  const customerName = getValueById("customer-name-input");
  // validate name
  let validateCustomerName = Validation.validateValue(`customer-name-input`, /^[a-zA-Z\s]*$/  , `name_span`, 'letters & spaces only please');
  // check if name is empty
  if(customerName == '' || customerName == null){
    Validation.setStyle(`name_span`,`name can't be empty`);
    return;
  }

  // check is name format is not valid
  if(validateCustomerName == false){
    return;
  }

  // get state
  const state = getValueById("customer-state-input");

  // get boolean of retail 
  const retailId = getElById("customer-retail-input");
  let isRetail = false;

  if (retailId.checked) {
    isRetail = true;
  } else {
    isRetail = false;
  }

  const obj = {
    id: customerId,
    name: customerName,
    state: state,
    retailCustomer: isRetail
  };
  return obj;
};

/**
 * get part ordered
 */
const partOrdered = () => {

  // get part number
  const partNumber = getValueById("part-number-input");
  // validate part number
  let validatePartNumber = Validation.validateValue(`part-number-input`, /^[0-9]*$/  , `number_span`, 'numbers only');
  // check if part number is empty
  if(partNumber == '' || partNumber == null){
    Validation.setStyle(`number_span`,`part number can't be empty`);
    return;
  }
  // check if part number format is not valid
  if(validatePartNumber == false){
    return;
  }

  // get description
  const description = getValueById("description-input");
  
  // get price per part
  const pricePerPart = getValueById("price-per-part-input").trim();

  const priceArr = [...pricePerPart];

  for(let i=0; i < priceArr.length; i++){

    // make sure first character is not 
    if(pricePerPart.charCodeAt(0) < 48 || pricePerPart.charCodeAt(0) > 57){
      console.log(`1`)
      Validation.setStyle(`price_span`,`please check your price input`);
      return;
    }else{
      Validation.setStyle(`price_span`,``);
    }

    
    // make sure the last character is a digit
    if(pricePerPart.charCodeAt(pricePerPart.length-1) < 48 || pricePerPart.charCodeAt(pricePerPart.length-1) > 57){
      console.log(`2`)
      Validation.setStyle(`price_span`,`please check your price input`);
      return;
    }else{
      Validation.setStyle(`price_span`,``);
    }

    if(pricePerPart.charCodeAt(i) < 46 || pricePerPart.charCodeAt(i) >57 ){
        console.log(`3`);
        Validation.setStyle(`price_span`,`please check your price input`);
      return;
    }else{
      Validation.setStyle(`price_span`,``);
    }

  }


  // get quantity
  const quantity = getValueById("quantity-input");
  const quantityArray = [...quantity];

  for(let i = 0; i < quantityArray.length; i++){
    if(quantity.charCodeAt(i) < 48 || quantity.charCodeAt(i) > 58){
      Validation.setStyle(`quantity_span`,`please check your quantity input`);
      return;
    }else{
      Validation.setStyle(`quantity_span`,``);
    }
  }



  const overSizeEl = getElById("oversize");

  let isOverSize = false;

  if (overSizeEl.checked) {
    isOverSize = true;
  } else {
    isOverSize = false;
  }

  const obj = {
    partNumber: partNumber,
    description: description,
    pricePerPart: pricePerPart,
    quantity: quantity,
    overSizeContainer: isOverSize
  };

  return obj;
};

/**
 * get shipping
 */
const shipping = () => {
  const shippingMethod = document.querySelector(
    'input[name="shippingChoice"]:checked'
  ).value;
  let shippingCharge = 0;

  if (shippingMethod == "ups") {
    shippingCharge = 7;
  }

  if (shippingMethod == "fedExGround") {
    shippingCharge = 9.25;
  }

  if (shippingMethod == "fedExAir") {
    shippingCharge = 12;
  }

  if (shippingMethod == "postal") {
    shippingCharge = 8.5;
  }

  let shippingAndHandling = {
    shippingMethod: shippingMethod,
    chargePerPart: shippingCharge
  };

  return shippingAndHandling;
};

module.exports = {
  getValueById,
  getElById,
  customerInfo,
  partOrdered,
  shipping
};
