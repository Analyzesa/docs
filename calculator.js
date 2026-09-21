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

// CLI فقط عند التشغيل المباشر
if (import.meta.url === `file://${process.argv[1]}`) {
  const [,, a, op, b] = process.argv;
  if (!a || !op || !b) {
    console.error('Usage: node calculator.js <a> <op> <b>');
    process.exit(1);
  }
  console.log(calculate(Number(a), op, Number(b)));
}
