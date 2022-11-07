// 1

const Arr1 = [1, 5, '4', 'hello'];

const Arr2 = [true, 2, {}, ['a'], 222];

const arrSum = Ar1[2] + Ar2[2];

consol.log(Arr1[2], Arr2[2]);

// 2

const arr1 = [1, 5, "4", "hello"];

console.log(arr1);

arr1.push(22);

console.log(22);

// 3

for (const Arr of Arr2) {
   console.log(typeof Arr);
}

// 4

const message = "Welcome to Ukraine!";

const arrMessage = message.split(' ');

console.table(arrMessage);

console.log(arrMessage.indexOf('l'));

const messageStr = arrMessage.join();

console.log(messageStr);

// 5

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles.splice(1, 1, 'Класика');

styles.shift(0);

console.log(0);

styles.unshift('Реп', 'Реггі');

console.log(styles);

// 6

const country = prompt ('Введи назву країни');

switch (country) {
    case 'Китай':
        console.log(`Доставка в ${country} буде коштувати 100 кредитів`);
        break;
    
    case 'Чилі':
        console.log(`Доставка в ${country} буде коштувати 250 кредитів`);
        break;

    case 'Австралія':
        console.log(`Доставка в ${country} буде коштувати 170 кредитів`);
        break;
    
    case 'Індія':
        console.log(`Доставка в ${country} буде коштувати 80 кредитів`);
        break;

    case 'Ямайка':
        console.log(`Доставка в ${country} буде коштувати 120 кредитів`);
        break;
    default:
        console.log('У вашій країні доставка недоступна');
}