const {
  add,
  addAll,
  subtract,
  multiply,
  divide,
  joinString
} = require("./operations");

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
describe("Testing add operation for Infinite numbers", () => {
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
  it("Subtraction of 111 and 21", () => {
    expect(subtract(111, 21)).toBe(90);
  });
  it("Parameter should only be Numbers", () => {
    expect(subtract(3, "4")).toBeFalsy();
  });
});

//Testting Multiply implimentation
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
  it("All parameter should only be Numbers", () => {
    function logError() {
      multiply([], 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
    }
    expect(logError).toThrowError(Error);
  });
});

//Testing Division implementation
describe("Testing Division implementation", () => {
  it("Subtraction of 1 and 2", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  it("Subtraction of 100 and 25", () => {
    expect(divide(100, 25)).toBe(4);
  });
  it("Parameter should only be Numbers", () => {
    expect(divide(3, "4")).toBeFalsy();
  });
});

//Testing String Concatenation Operation
describe("Testing String Concatenation implementation", () => {
  it('Concatenate of "Well" and "Done"', () => {
    expect(joinString("Well", "Done")).toBe("WellDone");
  });
  it('Concatenate of "Good" and "Job"', () => {
    expect(joinString("Good", "Job")).toBe("GoodJob");
  });
  it("Parameter should only be String", () => {
    expect(joinString("Well", 4)).toBeFalsy();
  });
});
