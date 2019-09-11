/**
 * @author Daniel Comboni
 *
 *
 *
 */

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

const showToast = (position, title, type) => {
  const Toast = swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    title: title,
    type: type
  });
};

const axiosPost = () => {
  const data = {
    customerInfo: pickFormValues.customerInfo(),
    partOrdered: pickFormValues.partOrdered(),
    shipping: pickFormValues.shipping()
  };

  if (pickFormValues.returnedFlag.getFlag() == false) {
    showToast("top-end", "wrong inputs", "error");
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
            showToast(`center`, `successfully saved`, `success`);
          })
          .catch(error => {
            console.log("error", error);
            showToast(`center`, `error`, `something went wrong`);
          });
      } else {
        showToast(`center`, `operation was cancelled`, `warning`);
      }
    });
};

const doPost = () => {
  pickFormValues.getElById("the-form").addEventListener("submit", e => {
    e.preventDefault();
    axiosPost();
  });
};

/**
 * posting
 */
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

const exit = () => {
  document.getElementById("exit").addEventListener("click", () => {
    document.write("you exited");
    showToast("center", "you exited", "success");
  });
};

exit();
