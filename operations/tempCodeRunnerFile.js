const addAll = function() {
  let total = 0;
  for (let arg in arguments) {
    if (!isNaN(arguments[arg])) {
      total += arguments[arg];
    } else {
      console.log(arguments[arg])
      throw new Error("Only Numbers are allowed");
      continue;
    }
  }
  return total;
};

console.log(addAll(11, false, 3, 4, 5, 6, 7, 8, 8, 9, 10));
