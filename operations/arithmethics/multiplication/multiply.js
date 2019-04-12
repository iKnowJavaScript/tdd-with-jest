module.exports = function  multiply() {
  
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