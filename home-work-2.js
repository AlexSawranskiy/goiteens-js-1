// 1 завдання
// Алгоритм: Створити змінні відповідно умови задачі та використати метод приведення до цілого числа

const k1 = Number.parseInt("5px");

const k2 = Number.parseInt("12djd334");

const k3 = Number.parseInt("12.45asdwe12");

const k4 = Number.parseInt("qwqweeewq");

// 2 завдання
// Алгоритм: Так само створюємо змінні, але застосуємо вже інший метод для приведення до дробового числа

const k5 = Number.parseFloat("5px");

const k6 = Number.parseFloat("12djd334");

const k7 = Number.parseFloat("12.45asdwe12");

const k8 = Number.parseFloat("qwqweeewq");

// 3 завдання
// Алгоритм: Виведемо в консоль найбільше й найменше значення за допомогою Math.min та Math.max

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

// 4 завдання
// Алгоритм: За допомогою методу Math.random згенеруємо випадкове число від 3 до 19 включно, але для початку створимо змінну "random"

const random = Math.random() * (19 - 3) + 3;

console.log(random);

// 5 завдання
// Алгоритм: Створимо змінну let, та використовуючи typeof перевіримо тип змінної result

let result;
result = 5 + 5 + '5';

console.log(result);

console.log(typeof result);

// 6 завдання
// Алгоритм: Створимо змінну email

const email = 'alexsawranskiy989@gmail.com';
// Застосуємо метод includes

console.log(email.includes('@'));

// 7 завдання
// Алгоритм: Створимо змінну fullname та за допомогою шаблонних рядків виведемо в консоль надпис

const fullname = 'Victor';

console.log(`My name is ${fullname}`);

// 8 завдання
// Алгоритм: Робимо дві змінні та застосовуємо alert і шаблонні рядки

const userName = "Олександро"

const payment = 300;

console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
