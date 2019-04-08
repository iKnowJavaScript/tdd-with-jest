const { add } = require("./operations");

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