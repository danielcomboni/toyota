/**
 * returns the element whose id is specified
 * @param {String} id
 */
const getElById = id => document.getElementById(id);

/**
 * returns value of an element whose id is specified
 * @param {String} id
 */
const getValueById = id => document.getElementById(id).value;

/**
 * takes id of an element and text message to be display by the span
 * @param {String} id
 * @param {String} text*
 */
const setStyle = (id, text) => {
  getElById(id).textContent = text;
  getElById(id).style.color = "red";
};

/**
 * an array to carry all flags
 */
let allFlags = [];

const validateEmptyField = (spanId, spanMessage, value) => {
  if (value == null || value == "" || value === " ") {
    setStyle(spanId, `${spanMessage}`);
    return false;
  } else {
    setStyle(spanId, ``);
    return true;
  }
};

const validateValue = (inputId, rule, spanId, spanMessage) => {
  let inputValue = getValueById(inputId);
  let ruleIn = new RegExp();
  ruleIn = rule;
  let flag = false;
  if (rule.test(inputValue) == false) {
    setStyle(spanId, `${spanMessage}`);
  } else {
    setStyle(spanId, ``);
    flag = true;
  }
  return flag;
};

module.exports = {
  validateValue,
  validateEmptyField,
  setStyle
};
