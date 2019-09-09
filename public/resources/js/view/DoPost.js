const swal = require("sweetalert2");
const pickFormValues = require("./PickFormValues");
const outPutView = require("./OutPutView");

const axios = require("axios");

const axiosPost = () => {
  const data = {
    customerInfo: pickFormValues.customerInfo(),
    partOrdered: pickFormValues.partOrdered(),
    shipping: pickFormValues.shipping()
  };

  console.log(pickFormValues.returnedFlag.getFlag());
  return;

  if (pickFormValues.returnedFlag == false) {
    swal.fire({
      position: "center",
      type: "warning",
      title: "empty values",
      text: "make sure all required fields are filled",
      showConfirmButton: true,
      timer: 2000
    });
    return;
  }

  axios
    .post("/api/toyota/post", { data })
    .then(res => {
      outPutView.printOutPut(data);

      swal.fire({
        position: "top-end",
        type: "success",
        title: "successully saved",
        showConfirmButton: false,
        timer: 2000
      });
    })
    .catch(error => {
      console.log("error", error);
      swal.fire({
        position: "top-end",
        type: "error",
        title: "something was wrong",
        showConfirmButton: false,
        timer: 2000
      });
    });
};

const doPost = () => {
  pickFormValues.getElById("the-form").addEventListener("submit", e => {
    e.preventDefault();
    // Validation.validate();
    axiosPost();
  });
};

doPost();

const closeWindow = () => {
  pickFormValues.getElById("exit").addEventListener(`click`, e => {
    window.addEventListener("beforeunload", event => {
      event.returnValue = `Are you sure you want to leave?`;
    });
  });
};

pickFormValues.getElById(`exit`).addEventListener(`click`, () => {
  window.close();
});

// let formChanged = false;
// myForm.addEventListener("change", () => (formChanged = true));
// window.addEventListener("beforeunload", event => {
//   if (formChanged) {
//     event.returnValue = "You have unfinished changes!";
//   }
// });
