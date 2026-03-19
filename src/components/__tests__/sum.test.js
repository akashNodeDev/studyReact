const sum = require("../sum");

test("Sum function should calculate sum of two no.s", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
