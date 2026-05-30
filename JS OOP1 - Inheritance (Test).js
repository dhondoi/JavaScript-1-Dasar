import { SmartPhones } from "./JS OOP - Inheritance.js";

const sm = new SmartPhones('black', 'A', '12 Pro Max');
// sm.color = "white"
// not recommended
console.log(sm.color);
console.log(sm.brand);
console.log(sm.model);
sm.charging();