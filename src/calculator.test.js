import { calculator } from "./calculator";

// Add

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds 1 + -2 to equal -1", () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

// Subtract

test("subtracts 1 - 2 to equal -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtracts 1 - -2 to equal 3", () => {
  expect(calculator.subtract(1, -2)).toBe(3);
});

// Multiply

test("multipy 8 * 9 to equal 72", () => {
  expect(calculator.multiply(8, 9)).toBe(72);
});

test("subtracts 8 * -9 to equal -72", () => {
  expect(calculator.multiply(8, -9)).toBe(-72);
});

// Divide

test("divides 72 / 9 to equal 8", () => {
  expect(calculator.divide(72, 9)).toBe(8);
});

test("divides 72 / -9 to equal -8", () => {
  expect(calculator.divide(72, -9)).toBe(-8);
});
