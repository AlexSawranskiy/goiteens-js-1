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

let input;

let total = 0;

while(input !== null){
   input = Number(prompt('Введи число'));

   total += input;

   console.log(`Загальна сума чисел дорівнює ${total}`);
}

// const number = prompt('Enter number');

// if(number >= 55 && number <= 99){
//    console.log("Число потрапляє в діапазон");
// }else{
//    console.log("Число не потрапляє в діапазон");
// }
