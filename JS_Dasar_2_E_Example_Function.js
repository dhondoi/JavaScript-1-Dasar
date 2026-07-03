// (--- FIRST CLASS CITIZEN ---)
const aturanValidasi = {
  required: (value) => (value.trim() !== "" ? null : "Kolom ini wajib diisi"),
  email: (value) => (value.includes("@") ? null : "Format email salah"),
  minLen: (value) => (value.length >= 6 ? null : "Minimal harus 6 karakter"),
};
// Fungsi utama memanfaatkan aturan di atas secara dinamis
function validasiInput(tipeAturan, nilai) {
  const validator = aturanValidasi[tipeAturan]; // Mengambil fungsi dari objek
  return validator ? validator(nilai) : null; // Menjalankan fungsi
}
console.log(validasiInput("email", "budi.com")); // Output: 'Format email salah'

// (--- CONTOH LAIN ---)
// Fungsi utama (Core Logic)
function hitungTotal(hargaProduk, fungsiPromo) {
  const pajak = hargaProduk * 0.11; // Pajak 11%
  const totalSebelumPromo = hargaProduk + pajak;
  return fungsiPromo(totalSebelumPromo); // Menjalankan fungsi promo yang dikirim
}
// Berbagai fungsi promo (Bisa ditambah tanpa mengubah fungsi hitungTotal)
const promoTanggalKembar = (total) => total * 0.9; // Diskon 10%
const promoMemberBaru = (total) => total - 50000; // Potongan Rp 50.000
debugger;
const totalAkhir = hitungTotal(500000, promoTanggalKembar);
console.log(totalAkhir); // Output sudah otomatis terpotong diskon 10%

// (--- CONTOH LAIN ---)
function buatLogger(namaModul) {
  // Fungsi ini "mengingat" variabel namaModul (Closure)
  return function (pesan) {
    const waktu = new Date().toLocaleTimeString();
    console.log(`[${waktu}] [${namaModul}] -> ${pesan}`);
  };
}
// Membuat fungsi log spesifik untuk tiap modul
const logPembayaran = buatLogger("MODUL_PEMBAYARAN");
const logAuth = buatLogger("MODUL_AUTH");
// Penggunaan di dalam kode aplikasi
logPembayaran("Pengguna berhasil membeli token listrik.");
logAuth("Percobaan login gagal pada akun budi@mail.com.");

// (--- FUNCTION EXPRESSION VS ARROW FUNCTION ---)
// (--- POSISI THIS ---)
const tombol = {
  nama: "Tombol Submit",
  // Menggunakan Function Expression biasa
  klikBiasa: function () {
    setTimeout(function () {
      console.log(this.nama); // Output: undefined (karena 'this' di dalam setTimeout merujuk ke global/window)
    }, 1000);
  },
  // Menggunakan Arrow Function
  klikArrow: function () {
    setTimeout(() => {
      console.log(this.nama); // Output: "Tombol Submit" (karena 'this' mewarisi objek 'tombol')
    }, 1000);
  },
};
tombol.klikBiasa();
tombol.klikArrow();

// (--- IMPLISIT RETURN ---)
// Function Expression
const kuadratBiasa = function (x) {
    return x * x;
};
// Arrow Function (Jauh lebih ringkas)
const kuadratArrow = (x) => x * x;


// (--- PENGGUNAAN SEBAGAI CONSTRUCTOR ---)
const OrangBiasa = function(nama) { this.nama = nama; };
const budi = new OrangBiasa("Budi"); // Berhasil
const OrangArrow = (nama) => { this.nama = nama; };
const iwan = new OrangArrow("Iwan"); // TypeError: OrangArrow is not a constructor
