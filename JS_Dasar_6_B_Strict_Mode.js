function useStrictMode() {
  "use strict";
  const person = { firstName: "Budi" };
  with (person) {
    console.log(firstName);
  }
}

useStrictMode();