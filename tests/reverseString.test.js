import { reverseString } from "../src/reverseString";

test('Reverse "string" to equal "gnirts"', () => {
  expect(reverseString("string")).toBe("gnirts");
});

test('Reverse "banana" to equal "ananab"', () => {
  expect(reverseString("banana")).toBe("ananab");
});

test('Reverse "JavaScript" to equal "tpircSavaJ"', () => {
  expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test('Reverse "Hello World" to equal "dlroW olleH"', () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("Returns empty string unchanged", () => {
  expect(reverseString("")).toBe("");
});

test("Reverse string with punctuation", () => {
  expect(reverseString("hello!")).toBe("!olleh");
});
