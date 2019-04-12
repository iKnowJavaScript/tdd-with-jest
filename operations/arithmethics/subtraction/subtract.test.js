const subtract = require("./subtract")

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
    expect(subtract(3, "4")).toMatch(/Must be Numbers/);
  });
  it("Parameter should at least be two", () => {
    expect(subtract(3)).toMatch(/only two Numbers/);
  });
  it("Parameter should not be more than two", () => {
    expect(subtract(3, 3, 3, 4)).toMatch(/only two Numbers/);
  });
});