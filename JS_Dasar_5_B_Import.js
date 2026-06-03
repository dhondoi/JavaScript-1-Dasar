// Default import juga memungkinkan kita untuk import function/method/variable
// yang namanya tidak harus sama dengan function/method/variable aslinya.
import myFunction from "./JS Dasar - Export.js";
// named import memungkinkan kita mengimpor function/method/variable tertentu berdasarkan namanya.
import { namedExportFunction } from "./JS Dasar - Export.js";
import { namedExportFunction as nEF } from "./JS Dasar - Export.js";
import { name, email, age } from "./JS Dasar - Export.js";

myFunction();
namedExportFunction();
nEF();
console.log(name);
console.log(email);
console.log(age);
