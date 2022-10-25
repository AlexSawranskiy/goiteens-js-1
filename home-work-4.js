// 1 завдання

let num = 1;

while (num <= 10){
    console.log(num);
    num += 1;
}

// 2 завдання

for (let i = 0; i <= 10; i+=1) {
    if (i % 2 !== 0){
        console.log('Число не парне');
    } else {
        console.log('Число парне');
    }
}

// 3 завдання

let number = 20;

while (number >= 28) {
    console.log(number);
    number += 1;
}

// 4 завдання

let name = prompt (`Напишіть ім'я вашого улюбленого героя`);

while (name.lengt < 6) {
    if(name.lenght < 6){
        console.log(`${name} - виводити`);
    } else{
        console.log('Завершити');
            break;
    }
}