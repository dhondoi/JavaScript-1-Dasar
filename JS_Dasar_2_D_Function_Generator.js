// the lazy function
function* hitungSampaiKaya() {
  let i = 1;
  while (true) {
    // Loop tak terbatas aman di sini
    console.log("Yield:", i);
    yield i++;
  }
}

const generator = hitungSampaiKaya();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// Memori yang digunakan sangat kecil karena tidak menampung jutaan angka sekaligus.
