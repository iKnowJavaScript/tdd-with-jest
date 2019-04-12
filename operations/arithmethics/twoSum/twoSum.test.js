const twoSum = require("./twoSum");

describe("Testing twoSum implementation", () => {
  it("Add of Two large sum", () => {
    expect(twoSum(233, 152)).toBe(385);
  });
  it("Parameter should only be Numbers", () => {
    expect(twoSum(3, "4")).toMatch(/Must be Numbers/);
  });
  it("Parameter should at least be two", () => {
    expect(twoSum(3)).toMatch(/only two Numbers/);
  });
  it("Parameter should not be more than two", () => {
    expect(twoSum(3, 3, 3, 4)).toMatch(/only two Numbers/);
  });
});
