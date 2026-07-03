// object di bahasa pemrograman lain disebut dengan hash-table, map, dan dictionary.
const user = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};
// akses object
console.log(user.name); // Output: Dicoding
console.log(user["last name"]); // Output: Indonesia
console.log(user);
// ubah nilai di properti object
user.name = "coding";
console.log(user.name); // Output: coding
console.log(user);

// destructuring object
// object destructuring sangat memudahkan hidup para programmer JavaScript
// karena kita tidak perlu lagi melakukan hal yang rumit hanya untuk mendapatkan
// nilai properti dari object.
let { name, age } = user;
console.log(name, age); // Output: Dicoding Indonesia
//test manipulate
name = "hack";
console.log(name);
console.log(user);

// menghapus properti di object
delete user.age;
delete user["age"];
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

// object method
console.log("-----Object Method-----");
const person = {
  firstName: "Budi",
  lastName: "Aja",
  // baiknya gunakan anonimous function, karena tidak bisa akses property
  // dari object tersebut
  sayHello: function (name) {
    console.log(`Hello ${name} My Name is ${this.firstName}`);
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newFullname) {
    const split = newFullname.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};
console.log(person);
person.sayHello("Joko");
console.log(person.fullName);
person.fullName = "Joko Widodo";
console.log(person.fullName);
// tambah method
console.log("-----Menambah Method ke Object-----");
person.greeting = () => {
  console.log(`Hello My Name is ${person.firstName}`);
};
person.greeting();

// destructuring object
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};
const { firstName, lastName } = profile;
console.log(firstName, lastName);
const { age } = profile;
console.log(age);

/*
 *   destructuring assigntment
 */
const profile1 = {
  firstName1: "Dhon",
  lastName: "Doi",
  age1: 29,
};
let firstName1 = "Dimas";
let age1 = 20;
// menginisialisasi nilai baru melalui destructuring object
({ firstName1, age1 } = profile1);
console.log(firstName1);
console.log(age1);

const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};
// pemanggilan nama object
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
//  assignment value
user.firstName = "Glossy red";
user["home world"] = "GBJ";
console.log(user);
// menghapus property
delete user["home world"];
console.log(user);
