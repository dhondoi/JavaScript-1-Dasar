import { CoffeeMachine } from "./JS OOP - Encasulation.js";

const coffeeMachine = new CoffeeMachine(120);
console.log(coffeeMachine);
console.log(typeof coffeeMachine);
coffeeMachine.temperature = 100;
// coffeeMachine.#temperature = 100;
console.log(coffeeMachine.temperature);
// not recommended
coffeeMachine.waterAmount = 150;
console.log(coffeeMachine.waterAmount);
coffeeMachine.a ="haha";
console.log(coffeeMachine.a);
console.log(coffeeMachine);

