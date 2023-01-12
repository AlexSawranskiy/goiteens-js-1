const heroImageEl = document.querySelector(".hero__image")
// console.log(heroImageEl.alt = "This is cat"); 

// 07.12

const heroTitleEl = document.querySelector(".hero__title")
// console.log(heroTitleEl.textContent = 'Main title');
// console.log(heroTitleEl.getElementsByClassName.color = 'red');
// console.log(heroTitleEl.getElementsByClassName.backgroundColor = 'red');

const link = document.querySelector(".site-nav__link[href = '/portfolio']");
// console.log(link);



// const containerEl = document.querySelector("div");
// console.log(containerEl.lastElementChild);
// containerEl.lastElementChild

// 08.12

const titleEl = document.createElement('h1');

titleEl.classList.add('title');

titleEl.textContent = 'Заголовок';

titleEl.style.color = 'tomato';

console.log(titleEl);

// 

// Створюємо зображення
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg


const imgEl = document.createElement('img');

imgEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";

imgEl.alt = 'img';

imgEl.width = '50'

console.log(imgEl);

// 

const navItemEl = document.createElement('li')

navItemEl.classList.add('site-nav__item');

console.log(navItemEl);

// 

const linkEl = document.createElement('a');

linkEl.classList.add('nav-link');

console.log(linkEl);

// 

navItemEl.appendChild(linkEl);

const ulEl = document.querySelector(".site-nav");

// ulEl.appendChild(navItem);

// console.log(ulEl);

// 


// 13.12

// 1

/*
 * Створюємо і додаємо колекцію
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
  
//   const colorPickerContainerEl = document.querySelector('.js-color-picker');

//   const option = colorPickerOptions[0];
//   console.log(option);

//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   console.log(buttonEl);


  const buttons = colorPickerOptions.map(function (option){

  const buttonEl = document.createElement('button');

  buttonEl.type = 'button';

  buttonEl.textContent = option.label;

  buttonEl.style.backgroundColor = option.color;
 
  return buttonEl;
  })
//   console.log(buttonEl);

//   colorPickerOptions.append(...buttons)

  /*
   * Пишемо функцію для створення розмітки колорпікеру
   */
   const createBtnEl = function (options) {
    options.map(function(option){
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;
    return buttonEl
    })
    return
   }

const btns = createBtnEl(colorPickerOptions);

// colorPickerContainerEl.append(...btns);

// 2

const products = [
    {
      name: 'Товар-1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 2000,
      available: true,
      onSale: true,
    },
    {
      name: 'Товар-2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 3000,
      available: false,
      onSale: false,
    },
    {
      name: 'Товар-3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 1500,
      available: true,
      onSale: false,
    },
    {
      name: 'Товар-4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
      price: 2500,
      available: false,
      onSale: false,
    },
];

const createArticle = function ({name, description, price}) {

const articleEl = document.createElement('article');
articleEl.classList.add = 'product';

const productName = document.createElement('h2');
productName.classList.add = 'prouct__name';
productName.textContent = name;

const productDescrEl = document.createElement('p');
productDescrEl.classList.add = 'product__descr';
productDescrEl.textContent = description;

const productPridct = document.createElement('p');
productPridct.classList.add = 'product__pridct';
productPridct.textContent = `Ціна: ${price} кредитів;`;

articleEl.append(productName, productDescrEl, productPridct);

return articleEl;
}

const elements = products.map(createArticle);

console.log(elements);

const containerEl = document.querySelector('.js-products');

containerEl.append(...elements);





// 14.12 ПОДІЇ

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', (event)=>{
//     event.preventDefault();

//     console.log(event.currentTarget);
//     console.log('Submit');
// })

// 

// 2

// const input = document.querySelector('.js-input');

// const checkbox = document.querySelector('.js-license');

// const button = document.querySelector('.js-button');

// input.addEventListener('focus', onInputFocus);


// 15.12

// const input = document.querySelector('.js-input');

// const nameLabel = document.querySelector('js-button > span');

// const licenseCheckbox = document.querySelector('.js-license');

// const btn = document.querySelector('.js-button');

// input.addEventListener('input', onInputChange);

// licenseCheckbox.addEventListener('change', onLicenseChange);

// // 
// function onInputChange(event) {
//   console.dir(event.currentTarget.value);
//   nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   console.dir(event.currentTarget.checked);
//   console.log(btn.disabled);
//   btn.disabled = event.currentTarget.checked;
// }

// 

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeypress)

// clearBtn.addEventListener('click', onClearOutput)

// function onKeypress(event) {
//   // console.log(event);
//   // console.log('event.key: ', event.key);
//   console.log('event.code: ', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }


// 20.12

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click',);
refs.closeModalBtn.addEventListener('click',);
refs.backdrop.addEventListener('click',);


function onBtnClickOpen() {
  document.body.classList.add('show-modal');
}

function onBtnClickClose() {
  document.body.classList.remove('show-moda');
}

function onBackdropClose(event) {
  console.log(event.currentTarget);
  if (event.currentTarget === event.Target) {
    onBtnClickClose()
    document.body.style.backgroundColor = 'red';
  }
}

// 03.01

function Car (model, price, year, color){
  this.model = model;
  this.price = price;
  this.year = year;
  this.color = color;
}



// const carInstance = new Car();
const audi = new Car('A5', 40000, 2020, 'black');
console.log(audi);


const mazda = new Car('mazda-3', 35000, 2022, 'red');
console.log(mazda);








// 

function Client(name, age, date) {
  this.name = name;
  this.age = age;
  this.date = date;
}
Client.prototype.changeDate = function (newDate) {
  this.name = newDate;
}

const adam = new Client('Adam', 35, '07.11');
console.log(adam);
const alex = new Client('Alex', 41, '03.04');
console.log(alex);
console.log(Client.name);

// 

class Client {
  constructor(name, age, date){
    this.name = name;
    this.age = age;
    this._date = date;
  }
  get date(){
    this._date;
  }
  set date(newDate){
    this._date = newDate;
  }
}





































