// state variable
let sum;

// element references
let input = document.querySelector("input");
let total = document.querySelector("h1");

// functions
const init = () => {
  sum = 0;
  input.value = 1;
  render();
};

const render = () => {
  total.textContent = sum;
  if (sum > 0) total.style.color = "green";
    if (sum < 0) total.style.color = "red";
    if (sum === 0) total.style.color = "black";
};

const add = () => {
  sum += parseInt(input.value);
  render();
};
const subtract = () => {
  sum -= parseInt(input.value);
  render();
};

// event listener
document.querySelector("#add").addEventListener("click", add);
document.querySelector("#subtract").addEventListener("click", subtract);

init();
