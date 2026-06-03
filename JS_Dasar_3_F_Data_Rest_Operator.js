// - rest operator digunakan untuk membuat fungsi yang memiliki banyak parameter
// - sangat cocok digunakan untuk yang satu tipe data yang sama

function myFunc(...name) {
  console.log("name:", name);
}
myFunc("Rafy", "Fikri", "Dimas"); // name: [ 'Rafy', 'Fikri', 'Dimas' ]

function myFunc1(number, ...name) {
  console.log("number", number);
  console.log("name", name);
}
myFunc1("one", "Arsy", "Aras"); // number one // name [ 'Arsy', 'Aras' ]

function myFunc2(...name) {
  console.log(name.length);
  console.log("name", name);
}
myFunc2("Adi", "Nur", "Arif"); // 3 // name [ 'Adi', 'Nur', 'Arif' ]

const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];
const [first, second, ...rest] = favorites;
console.log(first); // Nasi Goreng
console.log(second); // Mie Goreng
console.log(rest); // [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
// test hack
rest[0] = "hack";
console.log(rest); // [ 'hack', 'Tahu', 'Tempe' ]
console.log(favorites); // [ 'Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe' ]
// intinya ini take all one by one
console.log(...favorites); // [ 'Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe' ]

// const name = ["Rafy", "Fikri", "Dimas"];
// function myFuncHack(name) {
//   let nameNew = [...name];
//   nameNew[0] = "hack";
//   console.log("name:", nameNew);
// }
// myFuncHack(name); // name: [ 'hack', 'Fikri', 'Dimas' ]
// myFuncHack(...name); // name: [ 'hack', 'a', 'f', 'y' ]
// console.log(name); // [ 'Rafy', 'Fikri', 'Dimas' ]

// const nameTest = ["Rafy", "Fikri", "Dimas"];
// function testRest1(...nameTest) {
//   console.log("-----Test Case 1----");
//   console.log(nameTest);
//   nameTest[0] = "hack";
//   console.log(nameTest);
// }
// testRest1(nameTest);
// console.log(nameTest);
