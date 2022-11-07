const mathOperations = require("./calculator");

describe("Test calculator application", () => {
  test("Test sum", () => {
    expect(mathOperations.sum(2, 2)).toBe(4);
  });

  test("Test subtract", () => {
    expect(mathOperations.diff(2, 2)).toBe(0);
  });

  test("Test Multiply", () => {
    expect(mathOperations.product(2, 3)).toBe(6);
  });

  test("Test divide", () => {
    expect(mathOperations.divide(2, 2)).toBe(1);
  });
});
