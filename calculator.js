#!/usr/bin/env node

export function calculate(a, op, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}

export function usage() {
  return `Usage: node calculator.js <a> <op> <b>

Supported operators:
  +   addition
  -   subtraction
  *   multiplication
  /   division

Examples:
  node calculator.js 20 + 4    # => 24
  node calculator.js 20 - 4    # => 16
  node calculator.js 20 '*' 4  # => 80
  node calculator.js 20 / 4    # => 5`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [,, a, op, b] = process.argv;

  if (a === '--help' || a === '-h') {
    console.log(usage());
    process.exit(0);
  }

  if (!a || !op || !b) {
    console.error(usage());
    process.exit(1);
  }

  console.log(calculate(Number(a), op, Number(b)));
}
