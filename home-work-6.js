// 1

// Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”

const hello1 = function() {
    return "Привіт, JavaScript";
}
// console.log(hello1());

// або

// const hello1 = function(param1) {
//     return param1;
// }
// console.log(hello1("Привіт, JavaScript"));


// 2

const hello2 = function(name) {
    return `Привіт, ${name}`;
}
console.log(hello2('Василь'));

// 3 

const mull = function (n, m) {
    console.log(n * m);
    console.log(n + m);
    console.log(n - m);
}
mull(10, 2);

// 4

const myNewArrowFunction = function (...args) {
    console.log(args);
}
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// 5

const myAverageScore = function (array) {
    let result = 0;
    for (const number of array) {
        result = (result + number) / array.length;
    }
    if (result > 91 && result < 100) {
        console.log("A");
    } else if(result > 81 && result < 90){
        console.log("B");
    } else if(result > 71 && result < 80){
        console.log("C");
    } else if(result > 0 && result < 70){
        console.log("D");
    }
}
console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));