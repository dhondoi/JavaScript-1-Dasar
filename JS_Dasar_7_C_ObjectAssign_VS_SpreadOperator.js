/*
======================================================================
PERBEDAAN SPREAD OPERATOR (...) VS OBJECT.ASSIGN()
======================================================================

Meskipun keduanya digunakan untuk menyalin (shallow copy) dan menggabungkan 
properti dari satu objek ke objek lain, ada perbedaan krusial dalam cara 
kerja di balik layar, terutama mengenai mutasi dan penanganan properti khusus.

----------------------------------------------------------------------
1. MUTASI OBJEK TARGET (Perbedaan Paling Utama)
----------------------------------------------------------------------
- Object.assign(target, ...sources) -> Memutasi (mengubah) objek pertama 
  (target) yang dimasukkan sebagai argumen.
- Spread Operator ({...obj})        -> Selalu membuat objek literal BARU 
  di memori tanpa memutasi objek aslinya.

*Catatan: Object.assign() tidak akan memutasi objek asal jika kamu menggunakan 
objek kosong `{}` sebagai argumen pertama, contoh: Object.assign({}, obj).*
*/

// --- Contoh Kasus Mutasi ---
const targetObjek = { a: 1 };
const sourceObjek = { b: 2 };

// Menggunakan Object.assign()
const hasilAssign = Object.assign(targetObjek, sourceObjek);
console.log("MUTASI - hasilAssign:", hasilAssign);   // Output: { a: 1, b: 2 }
console.log("MUTASI - targetObjek:", targetObjek);   // Output: { a: 1, b: 2 } (IKUT BERUBAH/TERMUTASI!)

// Reset data untuk contoh spread
const objekA = { a: 1 };
const objekB = { b: 2 };

// Menggunakan Spread Operator
const hasilSpread = { ...objekA, ...objekB };
console.log("SPREAD - hasilSpread:", hasilSpread);   // Output: { a: 1, b: 2 }
console.log("SPREAD - objekA:", objekA);             // Output: { a: 1 } (TETAP AMAN, TIDAK MUTASI)


/*
----------------------------------------------------------------------
2. PEMICUAN SETTER (Triggering Setters)
----------------------------------------------------------------------
- Object.assign() -> Menggunakan fungsi internal [[Set]]. Jika objek target 
  memiliki fungsi 'setter', Object.assign() akan memicu (trigger) setter tersebut.
- Spread Operator -> Menggunakan fungsi internal [[DefineOwnProperty]]. Ia akan 
  mendefinisikan properti baru pada objek baru, sehingga TIDAK AKAN pernah 
  memicu setter apa pun saat proses penggabungan.
*/

// --- Contoh Kasus Setter ---
const objekDenganSetter = {
  _nama: "",
  set nama(val) {
    console.log("--> Setter 'nama' dipicu dengan nilai:", val);
    this._nama = val.toUpperCase(); // Mengubah teks jadi kapital
  }
};

// Menggunakan Object.assign() pada objek target yang punya setter
Object.assign(objekDenganSetter, { nama: "budi" }); 
// Konsol akan mencetak: "--> Setter 'nama' dipicu dengan nilai: budi"
console.log("Hasil akhir Object.assign:", objekDenganSetter._nama); // Output: "BUDI"


/*
----------------------------------------------------------------------
3. PENANGANAN NILAI NULL ATAU UNDEFINED
----------------------------------------------------------------------
- Object.assign() -> Akan melemparkan Error (TypeError) jika argumen pertama 
  (target) bernilai `null` atau `undefined`.
- Spread Operator -> Lebih aman. Jika kamu melakukan spread pada `null` atau 
  `undefined`, JavaScript akan mengabaikannya secara otomatis tanpa error.
*/

// --- Contoh Kasus Null/Undefined ---
try {
  // ❌ Ini akan menghasilkan Error karena targetnya null
  Object.assign(null, { x: 1 }); 
} catch (error) {
  console.log("Object.assign Error:", error.message); 
  // Output: Cannot convert undefined or null to object
}

//  Ini aman, null diabaikan dan menghasilkan objek kosong biasa
const amanDenganSpread = { ...null, ...undefined, x: 1 };
console.log("Hasil aman dengan spread:", amanDenganSpread); // Output: { x: 1 }


/*
----------------------------------------------------------------------
4. RINGKASAN PERBANDINGAN
----------------------------------------------------------------------
| Fitur                        | Object.assign()         | Spread Operator ({...}) |
|------------------------------|-------------------------|-------------------------|
| Sintaksis                    | Berupa fungsi/metode    | Sintaksis modern (`...`)|
| Membuat objek baru?          | Tidak (kecuali pakai {})| Ya, selalu objek baru   |
| Memutasi objek target?       | Ya                      | Tidak                   |
| Memicu Setter Target?        | Ya                      | Tidak                   |
| Target Null/Undefined?       | Error (TypeError)       | Aman (diabaikan)        |

----------------------------------------------------------------------
KESIMPULAN:
- Gunakan **Spread Operator (`...`)** sebagai pilihan utama di JavaScript modern 
  (ES6+) untuk menyalin atau menggabungkan objek karena kodenya lebih ringkas, 
  selalu menghasilkan objek baru (immutability), dan lebih aman dari error.
- Gunakan **`Object.assign()`** hanya jika kamu sengaja ingin memutasi/mengubah 
  objek yang sudah ada atau perlu memicu fungsi setter yang ada pada objek target.
*/