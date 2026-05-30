function myFunc(...name) {
  console.log("name:", name);
}
myFunc("Rafy", "Fikri", "Dimas");

function myFunc1(number, ...name) {
  console.log("number", number);
  console.log("name", name);
}
myFunc1("one", "Arsy", "Aras");

function myFunc2(...name) {
  console.log(name.length);
  console.log("name", name);
}
myFunc2("Adi", "Nur", "Arif");

const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];
const [first, second, ...rest] = favorites;
console.log(first);
console.log(second);
console.log(rest);
/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */
