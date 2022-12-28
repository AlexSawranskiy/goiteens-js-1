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

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// for(let i = 0; i < logins.length; i++){
//     if(logins[i] === loginToFind){
//       console.log(`Користувач ${loginToFind} знайдено.`);
//     } else{
//       console.log(`Користувач не ${loginToFind} знайдено.`);
//     }
// }

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

// const message = logins.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдено.` 
// : `Користувач ${loginToFind} не знайдено.`;

// 4
/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

// const array1 = [5, 10, 15, 20];

// const array2 = [10, 20, 30];

// const array3 = array1.concat(array2);

// let total = 0;

// console.log(array3);

// for(const num of array3){
//    total += num;
// }
// console.log(total);








// 27.10 ПРАКТИКА

// 1

/*
 * Напиши скрипт пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//   smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// 2

/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 * - Спочатку через for
 * - Потім через join()
 */
// I

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// console.log(friends.join(','));

// // II

// for (const friend of friends) {
//   string += friend + ','
// }

// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'


// 3

/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const str = 'JavaScript';

// let reversStr = '';

// const arrStr = str.split('');

// console.log(arrStr);

// for (const letter of arrStr) {
//    if(letter === letter.toLocaleLowerCase()){
//     reversStr += letter.toLocalUpperCase();
//    } else{
//      reversStr += letter.toLocaleLowerCase();
//    }
// }

// console.log(reversStr);

// 4

/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */

// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizeTitle = title.toLocaleLowerCase();
// console.log(normalizeTitle);

// const arrayTitle = title.split(' ');
// console.log(arrayTitle);

// const slugTitle = arrayTitle.join('-');
// console.log(slugTitle);

// Простіший варіант

// const slugTitle = title.toLocaleLowerCase().split(' ').join(' ');
// console.log(slugTitle);

// 5

/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

// const cardToRemove = 'Карточка-3';

// const cardToUpdate = 'Карточка-4';

// const cardToInsert = 'Карточка-6';


// /*
//  * Видалення (по індексу), метод indexOf()
//  */
// const index = cards.indexOf(cardToRemove);

// console.log(cards.splice(index, 1));

// console.log(cards);

/*
 * Додавання (по індексу)
 */
// cards.splice(cards.length, 0, cardToInsert);

// console.log(cards);
// /*
//  * Оновлення (по індексу)
//  */
// cards.splice(0, 1, cardToUpdate);

// console.log(cards);
















// 31.10 МЕНТОРСЬКА ГОДИНА

// const message = "[SPAM] How to earn fast money?";

// console.log(message.includes('spam'));

// const messageNormalize = message.toLocaleLowerCase();

// console.log(messageNormalize.includes('spam'));

// 2

// const message = "Curabitur ligula sapien";

// const maxlenghts = 16;

// const elementToRemove = massage.length - maxlengts;

// if (massage.length <= maxlengts) {
//   console.log(message);
// } else {
//   const newMassage = massage.split('')
//   console.log(newMassage);
  
//   const cutMassege = newMassafe.splice(maxlengts, elementToRemove, '...');
//   console.log(cutMassege);

//   const finalMassege = cutMassege.join();

//   console.log(finalMassege);
// }





// 01.11 ФУНКЦІЇ

// Function expression
const fn = function (num1, num2) {
  return 555;
  console.log(num1);

  console.log(num2);
  const sum = num1 + num2;
  // тіло функціїї
  console.log('Код всередині тіла функції', sum);
}

// fn(10, 20);
// fn(5, 8);
// fn(15, 50);

// console.log('Результат функції: ', fn(10,20));

// Function declaration
// getTotalPrice();
// function getTotalPrice() {
//   console.log('Код всередині тіла функції getTotalPrice');
// }




/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін і повертає їх сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
}

// console.log('Total: ', total);

const calculateTotalPrice = function (items){
  // console.log(items);
  let total = 0;

for (const item of items) {
  total += item;
}
return total;
}
  
  // console.log(calculateTotalPrice([1, 2, 3])); // 6
  // console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
  // console.log(calculateTotalPrice([100, 200, 300])); // 600


  // 2 

//   *
//  * Напиши функцію logItems(items) для перебора і логування массива
//  */

 const logItems = function (items) {
  for (const item of items) {
    // console.log(item);
  }
 }
  
  logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
  logItems([1, 2, 3, 4, 5]);
  logItems(['клавиатура', 'наушники', 'часы']);

// 3

/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдено.` 
// : `Користувач ${loginToFind} не знайдено.`;
// console.log(message);

const findLogin = function(loginsArray, loginToFind){
  return loginsArray.includes(loginToFind) 
  ? `Користувач ${loginToFind} знайдено.`
  : `Користувач ${loginToFind} не знайдено.`;
}

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));






// 08.11

// 1

const changeCase = function (string) {
  const arrStr = string.split('');

  let reversStr = '';

  for (const letter of arrStr) {
    if(letter === letter.toLocaleLowerCase()){
      reversStr = letter.toLocalUpperCase();
    } else{
      reversStr += letter.toLocaleLowerCase();
    }
  }
  // console.log(reversStr);
}
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// 2

/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */

const title = 'Top 10 benefits of React framework';
const slugTitle = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slugTitle);
  
// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));


// 10.11

// const playlist = {
//   name: 'Плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
  
//   changeName(newName) {
//   // console.log("this: ", this);
//     this.name = newName;
//   },
// addTrack(newTrack){
//   this.tracks.push(newtruck)
// }
  

//  };
// playlist.addTrack('Трек-4');

// console.log(playlist);












// 14.11 МЕНТОРСЬКА ГОДИНА

// 1. Створи пустий об'єкт user. Додай в об'єкт властивість userName зі своїм іменем. Додай в об'єкт властивість age зі своїм віком. Додай в об'єкт метод showUserName, який виводить твоє ім'я. Додай в об'єкт метод updateAge, який додає під час виклику до твоєго віку

const user = {

}

user.userName = 'Sasha';

// console.log(user);

user.age = 17;

// console.log(user);

// 3. Створіть об'єкт calculator з трьома методами:

// read(a, b) - запитує у користувача два числових значення і зберігає їх як властивості об'єкта.
// sum() - повертає суму збережених значень.
// mult() - повертає добуток збережених значень.

const calculator = {
  read(a,b){
    this.num1 = a;
    this.num2 = b;
    console.log(calculator);
  },
     sum(){
      return this.num1 + this.num2;
     }
}
// calculator(3, 5);
// console.log(calculator.sum);



// 20.11

// I РОЗПОРОШЕННЯ

const numbers = [1, 6, 8, 10, 54, 3].concat([5,4], [63, 11]);
const arr1 = [5,4];
const arr2 = [63,11];
// Синтаксис написання SPREAD;
const numbers1 = [1, 6, 8, 10, 54, 3, ...[5,4], ...[63, 11]];

// console.log(numbers);

// console.log(numbers1);

// 

// Пошук найнижчої або найвищої температури (числа)

const temps = [18, 14, 12, 21, 17, 29, 24];

const lowestTemp = Math.min(...temps)
const hightTemp = Math.max(...temps)

// console.log(lowestTemp);
// console.log(hightTemp);

// 

// const a = [
//   { x: 1}, 
//   { y: 2}, 
//   { z: 3}
// ];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// 

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];
  
// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// 

// Розпорошення об'єкта методом .assign
const a = { x: 1, y: 2};
const b = { x: 0, z: 3};

const c = Object.assign({}, a , b);

// console.log(c);

const defaultSettings = {
  theme: 'light',
  showNofications: true,
  hideSidebar: false,
};

const userSettings = {
  showNofications: false,
  hideSidebar: true,
}

const finalSettings = {
  ...defaultSettings,
  ...userSettings
}

// console.log(finalSettings);

// 

// II ДЕСТРУКТУРИЗАЦІЯ

const playlist = {
  name: 'Мій супер плей - лист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  tracCount: 3,
};

console.log(
  playlist.name,
  playlist.rating,
  playlist.tracks,
  playlist.tracCount
);

const { name, rating, tracks, trackCount, author = 'gfgdfsd'} = playlist;

console.log(
  name,
  rating,
  tracks,
  trackCount,
  author
);


const friends = [
  { name: 'Mango', online: true },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);
/*
 * Отримуємо імена тільки тих друзів які онлайн
 */
const getOnlineFriends = function (allFriends) {
   const friendOnline = [];
   for (const friend of allFriends) {
     if(friend.online){
      friendOnline.push(friend.name)
     }
   }
   return friendOnline;
}
console.log(getOnlineFriends(friends));









