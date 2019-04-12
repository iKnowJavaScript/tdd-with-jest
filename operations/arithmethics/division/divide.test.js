const divide = require("./divide");

describe("Testing Division implementation", () => {
  it("Subtraction of 1 and 2", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  it("Subtraction of 100 and 25", () => {
    expect(divide(100, 25)).toBe(4);
  });
  it("Parameter should only be Numbers", () => {
    expect(divide(3, "4")).toMatch(/Must be Numbers/);
  });
  it("Parameter should at least be two", () => {
    expect(divide(3)).toMatch(/only two Numbers/);
  });
  it("Parameter should not be more than two", () => {
    expect(divide(3, 3, 3, 4)).toMatch(/only two Numbers/);
  });
});
