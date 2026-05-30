// String
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log(text);

// Number
const result = 50 / 0;
console.log(result); // output: Infinity
const result1 = Number('Dicoding');
console.log(result1); // output: NaN

// Boolean
const completed = true;
const passed = false;
console.log(completed, passed); // output: true false
const isGreater = 5 > 2;
console.log(isGreater); // output: true (5 lebih besar dari 2)

// Nilai Kosong
let message;
console.log(message); // unefined
message = null;
console.log(message); // null
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };
console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}