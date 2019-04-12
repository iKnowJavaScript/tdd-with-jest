module.exports = function subtract (a, b) {
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two Numbers"
    : typeof a === "number" && typeof b === "number" 
      ? a - b 
      : "Inputs Must be Numbers";
};