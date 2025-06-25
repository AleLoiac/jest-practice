import { caesarCypher } from "../src/caesarCipher";

test('Cypher "string" with a shift of 3 to equal "vwulqj"', () => {
  expect(caesarCypher("string", 3)).toBe("vwulqj");
});

test('Cypher "abc" with a shift of 2 to equal "cde"', () => {
  expect(caesarCypher("abc", 2)).toBe("cde");
});

test('Cypher "xyz" with a shift of 3 to equal "abc"', () => {
  expect(caesarCypher("xyz", 3)).toBe("abc");
});

test('Cypher "HeLLo" with a shift of 3 to equal "KhOOr"', () => {
  expect(caesarCypher("HeLLo", 3)).toBe("KhOOr");
});

test('Cypher "Hello, World!" with a shift of 3 to equal "Khoor, Zruog!"', () => {
  expect(caesarCypher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
