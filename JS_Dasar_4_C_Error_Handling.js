// basic
// const error = new Error("Terjadi error");
// console.error(error);

// lempar error
// const price = 100;
// const paid = 80;
// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

// tangkap error
try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena ada error, blok ini akan dieksekusi");
}

// finally
try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
