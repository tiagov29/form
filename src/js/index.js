const inputs = document.querySelectorAll("input");
const button = document.querySelector("#btn");

let values = {};

let postUser = () => {
  [...inputs].map((input) => {
    values = { ...values, [input.name]: input.value };
  });
  console.log("values", values);
};
button.addEventListener("click", () => {
  postUser();
});

module.exports = { postUser, button, values };
