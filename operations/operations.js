const add = function(a, b) {
  return typeof a === "number" && typeof b === "number" ? a + b : false;
};

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


module.exports = { add, addAll };
