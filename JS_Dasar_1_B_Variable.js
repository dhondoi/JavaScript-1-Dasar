// membuat variable
const id = 123; // konstan
let username = "Dicoding"; // variable

console.log(id); // output: 123
console.log(username); //output: Dicoding

console.log("Sebelum diubah:", username); // output: Sebelum diubah: Dicoding

username = "dicodingacademy";

console.log("Setelah diubah:", username); // output: Setelah diubah: dicodingacademy

try {
  id = 567; // error
} catch (e) {
  console.log("const tidak bisa di assign ulang");
}
