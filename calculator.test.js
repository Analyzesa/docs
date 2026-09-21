import test from 'node:test';
import assert from 'node:assert';
import { calculate, usage } from './calculator.js';

test('addition', () => assert.strictEqual(calculate(10, '+', 5), 15));
test('subtraction', () => assert.strictEqual(calculate(10, '-', 5), 5));
test('multiplication', () => assert.strictEqual(calculate(10, '*', 5), 50));
test('division', () => assert.strictEqual(calculate(20, '/', 4), 5));
test('division by zero', () => assert.throws(() => calculate(1, '/', 0)));

test('negative numbers', () => assert.strictEqual(calculate(-10, '+', 5), -5));
test('float division', () => assert.strictEqual(calculate(7, '/', 2), 3.5));
test('unknown operator throws', () => assert.throws(() => calculate(1, '^', 2)));

test('usage returns help text', () => {
  const text = usage();
  assert.match(text, /Usage: node calculator\.js/);
  assert.match(text, /Supported operators/);
  assert.match(text, /Examples/);
});
