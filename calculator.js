#!/usr/bin/env node

const [, , a, op, b] = process.argv;

function usage() {
  console.error('Usage: node calculator.js <num> <op> <num>');
  console.error('Operators: + - * /');
  process.exit(1);
}

if (!a || !op || !b) usage();

const x = Number(a);
const y = Number(b);

if (Number.isNaN(x) || Number.isNaN(y)) {
  console.error('Error: operands must be numbers');
  process.exit(1);
}

let result;
switch (op) {
  case '+': result = x + y; break;
  case '-': result = x - y; break;
  case '*': result = x * y; break;
  case '/':
    if (y === 0) { console.error('Error: division by zero'); process.exit(1); }
    result = x / y;
    break;
  default:
    console.error(`Error: unknown operator '${op}'`);
    usage();
}

console.log(result);
