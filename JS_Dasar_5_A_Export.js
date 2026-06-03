const name = "John";
const email = "john@gmail.com";
const age = 25;
export { name, email, age };

export function namedExportFunction() {
  console.log("Ini adalah contoh named import.");
}

export default function myFunction() {
  console.log("Ini adalah function export default.");
}
