// functon expression
// Perbedaan lainnya dari function expression ialah tidak memiliki 
// hoisting padanya sehingga kita tidak dapat memanggil atau menjalankan 
// function ini sebelum dideklarasikan.
// convertCelsiusToFahrenheit(90); // hoisting (error)
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};
const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
/* Output:
Hasil konversi: 194
*/


// first class citizen
// Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan 
// dalam variabel, nilai argumen function lain, mengembalikan nilai 
// function dari suatu function, dsb.
function multiply(a, b) {
  return a * b;
}
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}
const result = calculate(multiply, 2, 4);
console.log(result);
/* Output:
8
*/
// mengembalikan nilai function dari suatu function
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double);
console.log(triple);
console.log(double(10));
console.log(triple(11));
/* Output:
20
33
*/