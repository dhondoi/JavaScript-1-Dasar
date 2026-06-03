function makeCoffee(callback) {
  const estimationTime = 5000;
  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`,
  );
  setTimeout(() => {
    // step 2, jika timeout selesai, jalankan statement dalam sini
    console.log("Pramusaji selesai membuat kopi.");
    // step 3, eksekusi callback function yang didapat dari parameter
    callback();
  }, estimationTime);
  //   step 1 berakhir, lanjut ke step 2
}

function sendCoffee(callback) {
  const estimationTime = 2000;
  console.log("Pramusaji sedang mengantarkan kopi pesanan");
  setTimeout(() => {
    // step 6, jika timeout selesai jalankan statement dalam sini
    console.log("Pramusaji sudah sampai ke meja.");
    // step 7, eksekusi callback function yang didapat dari parameter
    callback();
  }, estimationTime);
  //   step 5 berakhir, lanjut ke step 6
}

console.log("Saya memesan kopi di kafe.");
// step 1, mengeksekusi makeCoffee
makeCoffee(() => {
  // step 4 dijalankan, trigger dari step 3
  // step 5, menjalankan makeCoffee function
  sendCoffee(() => {
    // step 8 dijalankan, trigger dari step 7
    console.log("Pramusaji memberikan kopi pesanan.");
    console.log("Saya mendapatkan kopi dan menghabiskannya.");
  });
  // finish
});
