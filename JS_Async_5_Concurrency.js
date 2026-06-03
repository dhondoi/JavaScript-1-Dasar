const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Ups!")), 2000),
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("-----Promise.all-----");
    console.log("Success");
    console.log(values);
  })
  .catch((error) => {
    console.log("-----Promise.all-----");
    console.log("Failed");
    console.log(error.message);
  });

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log("-----Promise.allSettled-----");
    console.log("Success");
    console.log(values);
  })
  .catch((error) => {
    console.log("-----Promise.allSettled-----");
    console.log("Failed");
    console.log(error.message);
  });
/* Output:
Failed
Ups!
*/
