// І частина

// 1 завдання

const str = 'Привіт';
console.log(typeof str);

const num = 123;
console.log(typeof num);

const flag = true;
console.log(typeof true);

const txt = 'true';
console.log(typeof txt);

// 2 завдання 

const phone = 8888;
const text = 'Hello';
const number = 989;
const name = 'Sasha';

let c;
let d;
let e;
let f;
let g;

// II частина

// 1 завдання

const user = prompt('Введіть число');
console.log(user);

// 2 завдання 

const myAge = 16;
const friendAge = 16;
alert(myAge + friendAge);


// 3 завдання

const a = 10;
const b = 20;
console.log(a * b);

// 4 завдання

let a1 = 5+3;
alert(a1);

let a2 = 5-3;
alert(a2);

let a3 = 5*3;
alert(a3);

let a4 = 5/3;
alert(a4);


// 5 завдання

let a5 = 5 % 3;
alert(a5);

let a6 = 3 % 5;
alert(a6);

let a7 = 5 + '3';
alert(a7);

let a8 = '5' - 3;
alert(a8);

let a9 = 75 + 'кг';
alert(a9);

// 6 завдання

// Дано
// height = 23cм;
// width = 10см;
// s = ?;

// Алгоритм: 
// 1. Створюємо дві змінних: heigth та width;

const heigth = 23;
const width = 10;
// Створюємо змінну s та заносимо туди результат обчислення площі прямокутника;

const s = heigth * width;

// Задача розв'язана;

// 7 завдання 

// Дано 
// heigthC = 10м;
// dC = 4 м;
// v = ?;

// Алгоритм: Задача схожа на попередню, тому виконуємо так само:

const heigthC = 10;
const dC = 4;
// Результат обчислення записуємо у змінну v;

const v = heigthC * dC;

// Задача розв'язана

// 8 завдання

// Дано
// n = 3;
// m = 4;
// k = ?;

// Алгоритм: Для розв'язку цього завдання робимо три змінні, в змінну n і m вносимо значення з умови,
// та використовуючи теорему Піфагора знаходимо значення k скористаємось властивість Math_Pow. Отже, робимо;

const n = 3;
const m = 4;
const k = Math.sqrt((Math.pow(3, 2) + Math.pow(4, 2)));
console.log(k);