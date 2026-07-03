// membuat set
const mySet = new Set([1, 2, 3]);
console.log(mySet);

// menyimpan nilai set
const set = new Set();
set.add(1);
set.add(2);
console.log(set);

// mengakses nilai set
const getSet = new Set();
getSet.add(1);
getSet.add(2);
for (const number of getSet) {
  console.log(number); // Output: 1, 2
}
// menggunakan foreach
getSet.forEach((value) => console.log(value)); // Output: 1, 2

// menghapus nilai set
const delSet = new Set();
delSet.add(1);
delSet.add(2);
delSet.delete(1);
console.log(delSet); // Set(1) { 2 }

// instasiasi Set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
// menambah data
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log(numberSet);
