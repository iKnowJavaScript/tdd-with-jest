const addAll = require('./addAll');

describe("Testing add operation for Infinite numbers", () => {
  it("Addition of 1 and 1 equals 2", () => {
    expect(addAll(1, 1)).toBe(2);
  });
  it("Addition of multiple value", () => {
    expect(addAll(11, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10)).toBe(73);
  });
  it("Parameter should at least be two", () => {
    expect(addAll(1)).toMatch(/least two Number/);
  });
  it("Parameter should only be Numbers", () => {
    function logError() {
      addAll([], 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
    }
    expect(logError).toThrowError(Error);
  });
});