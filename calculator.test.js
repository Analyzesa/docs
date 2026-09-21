import test from 'node:test';
import assert from 'node:assert';
import { calculate } from './calculator.js';

test('addition', () => assert.strictEqual(calculate(10, '+', 5), 15));
test('subtraction', () => assert.strictEqual(calculate(10, '-', 5), 5));
test('multiplication', () => assert.strictEqual(calculate(10, '*', 5), 50));
test('division', () => assert.strictEqual(calculate(20, '/', 4), 5));
test('division by zero', () => assert.throws(() => calculate(1, '/', 0)));
