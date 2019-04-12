const multiply = require("./multiply")

describe("Testing Multiply implimentation for infinite number", () => {
  it("Multiplication of 4 and 4", () => {
    expect(multiply(4, 4)).toBe(16);
  });
  it("Multiplication of many numbers", () => {
    expect(multiply(1, 1, 2, 3, 4)).toBe(24);
  });
  it("Multiplication of 11 and -8", () => {
    expect(multiply(11, -8)).toBe(-88);
  });
  it("Multiplication of 1132 and 1131331", () => {
    expect(multiply(1132, 1131331)).toBe(1280666692);
  });
  it("Parameter should at least be two", () => {
    expect(multiply(1)).toMatch(/least two Number/);
  });
  it("All parameter should only be Numbers", () => {
    function logError() {
      multiply([], 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
    }
    expect(logError).toThrowError(Error);
  });
});