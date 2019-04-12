const joinString = require("./joinString")

describe("Testing String Concatenation implementation", () => {
  it('Concatenate of "Well" and "Done"', () => {
    expect(joinString("Well", "Done")).toBe("WellDone");
  });
  it('Concatenate of "Good" and "Job"', () => {
    expect(joinString("Good", "Job")).toBe("GoodJob");
  });
  it("Parameter should only be String", () => {
    expect(joinString("Well", 4)).toMatch(/Must be String/);
  });
  it("Parameter should at least be two", () => {
    expect(joinString("Well")).toMatch(/only two String/);
  });
  it("Parameter should not be more than two", () => {
    expect(joinString("Good", "Job", "Well", "Done")).toMatch(/only two String/);
  });
});
