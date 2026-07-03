let age = 25;
// Unary operator
console.log(typeof age); // output: number

// Binary operator
console.log(5 + 4);
console.log(10 / 2);
console.log((age = 30));

// Ternary operator (conditional operator)
const message = age < 18 ? "You are too young!" : "Welcome onboard!";
console.log(message);

// Digunakan untuk menginisiasi nilai
const name = "Dicoding";
let location = "Bandung";
// Digunakan untuk mengubah nilai
location = "Jakarta";

// Aritmetika
6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 * (10 + 2); // mengembalikan 24

// Perbandingan
const a = 10;
const b = 12;
console.log(a < b); // output: true
console.log(a > b); // output: false

// Operator Logika
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(5 === 5 && 3 < 5); // true
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 === 5 || 3 > 5); // true
// NOT
console.log(!true); // false
console.log(!false); // true

// String Operator
const first = "bekerja";
const second = "sama";
const merged = first + second;
console.log(merged); // Output: bekerjasama

// nullish operator
let param;
const data = param ?? "data";
console.log(data);

// Optional chaining
const person = {};
console.log(person?.address?.country);

// logika non boolean
//truthly
console.log("hello" || ""); // hello
console.log("" || []); // []
console.log("0" || "NOL"); // 0
console.log(0 || "NOL"); // NOL
console.log(null || "NULL"); // NULL
console.log(undefined || "UNDEFINED"); // UNDEFINED
// falsy
console.log("hello" && ""); // ""
console.log("" && []); // ""
console.log("0" && "NOL"); // NOL
console.log(0 && "NOL"); // 0
console.log(null && "NULL"); // null
console.log(undefined && "UNDEFINED"); // undefined
