// 1. DATA PRODUK (Simulasi Database)
const products = [
  { id: 1, name: "Laptop", price: 15000000, stock: 3 },
  { id: 2, name: "Mouse Wireless", price: 250000, stock: 10 },
  { id: 3, name: "Keyboard Mechanical", price: 800000, stock: 1 },
];

// 2. ARROW FUNCTION & SPREAD OPERATOR (Tambah Barang ke Keranjang)
const addToCart = (currentCart, productId, quantity) => {
  const product = products.find((p) => p.id === productId);

  // Conditional: Cek apakah produk ada dan stok cukup
  if (!product) {
    throw new Error("Produk tidak ditemukan di toko kami.");
  }
  if (product.stock < quantity) {
    throw new Error(
      `Stok tidak mencukupi! Sisa stok ${product.name} adalah ${product.stock}.`,
    );
  }

  // Kurangi stok produk secara langsung
  product.stock -= quantity;

  // Spread Operator: Mengembalikan array baru tanpa mengubah keranjang lama (Immutability)
  return [...currentCart, { ...product, quantity }];
};

// 3. FUNCTION EXPRESSION, REST PARAMETER, & LOOPING (Proses Checkout)
const processCheckout = function (cart, ...discountCodes) {
  // Conditional: Cek jika keranjang kosong
  if (cart.length === 0) {
    throw new Error("Gagal Checkout: Keranjang belanja Anda masih kosong!");
  }

  let totalOriginal = 0;

  // Looping (for...of): Menghitung total harga dan menampilkan daftar belanja
  console.log("\n=== NOTA BELANJA ANDA ===");
  for (const item of cart) {
    const subTotal = item.price * item.quantity;
    totalOriginal += subTotal;
    console.log(
      `- ${item.name} (x${item.quantity}) : Rp ${subTotal.toLocaleString("id-ID")}`,
    );
  }

  // Looping (forEach) & Rest Parameter: Memproses banyak kode diskon sekaligus
  let totalDiscountPercentage = 0;
  discountCodes.forEach((code) => {
    if (code === "DISKON10") totalDiscountPercentage += 0.1; // 10%
    if (code === "PROMOHEMAT") totalDiscountPercentage += 0.05; // 5%
  });
  totalDiscountPercentage = totalDiscountPercentage.toFixed(2);
  //   console.log(typeof totalDiscountPercentage);

  const discountAmount = totalOriginal * totalDiscountPercentage;
  const finalTotal = totalOriginal - discountAmount;

  // Menampilkan Ringkasan Pembayaran
  console.log("------------------------");
  console.log(
    `Total Awal           : Rp ${totalOriginal.toLocaleString("id-ID")}`,
  );
  if (discountAmount > 0) {
    console.log(
      `Potongan Diskon (${totalDiscountPercentage * 100}%) : -Rp ${discountAmount.toLocaleString("id-ID")}`,
    );
  }
  console.log(
    `Total Harus Dibayar  : Rp ${finalTotal.toLocaleString("id-ID")}`,
  );
  console.log("========================\n");

  return finalTotal;
};

// 4. ERROR HANDLING (Simulasi Eksekusi Sistem)
let myCart = []; // Keranjang belanja awal masih kosong

try {
  console.log("--- Memulai Transaksi ---");

  // Menambah beberapa barang ke keranjang
  //   console.log(products);
  myCart = addToCart(myCart, 1, 1); // Tambah Laptop 1 pcs
  myCart = addToCart(myCart, 2, 2); // Tambah Mouse 2 pcs
  //   console.log(myCart);
  //   console.log(products);

  // Skenario Error Stok (Hapus komentar di bawah ini untuk menguji error handling):
  //   myCart = addToCart(myCart, 3, 5); // Mencoba beli 5 Keyboard, padahal stok cuma 1

  // Proses checkout dengan memasukkan beberapa kode diskon sekaligus
  processCheckout(myCart, "DISKON10", "PROMOHEMAT");
} catch (error) {
  // Menangkap jika ada error di salah satu proses di atas agar program tidak crash
  console.error(`🚨 [SYSTEM ERROR]: ${error.message}`);
} finally {
  // Bagian yang akan selalu dieksekusi di akhir proses
  console.log("Sesi transaksi selesai dijalankan.");
}
