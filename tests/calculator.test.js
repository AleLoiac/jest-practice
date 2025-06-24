import { Calculator } from "../src/calculator";

test("Sum 1 and 2 to equal 3", () => {
  const calculator = new Calculator();
  expect(calculator.sum(1, 2)).toBe(3);
});

test("Sum 2 and 3 to equal 5", () => {
  const calculator = new Calculator();
  expect(calculator.sum(2, 3)).toBe(5);
});

test("Sum -1 and 2 to equal 1", () => {
  const calculator = new Calculator();
  expect(calculator.sum(-1, 2)).toBe(1);
});

test("Subtract 2 and 1 to equal 1", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Subtract 5 and 3 to equal 2", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("Subtract 2 and 3 to equal -1", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Subtract -2 and -3 to equal 1", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(-2, -3)).toBe(1);
});

test("Divide 2 and 1 to equal 2", () => {
  const calculator = new Calculator();
  expect(calculator.divide(2, 1)).toBe(2);
});

test("Divide 6 and 2 to equal 3", () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Divide 6 and 4 to equal 1.5", () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, 4)).toBe(1.5);
});

test("Divide -6 and -2 to equal 3", () => {
  const calculator = new Calculator();
  expect(calculator.divide(-6, -2)).toBe(3);
});

test("If the dividend is 0 result must be 0", () => {
  const calculator = new Calculator();
  expect(calculator.divide(0, 3)).toBe(0);
});

test("If the divisor is 0 we return a warning message", () => {
  const calculator = new Calculator();
  expect(calculator.divide(3, 0)).toBe("Impossible to divide by 0");
});

test("Multiply 3 and 2 to equal 6", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("Multiply 5 and 3 to equal 15", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("Multiply 3 and 0 to equal 0", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 0)).toBe(0);
});

test("Multiply -3 and -3 to equal 9", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(-3, -3)).toBe(9);
});
