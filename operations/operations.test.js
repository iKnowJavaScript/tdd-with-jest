const { add, addAll, subtract, muliply } = require("./operations");

//Testing Add implementation
describe("Testing Add implementation", () => {
  it("Add of 1 and 1 equals 2", () => {
    expect(add(1, 1)).toBe(2);
  });
  it("Add of Two large sum", () => {
    expect(add(233, 152)).toBe(385);
  });
  it("Parameter should only be Numbers", () => {
    expect(add(3, "4")).toBeFalsy();
  });
});

//Testing for AddAll Operation
describe("Add operation for Infinite numbers", () => {
  it("Addition of 1 and 1 equals 2", () => {
    expect(addAll(1, 1)).toBe(2);
  });
  it("Addition of multiple value", () => {
    expect(addAll(11, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10)).toBe(73);
  });
  it("Parameter should only be Numbers", () => {
    function logError() {
      addAll([], 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
    }
    expect(logError).toThrowError(Error);
  });
});

//Testing Subbtaction implementation
describe("Testing Subbtaction implementation", () => {
  it("Subtraction of 1 and 1", () => {
    expect(subtract(1, 1)).toBe(0);
  });
  it("Subtraction of 23 and 50", () => {
    expect(subtract(23, 50)).toBe(-27);
  });
  it("Subtraction of 21 and 111", () => {
    expect(subtract(111, 21)).toBe(90);
  });
  it("Parameter should only be Numbers", () => {
    expect(subtract(3, "4")).toBeFalsy();
  });
});

//Testting Multiply implimentation
describe("Testing Multiply implimentation", () => {
  it("Multiplication of 4 and 4", () => {
    expect(muliply(4, 4)).toBe(16);
  });
  it("Multiplication of 1 and 1", () => {
    expect(muliply(1, 1)).toBe(1);
  });
  it("Multiplication of 1 and 1", () => {
    expect(muliply(11, -8)).toBe(1);
  });
  it("Multiplication of 1132 and 1131331", () => {
    expect(muliply(1132, 1131331)).toBe(1280666692);
  });
  it("All parameter should only be Numbers", () => {
    function logError() {
      addAll([], 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
    }
    expect(logError).toThrowError(Error);
  });
});