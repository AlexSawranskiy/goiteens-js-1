// 22.12

// 1
// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. 
// Результатом 
// її роботи 
// буде вік 
// перевединий на людський 
// (1 рік собаки це 7 років в людини)


function calculateDogAge(ageDog) {
    const humanAge = ageDog * 7;
    return humanAge;
}
console.log(calculateDogAge(3));

// 2
// Відсортувати вчених по алфавіту

const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];

const newArr = arr;

newArr.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name){
        return -1;
    }
    else if(a.surname > b.surname){
        return 1;
    } else if(a.surname < b.surname){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(newArr);

arr.sort((a, b) => a.name.localeCompare(b.name) && a.surname.localeCompare(b.surname));


// ДЗ 10 ЗАДАЧА 4

const decrementBtn = document.querySelector('[data-action = decrement]');

const incrementBtn = document.querySelector('[data-action = increment]');

const value = document.querySelector('#value');
decrementBtn.addEventListener('click',decrement)
incrementBtn.addEventListener('click',increment)

let counterValue = 0;

function increment() {
    counterValue += 1;
    value.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}

// 3 задача 10 ДЗ

const counterContainer = document.querySelector('#counter');

const link = document.createElement('a');
link.classList.add('link');
link.textContent = 'Посилання 1'

counterContainer.appendChild(link);

counterContainer.insertAdjacentHTML('beforeend', '<a class = "box">${images.url}</a>');





