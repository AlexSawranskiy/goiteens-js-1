// 1 завдання

const number = prompt('Enter number');

if(number >= 55 && number <= 99){
   console.log("Число потрапляє в діапазон");
}else{
   console.log("Число не потрапляє в діапазон");
}

// 2 завдання

const age = 55;

if (age > 0 && age < 16){
    console.log('Діти');
} else if(age > 17 && age < 60){
    console.log('Дорослі');
} else if(age > 61 && age < 100){
    console.log('Песіонери');
}

// 3 завдання

const name = 'Sasha';

const secondName = 'Sawranskiy';

if(name.length > 4 && secondName.lenght > 5){
    console.log(15);
} else{
    console.log('УПС');
}

// 4 завдання

const num = Math.random() * (5-1) + 1;

if(num <= 1 && num <= 5){
    console.log('Число вірне');
} else if (num <= 1.0 && num >=5.0){
    console.log('Число не вірне');
} else{
    console.log('Це не число');
}

// 5 завдання

const lang = prompt ('Вкажіть мову');

if(lang === 'ua'){
    console.log('Січень');
} else if (lang === 'en'){
    console.log('January');
} else if (lang === 'fr'){
    console.log('Janvier');
} else if (lang === 'ru'){
    console.log('Январь');
} else{
    console.log('ERROR');
}