// membuat map
const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250]
]);
console.log(productMap);

// menyimpan nilai map
const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }
const mapNumberKey = new Map();
mapNumberKey.set(1, 'number one');
console.log(mapNumberKey); // Map(1) { 1 => 'number one' }

// mengakses nilai map
console.log(map.get('name')); // Output: aras

// menghapus niai map
const delMap = new Map();
delMap.set('name', 'aras');
delMap.set('last name', 'opraza');
delMap.delete('last name');
console.log(delMap); // Map(1) { 'name' => 'aras' }