const swal = require("sweetalert2");
const pickFormValues = require("./PickFormValues");
const outPutView = require("./OutPutView");

const axios = require("axios");

const axiosPost = () => {
  console.log("in here...");
  const data = {
    customerInfo: pickFormValues.customerInfo(),
    partOrdered: pickFormValues.partOrdered(),
    shipping: pickFormValues.shipping()
  };

  // axios
  //   .post("/api/toyota/post", { data })
  //   .then(res => {
  //     outPutView.printOutPut(data);

  //     swal.fire({
  //       position: "top-end",
  //       type: "success",
  //       title: "successully saved",
  //       showConfirmButton: false,
  //       timer: 2000
  //     });
  //   })
  //   .catch(error => {
  //     console.log("error", error);
  //     swal.fire({
  //       position: "top-end",
  //       type: "error",
  //       title: "something was wrong",
  //       showConfirmButton: false,
  //       timer: 2000
  //     });
  //   });
};

const doPost = () => {
  pickFormValues.getElById("the-form").addEventListener("submit", e => {
    e.preventDefault();
    // Validation.validate();
    axiosPost();
  });
};

doPost();
