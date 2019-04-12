//Addition Operation
const twoSum = function(a, b) {
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two Numbers"
    : typeof a === "number" && typeof b === "number"
      ? a + b
      : "Inputs Must be Numbers";
};

//Adding Infinite sum of numbers
const addAll = function() {
  if(arguments.length < 2) return "Input at least two Number";
  
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
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two Numbers"
    : typeof a === "number" && typeof b === "number" 
      ? a - b 
      : "Inputs Must be Numbers";
};

//Multiplication Operation
const multiply = function() {
  
  if(arguments.length < 2) return "Input at least two Number";

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
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two Numbers"
    : typeof a === "number" && typeof b === "number" 
      ? a / b 
      : "Inputs Must be Numbers";
};

//String Concatenation Operation
const joinString = function(a, b) {
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two String"
    : typeof a === "string" && typeof b === "string" 
      ? a.concat(b) 
      : "Inputs Must be String";
};

module.exports = { twoSum, addAll, subtract, multiply, divide, joinString };
