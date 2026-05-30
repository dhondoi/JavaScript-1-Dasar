// object di bahasa pemrograman lain disebut dengan hash-table, map, dan dictionary.
const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
// akses object
console.log(user.name); // Output: Dicoding
console.log(user['last name']); // Output: Indonesia
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
delete user['age'];
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }