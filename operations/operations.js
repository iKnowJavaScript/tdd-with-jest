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

//console.log(addAll(11, false, 3, 4, 5, 6, 7, 8, 8, 9, 10));

module.exports = { add, addAll };
