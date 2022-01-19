function calculate (operation, num1, num2) {
  switch (operation) {
    case '*': return num1 * num2;
    case '/': return num1 / num2;
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '^': return Math.pow(num1, num2);
    default: break;
  }
}

console.warn(calculate('*', 2, 2)); // 4
console.warn(calculate('/', 2, 2)); // 1
console.warn(calculate('+', 2, 2)); // 4
console.warn(calculate('-', 2, 2)); // 0
console.warn(calculate('^', 2, 2)); // 4
