//Addition Operation
const add = function(a, b) {
  return typeof a === "number" && typeof b === "number" ? a + b : false;
};

//Adding Infinite sum of numbers
const addAll = function() {
  let total = 0;
  for (let arg in arguments) {
    let loop = typeof arguments[arg] === "number";

    if (!loop) {
      throw new Error("Only Numbers are allowed");
    } else {
      total += arguments[arg];
    }
  }
  return total;
};

//Subraction Operation
const subtract = function(a, b) {
  return typeof a === "number" && typeof b === "number" ? a - b : false;
};

//Multiplication Operation
const multiply = function() {
  let total = 1;
  for (let arg in arguments) {
    let loop = typeof arguments[arg] === "number";

    if (!loop) {
      throw new Error("Only Numbers are allowed");
    } else {
      total *= arguments[arg];
    }
  }
  return total;
};

//Division Operation
const divide = function (a, b) {
  return typeof a === "number" && typeof b === "number" ? a / b : false;
}



module.exports = { add, addAll, subtract, multiply, divide, joinString };



