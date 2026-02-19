function add(a, b) {
  //TODO
  if (typeof a !== "number" || typeof b !== "number") {
    console.warn("Both shohuld be numbers");
    return null;
  }
  return a + b;
}

function subtract(a, b) {
  //TODO
  if (typeof a !== "number" || typeof b !== "number") {
    console.warn("Both shohuld be numbers");
    return null;
  }
  return a - b;
}

function multiply(a, b) {
  //TODO
  if (typeof a !== "number" || typeof b !== "number") {
    console.warn("Both shohuld be numbers");
    return null;
  }
  return a * b;
}

function divide(a, b) {
  //TODO
  if (typeof a !== "number" || typeof b !== "number") {
    console.warn("Both shohuld be numbers");
    return null;
  }
  if (b === 0) {
    console.warn("Cannot divide by zero");
    return null;
  }
  return a / b;
}

function sumArray(numbers) {
  //TODO

  if (!Array.isArray(numbers)) {
    console.warn("Input should be an array");
    return null;
  }
  if (numbers.length === 0) {
    console.warn("Array should not be empty");
    return 0;
  }
  return numbers.some((num) => typeof num !== "number")
    ? (console.warn("All elements should be numbers"), null)
    : numbers.reduce((sum, num) => sum + num, 0);
}

function average(numbers) {
  //TODO
  if (!Array.isArray(numbers)) {
    console.warn("Input should be an array");
    return null;
  }
  if (numbers.length === 0) {
    console.warn("Array should not be empty");
    return null;
  }
  if (numbers.some((num) => typeof num !== "number")) {
    console.warn("All elements should be numbers");
    return null;
  }
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

function max(numbers) {
  //TODO
  if (!Array.isArray(numbers)) {
    console.warn("Input should be an array");
    return null;
  }
  if (numbers.length === 0) {
    console.warn("Array should not be empty");
    return null;
  }
  return Math.max(...numbers);
}

function min(numbers) {
  //TODO
  if (!Array.isArray(numbers)) {
    console.warn("Input should be an array");
    return null;
  }
  if (numbers.length === 0) {
    console.warn("Array should not be empty");
    return null;
  }
  return Math.min(...numbers);
}

function isEven(number) {
  //TODO
  if (typeof number !== "number") {
    console.warn("Input should be a number");
    return null;
  }
  return number % 2 === 0;
}

function factorial(n) {
  //TODO
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    console.warn("Input should be a non-negative number");
    return null;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial,
};
