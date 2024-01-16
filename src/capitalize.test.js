import { capitalize } from "./capitalize";

test("capitalizes 'fun' to equal 'Fun'", () => {
  expect(capitalize("fun")).toBe("Fun");
});

test("capitalizes 'bOrN' to equal 'BOrN'", () => {
  expect(capitalize("bOrN")).toBe("BOrN");
});
