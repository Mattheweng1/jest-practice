import { reverseString } from "./reverseString";

test("reverseString 'fun' to equal 'nuf'", () => {
  expect(reverseString("fun")).toBe("nuf");
});

test("reverseString 'bOrN' to equal 'NrOb'", () => {
  expect(reverseString("bOrN")).toBe("NrOb");
});
