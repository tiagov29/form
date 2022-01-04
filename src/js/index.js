const inputs = document.querySelectorAll("input");
const button = document.querySelector("#btn");

let values = {};

let getInput = () => {
  [...inputs].map((input) => {
    values = { ...values, [input.name]: input.value };
  });
  console.log("values", values);
};
button.addEventListener("click", () => {
  getInput();
});
