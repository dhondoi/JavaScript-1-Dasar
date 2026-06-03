import {
  createMonster,
  createGuardian,
  createWarrior,
  createWizard,
} from "./JS OOP - Object Composition.js";

const monster = createMonster("Monster");
monster.canMove();
monster.attack();
console.log(monster);

const guardian = createGuardian("Guardian");
guardian.canMove();
guardian.defend();

const wizard = createWizard("Wizard");
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior("Warrior");
warrior.canMove();
warrior.attack();
warrior.defend();
console.log(warrior);
