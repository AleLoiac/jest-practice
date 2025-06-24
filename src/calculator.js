export class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Impossible to divide by 0";
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}
