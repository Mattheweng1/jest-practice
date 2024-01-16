import { analyzeArray } from "./analyzeArray";

test("analyzeArray [1, 2, 3, 4, 5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyzeArray [1, 8, 3, 4, 2, 6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

// Test negative numbers

test("analyzeArray [-1, -8, -3, -4, -2, -6]", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  });
});

test("analyzeArray [-1, 1]", () => {
  expect(analyzeArray([-1, 1])).toEqual({
    average: 0,
    min: -1,
    max: 1,
    length: 2,
  });
});
