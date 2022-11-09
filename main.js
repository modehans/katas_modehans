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

//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
const sumDigPow = (a, b) => {
  let arr = [];
  for (let i = a; i < b; i++) {
    if (
      i ==
      i
        .toString()
        .split('')
        .reduce((acc, b, i) => acc + b ** (i + 1), 0)
    ) {
      arr.push(i);
    }
  }
  return arr;
};

console.log('sunDigPow', sumDigPow(5, 100));

// Tribonacci Sequence
const tribonacci = (s, n) => {
  for (let i = 0; i < n - 3; i++) {
    s.push(s[i] + s[i + 1] + s[i + 2]);
  }
  return s.slice(0, n);
};

console.log('Tribonacci', tribonacci([1, 2, 3], 10));

//Duplicate encoder

const duplicateEncode = (word) => {
  return word
    .toLowerCase()
    .split('')
    .map((a) =>
      word.toLowerCase().indexOf(a) === word.toLowerCase().lastIndexOf(a)
        ? '('
        : ')'
    )
    .join('');
};

console.log('Duplicate encode', duplicateEncode('Success'));

//Counting duplicates
const duplicateCount = (text) =>
  (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;

console.log('Letters duplicate count', duplicateCount('indivisibility'));

//Replace With Alphabet Position
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split('')
    .map((a) => a.charCodeAt() - 64)
    .filter((a) => a > 0 && a < 27)
    .join(' ');
}
console.log(
  'Alphabet position',
  alphabetPosition("The sunset sets at twelve o'clock.")
);

//Moving Zeros To The End
function moveZeros(arr) {
  return [...arr.filter((a) => a !== 0), ...arr.filter((a) => a === 0)];
}

console.log(
  'Moving Zeros To The End',
  moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])
);

//Who likes it?
const likes = (names) => {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

console.log(
  'Likes count',
  likes(['Alex', 'Ana', 'Jacob', 'Mark', 'Max', 'Susana'])
);

//Built tree according to number of floors
function towerBuilder(floors) {
  let space,
    star,
    tower = [];
  for (let i = 1; i <= floors; i++) {
    space = ' '.repeat(floors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
console.log('Built tree', towerBuilder(10));

function isValidWalk(walk) {
  const count = (val) => walk.filter((el) => el === val).length;
  return (
    walk.length == 10 && count('n') == count('s') && count('w') == count('e')
  );
}

console.log(
  'Take a Ten Minutes Walk',
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
);

//Cambiar última letra de una palabra por el símbolo $
const changeLastLetter = (string) => string.toString().slice(0, -1) + '$';

console.log('Change last letter to $', changeLastLetter('Buenos días'));

//Array difference
function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}
console.log('Array difference', arrayDiff([1, 3, 4], [4]));

//Is this a triangle?
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
console.log('¿Es un triángulo?', isTriangle(3, 4, 6));

//Unique In Order

const uniqueInOrder = (iterable) => {
  return [...iterable].filter((el, i) => el !== iterable[i - 1]);
};

console.log(
  'Array de elementos únicos cercanos',
  uniqueInOrder('AAAABBBCCDAABBBb')
);

//Sort the odd
const sortOddArray = (array) => {
  const odds = array.filter((item) => item % 2).sort((a, b) => a - b);
  return array.map((item) => (item % 2 ? odds.shift() : item));
};

console.log('Ordena los impares', sortOddArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

//Multiplica cada fila por cada columna dados dos arrays Prueba KairosDS

const calculatemultiplication = (arr1, arr2) =>
  arr1.map((f, i) => f.map((n, j) => n * arr2[j][i]));

console.log(
  'Multiplica cada fila por columna',
  calculatemultiplication(
    [
      [2, 4, 6],
      [8, 10, 8],
      [6, 4, 2],
    ],
    [
      [1, 3, 5],
      [7, 9, 7],
      [5, 3, 1],
    ]
  )
);
