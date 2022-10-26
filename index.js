// // const pricePertltem = 3500;
// // const orderedQuantity = 4;
// // const totalPrice =  pricePertltem * orderedQuantity;

// // Ціна 1кг м"яса 200грн. Напиши скрипт який просить користувача ввести кількість м"яса в замовлені в кг. 
// // Порахуй загальну вартість замовлення та виведи результат користувачу.

// let pricePerKilo = '200 грн';
// pricePerKilo = Number.parseInt(pricePerKilo);
// let orderedQuantity = prompt('Введіть ваше замовлення');
// orderedQuantity = Number.parseInt(orderedQuantity);
// const totalPrice = pricePerKilo * orderedQuantity;
// // alert(totalPrice);

// // Напиши скрипт який знайде довжину рядка "Hello, world! Javascript is awesome!". 
//     // Зробить всі літери великими. Знайде в рядку
//     // слово "javascript". Всі маніпуляції не повинні змінювати оригінальний рядок.

// const string = "Hello, world! Javascript is awesome!";
// const upString = string.toLocaleUpperCase();
// const lowString = string.toLocaleLowerCase();
// // console.log(lowString.includes("Javascript"));

// // 1. Створюємо змінні
// // 2. Перевіряємо кожне число на залишок від ділення
// // 3. Підсумовуємо результати

// // const min = 0;
// // const max = 10;
// // let result = 0;

// for(let i = min; i <= max; i += 1){
//  if(i % 2 !== 0){
//     console.log('Число, яке ми пропускаємо:');
//     continue;
// }
// result += i;
// //    if(i % 2 === 0){
// //     console.log(i);
// //     result += i;
// //    }
// }
// // console.log(result);

// // const min = 1;
// // const max = 5;

// // for (let i = min; i <= max; i++) {
// //     console.log(i);
// // }
// // let i = 1;
// // while(i <= max){
// //     i += 1;
// //    console.log(i);
// // }

// // const name = 'Генератор захисного поля';
// // let price = 1000;
// // console.log(`Обрано $(name), ціна за штуку $(price)`);

// // 2.

// // const total = 100;
// // const ordered = 50;

// // if(total < ordered){
// //     console.log("На складі недостатньо товарів");
// // } else {
// //     console.log("З вами зв'яжеться менеджер");
// // }

// // 3

// let input;

// let total = 0;

// while(input !== null){
//    input = Number(prompt('Введи число'));

//    total += input;

//    console.log(`Загальна сума чисел дорівнює ${total}`);
// }

// const number = prompt('Enter number');

// if(number >= 55 && number <= 99){
//    console.log("Число потрапляє в діапазон");
// }else{
//    console.log("Число не потрапляє в діапазон");
// }




// 1 

// 1. Створити масиви і змінні
// const arrSum = ar1[2] + ar2[2];
// 2. consol.log(arr1[2], arr2[2])

// 2

// 1. const Arr1 = [1, 5, "4", "hello"];
// console.log(Arr1)
// Arr1.push(22)
// console.log(22)

// 3

// for (const Arr of Arr2) {
//    console.log(typeof Arr);
//  }

// 4

// 1 const message = "Welcome to Ukraine!";
// 2 const arrMessage = message.split(' ');
// 3 console.table(arrMessage);
// 4 console.log(arrMessage.indexOf('l'))
// 5 const messageStr = arrMessage.join()
// 6 console.log(messageStr)


// 6 

// const country = prompt ('Введи назву країни');

// switch (country) {
//    case 'Китай':
//       console.log(`Доставка в ${country} буде коштувати 100 кредитів`);
//       break;

//    default:
//       break;
// }











// 25.10 ПРАКТИКА

// 1.

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const price  of cart) {
//    total += price;
// }

// console.log(total);

// 2
// Нипиши скрипт який порахує суму всіх парних чисел в масиві.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for (const num of numbers) {
//    if(num % 2 === 0){
//       console.log(number);
//       total += number;
//    }
// }

// console.log(total);


// 3
/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const loginToFind = 'aj4xth3m4n';

for(let i = 0; i < logins.length; i++){
    if(logins[i] === loginToFind){
      console.log(`Користувач ${loginToFind} знайдено.`);
    } else{
      console.log(`Користувач не ${loginToFind} знайдено.`);
    }
}

// або

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// let message = `Користувач не ${loginToFind} знайдено.`

// for(let i = 0; i < logins.length; i++){
//     if(logins[i] === loginToFind){
//       message = `Користувач ${loginToFind} знайдено.`
//     } 
// }
// console.log(message);

// або

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// for (const login of logins) {
//    if(login === loginToFind){
//       message = `Користувач ${loginToFind} знайдено.`;
//    }
// }
// console.log(message);

// II

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// if(logins.includes(loginToFind)){
//    message = `Користувач ${loginToFind} знайдено`;
// }
// console.log(message);

// III

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

const message = logins.includes(loginToFind) 
? `Користувач ${loginToFind} знайдено.` 
: `Користувач ${loginToFind} не знайдено.`;

// 4
/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

const array1 = [5, 10, 15, 20];

const array2 = [10, 20, 30];

const array3 = array1.concat(array2);

let total = 0;

console.log(array3);

for(const num of array3){
   total += num;
}
console.log(total);