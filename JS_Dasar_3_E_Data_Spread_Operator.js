// spread di object
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }
// menyalin
const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }

// spread d array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']
// menyalin
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];
const [...copy2] = copy
console.log(copy); // Output: ['apple', 'banana', 'cherry']
copy[0] = "hack";
console.log(copy); // Output: ['hack', 'banana', 'cherry']
console.log(copy2); // Output: ['apple', 'banana', 'cherry']
copy2[1] = "hack";
console.log(copy2); // Output: ['apple', 'hack', 'cherry']