const swal = require("sweetalert2");
const pickFormValues = require("./PickFormValues");
const outPutView = require("./OutPutView");

const axios = require("axios");

const swalMessage = (title, type, text) => {
  swal.fire({
    position: "center",
    type: "warning",
    title: title,
    text: text,
    showConfirmButton: true,
    timer: 2000
  });
};

const axiosPost = () => {
  const data = {
    customerInfo: pickFormValues.customerInfo(),
    partOrdered: pickFormValues.partOrdered(),
    shipping: pickFormValues.shipping()
  };

  if (pickFormValues.returnedFlag.getFlag() == false) {
    swalMessage(`wrong inputs`, `warning`, `please re-check your inputs`);
    return;
  }

  outPutView.printOutPut(data);

  swal
    .fire({
      title: "Are you sure?",
      text: "If you accept, your data will be saved!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!"
    })
    .then(result => {
      console.log(result.value);

      if (result.value) {
        axios
          .post("/api/toyota/post", { data })
          .then(res => {
            // output to the UI

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
              position: "center",
              type: "error",
              title: "something was wrong",
              showConfirmButton: false,
              timer: 2000
            });
          });
      } else {
        swalMessage(`message`, `warning`, `operation cancelled`);
      }
    });
};

const doPost = () => {
  pickFormValues.getElById("the-form").addEventListener("submit", e => {
    e.preventDefault();
    axiosPost();
  });
};

doPost();

/**
 * clear fields
 */
const clearFields = () => {
  document.getElementById(`new-order-btn`).addEventListener(`click`, e => {
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
      // clear fields of type text
      if (document.getElementsByTagName("input")[i].type == `text`) {
        document.getElementsByTagName("input")[i].value = "";
      }
    }

    for (
      let i = 0;
      i < document.getElementsByClassName("output-result").length;
      i++
    ) {
      document.getElementsByClassName("output-result")[i].textContent = "";
    }
  });
};

clearFields();
