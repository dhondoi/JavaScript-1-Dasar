// parameter function didefinisikan dalam parentheses
function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
}
// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit); // Output => [Function: convertCelciusToFahrenheit]
const temperatureInCelsius = 90;
// Akan menjalankan isi function
// Nilai yang diberikan dalam parentheses saat pemanggilan function, ia disebut sebagai argument.
convertCelsiusToFahrenheit(temperatureInCelsius); // Output => Hasil konversi: 194

// Hoisting
greetWorld();
function greetWorld() {
    console.log('Hello, world!');
}
/* Output:
Hello, world!
*/

// return value
function sumNumbers(a, b) {
  const result = a + b;
  return result;
}
const result = sumNumbers(2, 4);
console.log('2 + 4:', result);
/* Output:
2 + 4: 6
*/