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
const arrReverse = ["Android", "Data Science", "Web"];
arrReverse.reverse();
console.log(arrReverse); // Output: [ 'Web', 'Data Science', 'Android' ]
// Sort adalah method yang digunakan untuk mengurutkan nilai array.
const arrSort = ["Web", "Android", "Data Science"];
arrSort.sort();
console.log(arrSort); // Output: [ 'Android', 'Data Science', 'Web' ]

let arr = ["Cokelat", 42.5, 22, true, "Programming"];
//menggunakan for(int;cond;incre/decre)
for (let index = 0; index < arr.length; index++) {
  console.log("for ke - " + index + " = " + arr[index]);
}
//menggunakan method array join() / join(String)
console.log(arr.join());
console.log("arr.join('-') = " + arr.join("-"));
//menggunakan method array push(nilaibaru)
arr.push(11);
console.log("arr.push(11) = " + arr);
//menggunakan method array pop()
arr.pop();
console.log("arr.pop() = " + arr);
//menggunakan method array unshift(nilaibaru);
arr.unshift(0);
console.log("arr.unshift(0) = " + arr);
//menggunakan method array shift()
arr.shift();
console.log("arr.shift() = " + arr);
//menggunakan method array splice(indexawal,hapusberapa)
arr.splice(1, 2);
console.log("arr.splice(1,2) = " + arr);
//menggunakan method array slice(indexawal,indexakhir)
console.log("arr.slice(1,3) = " + arr.slice(1, 3));
//menggunakan method array forEach(function(e){})
arr.forEach((e) => {
  console.log("arr.forEach(function(e){}) = " + e);
});
//menggunakan method array map()
var arr2 = arr.map((e) => {
  return e;
});
console.log("arr.map(function(e){return e;}) = " + arr2.join());
//menggunakan method array sort() / sort((a, b) => { return a - b; })
arr = [5, 4, 3, 2, 1];
arr.sort((a, b) => {
  return a - b;
});
console.log("arr.sort() = " + arr.join());
//menggunakan method array find((e)=>{return e == 5;})
arr2 = arr.find((e) => {
  return e == 5;
});
console.log("arr.find((e)=>{return e == 5;}) = " + arr2);
//menggunakan method array filter((e)=>{return e == 5;})
arr2 = arr.filter((e) => {
  return e < 5;
});
console.log("arr.filter((e)=>{return e < 5;}) = " + arr2.join());

// destructuring array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
// hanya mengambil index tertentu
const [, , thirdFood1] = favorites;
console.log(thirdFood1);
// destructuring assignment
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood, herFood] = favorites;
console.log(myFood);
console.log(herFood);
