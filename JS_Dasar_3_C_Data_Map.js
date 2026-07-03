// membuat map
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);
console.log(productMap);

// menyimpan nilai map
const map = new Map();
map.set("name", "aras");
console.log(map); // Map(1) { 'name' => 'aras' }
const mapNumberKey = new Map();
mapNumberKey.set(1, "number one");
console.log(mapNumberKey); // Map(1) { 1 => 'number one' }

// mengakses nilai map
console.log(map.get("name")); // Output: aras

// menghapus niai map
const delMap = new Map();
delMap.set("name", "aras");
delMap.set("last name", "opraza");
delMap.delete("last name");
console.log(delMap); // Map(1) { 'name' => 'aras' }

// instasiasi map
const myMap = new Map();
// menyimpan ke dalam map
console.log(myMap);
myMap.set("name", "doni");
console.log(myMap);
console.log(myMap.get("name"));
// inisuasi sevcara langsung
const myMap1 = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);
console.log(myMap1);
// has
console.log(myMap1.has(1));
// delete
console.log(myMap1.delete(1));
console.log(myMap1);

/*
      NON WEAK MAP
      */
let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);

/* output
      Map(1) { { name: 'Jonas' } => 1 }
      */

/*
      WEAK MAP
      */
// const { inspect } = require("util");

let visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

function countUser1(user) {
  let count = visitsCountWeakMap.get(user) || 0;
  visitsCountWeakMap.set(user, count + 1);
}

let jonas1 = { name: "Jonas1" };
countUser1(jonas1); // Menambahkan user "Jonas1"

jonas1 = null; // Data object "Jonas1" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountWeakMap);
  // console.log(inspect(visitsCountWeakMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/
