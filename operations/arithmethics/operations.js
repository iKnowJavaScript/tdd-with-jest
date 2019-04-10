//Addition Operation
const twoSum = function(a, b) {
  return typeof a === "number" && typeof b === "number"
    ? a + b
    : "Inputs Must be Numbers";
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
const divide = function(a, b) {
  return typeof a === "number" && typeof b === "number" ? a / b : false;
};

//String Concatenation Operation
const joinString = function(a, b) {
  return typeof a === "string" && typeof b === "string" ? a.concat(b) : false;
};

module.exports = { twoSum, addAll, subtract, multiply, divide, joinString };
