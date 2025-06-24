import { capitalize } from "../src/capitalize";

test('Capitalize "a" to equal "A"', () => {
  expect(capitalize("a")).toBe("A");
});

test('Capitalize "b" to equal "B"', () => {
  expect(capitalize("b")).toBe("B");
});

test('Capitalize "string" to equal "String"', () => {
  expect(capitalize("string")).toBe("String");
});

test('Capitalize "javaScript" to equal "JavaScript"', () => {
  expect(capitalize("javaScript")).toBe("JavaScript");
});

test("Returns empty string unchanged", () => {
  expect(capitalize("")).toBe("");
});
