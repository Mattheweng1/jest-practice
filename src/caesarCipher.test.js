import { caesarCipher } from "./caesarCipher";

test("caesarCipher shift 'cool' by 2 to be 'eqqn'", () => {
  expect(caesarCipher("cool", 2)).toBe("eqqn");
});

// Test negative shifts

test("caesarCipher shift 'fun' by -3 to be 'crk'", () => {
  expect(caesarCipher("fun", -3)).toBe("crk");
});

// Test z - a looping

test("caesarCipher shift 'abcd' by -2 to be 'yzab'", () => {
  expect(caesarCipher("abcd", -2)).toBe("yzab");
});

// Test keeping the same case

test("caesarCipher shift 'aBcD' by -2 to be 'yZaB'", () => {
  expect(caesarCipher("aBcD", -2)).toBe("yZaB");
});
