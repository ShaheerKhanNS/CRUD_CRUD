//

"use strict";

// const btnnn = document.getElementById("btn");

// console.log(btnnn);
const ul = document.querySelector(".list");

function render(data) {
  const markUp = `<li>${data.userName} ${data.userEmail}</li>
  <button onclick=deleteUser('${data._id}')> Delete User </button>
 <button onclick=editUser('${data._id}')> Edit </button> `;

  ul.insertAdjacentHTML("beforeend", markUp);
}

function deleteUser(user_id) {
  axios
    .delete(
      `https://crudcrud.com/api/bb4f95cad1db46d4b3555b4d314c4109/appointmentData/${user_id}`
    )
    .then((data) => render(data.data))
    .catch((err) => console.log(err));
}

function upload() {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;

  const data = {
    userName,
    userEmail,
  };
  // render(data);

  axios
    .post(
      "https://crudcrud.com/api/bb4f95cad1db46d4b3555b4d314c4109/appointmentData",
      data
    )
    .then((data) => render(data.data))
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/bb4f95cad1db46d4b3555b4d314c4109/appointmentData"
    )
    .then((data) => {
      let output = data.data;
      if (output.length === 0) return;
      output.forEach((data) => render(data));
      return data;
    });
});
