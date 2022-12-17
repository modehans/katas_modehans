'use strict';

//Crear Factorial de un número con una función recurrente o recursiva.

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log('factorial', factorial(7));

// Detect Pangram

const isPangram = (string) => {
  return string.match(/([a-z])(?!.*\1)/gi).length === 26;
};

console.log(
  'No es un pangram',
  isPangram('Esto no es un pangram, ni se le parece')
);

console.log('Si es un pangram', isPangram('abcd efghijk lmno pqrs tuvwxyz'));

//sum Mixed Array

const sumMix = (x) => x.reduce((acc, item) => acc + parseInt(item), 0);

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

//Counting Sheep

const countSheeps = (arrayOfSheep) =>
  arrayOfSheep
    .map((element) => (element === true ? 1 : 0))
    .reduce((a, b) => a + b, 0);

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

//Multiplica cada fila por cada columna dados dos arrays matriz

const calculateElementRowColumTwoLevels = (arr1, arr2) =>
  arr1.map((f, i) => f.map((n, j) => n * arr2[j][i]));

console.log(
  'Multiplica cada fila por columna array de dos niveles',
  calculateElementRowColumTwoLevels(
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

//Multiplica cada fila por cada columna dados dos arrays

const calculateElementRowColum = (arr1, arr2) =>
  arr1.map((f, i) => f.map((n, j) => n * arr2[j][i])).flat();

console.log(
  'Multiplica cada fila por columna',
  calculateElementRowColum(
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

//Añadir a un número ceros a la izquierda en un array

const result = calculateElementRowColum(
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
);

const addZero = (array) =>
  array.map((element) => element.toString().padStart(3, '0'));

console.log('Array add Zeros', addZero(result));

//Multiplicación de matrices

const matrixMultiplication = (array1, array2) => {
  const columArray1 = array1[0].length;
  const rowArray2 = array2.length;
  if (columArray1 === rowArray2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      result[i] = [];
      for (let j = 0; j < array2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < array1[0].length; k++) {
          sum += array1[i][k] * array2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }
  return 'El número columnas de la matriz 1 debe ser igual al número de filas de la matriz 2';
};

console.log(
  'Matrix multiplication:',
  matrixMultiplication(
    [
      [2, 0],
      [1, 3],
      [5, 2],
    ],
    [
      [-1, -1, 3],
      [5, 6, 4],
    ]
  )
);

//Diagonal Diference HakerRank

function diagonalDifference(arr) {
  return Math.abs(
    arr
      .map((el, i) => el[i] - el[arr.length - 1 - i])
      .reduce((a, b) => a + b, 0)
  );
}

console.log(
  'Diagonal Diference Matrix',
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

//Contar ovejas AdventJs

const contarOvejas = (ovejas) =>
  ovejas
    .filter((oveja) => oveja.color === 'rojo')
    .filter((oveja) => oveja.name.match(/na/gi));

//Contar regalos

function listGifts(letter) {
  const arr = letter
    .split(' ')
    .filter((gift) => !gift.startsWith('_') && gift !== '');
  return arr.reduce((count, gift) => {
    count[gift] = (count[gift] || 0) + 1;
    return count;
  }, {});
}

console.log(listGifts('bici coche balón _playstation bici  coche   peluche'));

//El grinch quiere fastidiar la navidad AdventJS

function isValid(letter) {
  const arr = letter.split(' ');
  const vacio = arr.filter((el) => el === '()').length;
  const noAbre = arr.filter(
    (el) => el.startsWith(')' || '}').length || el.endsWith('(' || '{')
  ).length;

  const noCierra = arr.filter(
    (el) =>
      (el.startsWith('(') && !el.endsWith(')')) ||
      (el.startsWith('{') && !el.endsWith('}'))
  ).length;

  if (vacio || noAbre || noCierra !== 0) {
    return false;
  }
  return true;
}

console.log(isValid('bici coche (balón) bici coche peluche'));
console.log(isValid('(muñeca) consola bici'));
console.log(isValid('bici coche (balón bici coche'));
console.log(isValid('peluche (bici [coche) bici coche balón'));
console.log(isValid('(peluche {) bici'));
console.log(isValid('() bici'));
//no me funciona en la página de AdventJS

//Filtrar valores únicos sin SET

const unique = (array) => {
  let result = [];
  array.map((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
};

console.log('unique', unique([1, 2, 1, 2, 3, 4, 5, 3]));

//Filtrar valores únicos con SET

const uniqueSet = (array) => {
  let mySet = new Set();
  array.map((element) => mySet.add(element));
  const newArray = Array.from(mySet);
  return newArray;
};

console.log('uniqueSet', uniqueSet([1, 2, 1, 2, 3, 4, 5, 3]));

//Traductor mimimimi

const traductorMiMiMi = (word) => {
  return word.replace(/[aeiou]/g, 'i').replace(/[AEIOU]/g, 'I');
};

console.log(
  'Traductor mimimi',
  traductorMiMiMi('Me encanta programar. Estoy muy ilusionada')
);

//Mini-Max Sum HackerRank

function miniMaxSum(arr) {
  let sortArray = arr.sort((a, b) => a - b);
  let minimum = sortArray
    .slice(0, sortArray.length - 1)
    .reduce((a, b) => a + b);
  let maximum = sortArray.slice(1).reduce((a, b) => a + b);
  console.log('Suma Mínima y máxima', minimum, maximum);
}

miniMaxSum([13, 12, 9, 4, 2]);

//Drawing book

function pageCount(n, p) {
  let frontPages = ~~(p / 2);
  let backPages = Math.abs(~~(n / 2 - frontPages));
  let result = Math.min(frontPages, backPages);
  return result;
}

console.log(pageCount(47, 67));

//reto 1 del #AdventJS 2022

const gifts = ['book', 'game', 'socks'];

/* function wrapping(gifts) {
  const newArray = [];
  gifts.forEach((element) => {
    const stars = '*'.repeat(element.length + 2);
    const gift = `*${element}*`;
    newArray.push(`${stars}\n${gift}\n${stars}`);
  });
  return newArray;
} */

function wrapping(gifts) {
  return gifts.map((gift) => {
    const stars = '*'.repeat(gift.length + 2);
    return `${stars}\n${'*' + gift + '*'}\n${stars}`;
  });
}

const wrapped = wrapping(gifts);
console.log(wrapped);
console.log(wrapped[0]);

//reto 2 del #AdventJS 2022

function countHours(year, holidays) {
  return (
    holidays
      .map((holiday) => new Date(`${holiday}/${year}`).getDay())
      .filter((item) => item !== 0 && item !== 6).length * 2
  );
}

console.log(
  'Horas extras a ralizar en el año',
  countHours(2022, ['01/06', '04/01', '12/25'])
);

//reto 3 del #AdventJS 2022

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher33333', 'dancer'];
function distributeGifts(packOfGifts, reindeers) {
  const weightGifts = packOfGifts
    .map((gift) => gift.length)
    .reduce((a, b) => a + b);
  const weightReindeers = reindeers
    .map((reindeer) => reindeer.length * 2)
    .reduce((a, b) => a + b);

  return ~~(weightReindeers / weightGifts);
}
console.log(distributeGifts(packOfGifts, reindeers));

//Reto #4 del #AdventJS 2022
function fitsInOneBox(boxes) {
  let sortBoxes = boxes.sort((a, b) => {
    if (a.l > b.l && a.w > b.w && a.h > b.h) {
      return 1;
    }
    if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }
    return 0;
  });
  return sortBoxes.every((box, index) => {
    if (index === 0) return true;
    const prev = boxes[index - 1];
    return box.l > prev.l && box.w > prev.w && box.h > prev.h;
  });
}

const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

console.log('priemro', fitsInOneBox(boxes1));
console.log('segundo', fitsInOneBox(boxes2));

//Reto #5 del #AdventJS 2022

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let giftsRepartidos = [];
  for (let m = 1; m < Math.pow(2, giftsCities.length); m++) {
    // El número de combinaciones es 2^n
    let comb = []; // La combinación de números
    for (
      let i = 0;
      i < giftsCities.length;
      i++ // Evaluamos cada elemento contra la máscara
    ) {
      if (Math.pow(2, i) & m) {
        // ¿La posición del elemento cumple con la máscara?

        comb.push(giftsCities[i]);
      }
      //console.log('Mascara ' + m, comb);
      if (comb.length <= maxCities) {
        let sum = comb.reduce((a, b) => a + b, 0); // La suma de la combinación
        if (sum <= maxGifts) giftsRepartidos.push(sum);
      }
    }
  }

  return giftsRepartidos.length === 0 ? 0 : Math.max(...giftsRepartidos);
}
/* const allGifts = giftsCities.reduce((a, b) => a + b);
if (giftsCities.every((element) => element > maxGifts)) {
  return 0;
} else if 
  (allGifts / maxGifts > maxCities || allGifts < maxGifts) {
    return Math.max(...giftsCities);
  } else {
    return maxGifts;
  }
 */

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100

console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)); //115
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)); //100

// CamelCase HeckerRank Palabras contiene el  string en camelCase
function camelcase(s) {
  return s.split(/[A-Z]/g).length;
}
console.log(camelcase('estoEsUnaPrueba'));
