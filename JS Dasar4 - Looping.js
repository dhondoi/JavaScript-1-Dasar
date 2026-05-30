// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// for in (object)
const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };
for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// for of (array)
const names = ["Bebek", "Ayam", "Telor", "Tempe"];
for (const item of names) {
  console.log(item);
}

// while do
let i = 0;
while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// do while
let j = 0;
do {
  console.log(`Angka ke-${j} adalah ${j}.`);
  j++;
} while (j < 5);

// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
