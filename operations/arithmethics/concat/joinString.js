module.exports = function joinString (a, b) {
  return arguments.length < 2 || arguments.length > 3
    ? "Input only two String"
    : typeof a === "string" && typeof b === "string" 
      ? a.concat(b) 
      : "Inputs Must be String";
};