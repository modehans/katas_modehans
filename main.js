'use strict';

//Crear Factorial de un número con una función recurrente.
const factorial = (n) => {
  if (n === 1 || 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(6));
