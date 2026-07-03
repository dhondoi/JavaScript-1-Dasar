// basic
// const error = new Error("Terjadi error");
// console.error(error);

// lempar error
// const price = 100;
// const paid = 80;
// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

// tangkap error
try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena ada error, blok ini akan dieksekusi");
}

// finally
try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}

async function getData() {
  const a = await fetch("http://www.omdbapi.com/?apikey=9a3f3566&s=avengers")
    .then((a) => {
      if (a.ok === false) {
        // throw new Error(a.statusText);
        console.log(a.statusText);
      } else {
        return a.json();
      }
    })
    .then((response) => response.Search);
  a.forEach((element) => {
    console.log(element.Title);
  });
}
getData();

// kasus 1
let json = "{ bad json }";
try {
  let user = JSON.parse(json); // menangkap json tidak sesuai format
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// kasus 2
json = '{ "age": 20 }';
try {
  let user = JSON.parse(json);
  // solusi undefined
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

// kasus 3
json = '{ "name": "Yoda", "age": 20 }';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
  errorCode; // error
  console.log(user.name); // Yoda
  console.log(user.age); // 20
} catch (error) {
  // errorCode masih ketangkap disini
  console.log(`JSON Error: ${error.message}`);
  // solusi
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

// custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
json = '{ "age": 30 }';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
