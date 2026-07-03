// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};
temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// refactor
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

//Arrow Function
      // notasi arrow function
      // const/let namaVariabel = (parameterJikaAda) => {};

      // konsep this pada arrow function

      // constructor function standar
      // const Mahasiswa = function () {
      //     this.nama = "Doni"
      //     this.sayHello = function () {
      //         console.log(`Halo ${this.nama}`);
      //     }
      // }
      // const doni = new Mahasiswa();

      // arrow function : objek tidak bisa menggunakan arrow function
      //   const Mahasiswa = function () {
      //     this.nama = "Doni";
      //     this.sayHello = () => {
      //       console.log(`Halo ${this.nama}`);
      //     };
      //   };
      //   const doni = new Mahasiswa();

      // object literal : error
      //   const mahasiswa = {
      //     nama: "Doni",
      //     sayHello: function()  {
      //       console.log(`Halo ${nama}`);
      //     },
      //   };