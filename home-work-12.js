// 1

function Account({login, name}) {
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function (params) {
    console.log(this.login);
    console.log(this.email);
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com