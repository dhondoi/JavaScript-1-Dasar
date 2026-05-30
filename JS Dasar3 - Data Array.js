// membuat array
const users = new Array();
const numbers = new Array(5);
const foo = Array.from("foo");
// Membuat array dengan literals lebih disarankan karena lebih sederhana dan mudah untuk dibaca.
const array = [];
const fruits = ["apple", "banana", "cherry", "", "grape"];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']
console.log(users); // Output: []
console.log(numbers); // Output: [ <5 empty items> ]
console.log(foo); // Output: ['f', 'o', 'o']

// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya
const users1 = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(users1);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]
// test manpulate
customer[0] = "hack";
console.log(customer); // Output: ["hack", "Jane", "Jack", "Jill"]
console.log(users1); // Output: ["John", "Jane", "Jack", "Jill"]

// mengakses array
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

// manpulasi nilai array
let myArray1 = [1, 2, 3, 4, 5];
// Menggunakan indexing
myArray1[1] = 10;
console.log(myArray1); // Output: [1, 10, 3, 4, 5]
// menggunakan push
let myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
console.log(myArray2); // Output: [1, 2, 3, 4, 5, 6]

// menghapus nilai array
let myArray3 = ["Android", "Data Science", "Web"];
delete myArray3[1];
console.log(myArray3); // Output: ['Android', <1 empty item>, 'Web']
//menggunakan splice
let myArray4 = ["Android", "Data Science", "Web"];
myArray4.splice(1, 1); // (a,b) a : indeks ke berapa, b : jumlah yang mau dihapus
console.log(myArray4); // Output: ['Android', 'Web']
// menggunakan shift dan pop (depan dan belakang)
let myArray5 = ["Android", "Data Science", "Web"];
myArray5.shift(); // ['Data Science', 'Web']
myArray5.pop(); // ['Data Science']
console.log(myArray5); // Output: ['Data Science']

// array destructuring
const introduction = ["Hello", "Arsy"];
let [greeting, name] = introduction;
// greeting = "hack";
// console.log(introduction); // Output: [ 'Hello', 'Arsy' ]
console.log(greeting); // Output: Hello

// array method
// Reverse adalah method yang digunakan untuk membalikkan nilai array.
const arrReverse = ['Android', 'Data Science', 'Web'];
arrReverse.reverse();
console.log(arrReverse); // Output: [ 'Web', 'Data Science', 'Android' ]
// Sort adalah method yang digunakan untuk mengurutkan nilai array.
const arrSort = ['Web', 'Android', 'Data Science'];
arrSort.sort();
console.log(arrSort); // Output: [ 'Android', 'Data Science', 'Web' ]