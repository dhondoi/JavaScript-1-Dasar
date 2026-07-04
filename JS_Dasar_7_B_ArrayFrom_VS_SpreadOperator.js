/*
======================================================================
PERBEDAAN SPREAD OPERATOR (...) VS ARRAY.FROM()
======================================================================

Meskipun sekilas memiliki fungsi yang sama (mengubah sesuatu menjadi Array),
Spread Operator dan Array.from() memiliki perbedaan mendasar pada jenis
input yang diterima dan fitur bawaannya.

----------------------------------------------------------------------
1. KEMAMPUAN MENERIMA INPUT (Iterable vs Array-like)
----------------------------------------------------------------------
- Spread Operator (...) -> HANYA bekerja pada objek yang "Iterable" 
  (bisa dilooping, seperti Array, String, Set, dan Map).
- Array.from()          -> Bekerja pada objek "Iterable" DAN "Array-like" 
  (objek bukan array asli tapi punya properti `.length` dan indeks angka,
  seperti `arguments` fungsi, NodeList DOM, atau objek buatan sendiri).

Mari kita lihat contoh objek Array-like di bawah ini:
*/

const fakeArray = { 0: "A", 1: "B", length: 2 };

// ❌ Menjalankan baris di bawah ini akan memicu -> TypeError: fakeArray is not iterable
// const hasilSpread = [...fakeArray]; 

//  Menggunakan Array.from() -> Sukses tanpa error!
const hasilFrom = Array.from(fakeArray); 
console.log("Hasil Array.from:", hasilFrom); // Output: ['A', 'B']


/*
----------------------------------------------------------------------
2. FITUR MAPPING BAWAAN (Fungsi Map)
----------------------------------------------------------------------
`Array.from()` memiliki parameter kedua berupa fungsi map bawaan. 
Ini membuat kita bisa memanipulasi data *sambil* mengubahnya menjadi array,
sehingga lebih hemat memori dan efisien.
Sedangkan Spread Operator harus digabung secara manual dengan metode `.map()`.
*/
const setAngka = new Set([1, 2, 3]);
// Cara Array.from() -> Proses konversi & perkalian terjadi dalam satu langkah
const dikaliDuaFrom = Array.from(setAngka, x => x * 2);
console.log("Di-map dengan Array.from:", dikaliDuaFrom); // Output: [2, 4, 6]
// Cara Spread Operator -> Membuat array baru dulu di memori, baru di-looping ulang dengan .map()
const dikaliDuaSpread = [...setAngka].map(x => x * 2);
console.log("Di-map dengan Spread:", dikaliDuaSpread); // Output: [2, 4, 6]
/*
----------------------------------------------------------------------
3. RINGKASAN PERBANDINGAN
----------------------------------------------------------------------
| Fitur                      | Spread Operator ([...]) | Array.from()        |
|----------------------------|-------------------------|---------------------|
| Sintaksis                  | Ringkas & deklaratif    | Metode formal       |
| Objek Iterable (Set/Map)   | Bisa                    | Bisa                |
| Objek Array-like (.length) | Gagal (Error)           | Bisa                |
| Fungsi Map Bawaan          | Tidak ada               | Ada (Argumen ke-2)  |
| Kegunaan Lain              | Gabung/salin array      | Khusus bikin array  |
----------------------------------------------------------------------
KESIMPULAN:
- Gunakan Spread Operator (...) jika bekerja dengan Array/Set/Map asli 
  atau saat ingin menggabungkan beberapa array menjadi satu.
- Gunakan Array.from() jika berurusan dengan data dari DOM (NodeList) 
  atau saat ingin mengubah data sekaligus memodifikasinya (mapping).
*/