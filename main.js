'use strict';

//Crear Factorial de un número con una función recurrente.
const factorial = (n) => {
  if (n === 1 || 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(6));

// Detect Pangram
const isPangram = (string) => {
  return string.match(/([a-z])(?!.*\1)/gi).length === 26;
};

console.log(
  'No es un pangram',
  isPangram('Esto no es un pangram, ni se le parece')
);
console.log('Si es un pangram', isPangram('abcd efghijk lmno pqrs tuvwxyz'));

//Breack CammelCase
const breackCamelCase = (string) => string.replace(/[A-Z]/g, ' $&');

console.log('Romper palabras camelCase', breackCamelCase('breackCamelCase'));

// encuentra el número no repetido
const stray = (numbers) =>
  +numbers.filter(
    (value) => numbers.indexOf(value) === numbers.lastIndexOf(value)
  );

console.log('Find the stray number', stray([17, 17, 3, 17, 17, 17, 17]));

//Are they the same multiplicities

const isSameMultiplicities = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  return (
    array1
      .map((a) => a ** 2)
      .sort()
      .toString() === array2.sort().toString()
  );
};

console.log(
  '¿Es la segunda el cudrado de la primera?',
  isSameMultiplicities(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
