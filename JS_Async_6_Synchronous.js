function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve("You did it!");
  }, 2000);
}
async function doSomething() {
  return new Promise(promiseExecutor);
}

console.log("Start.");
await doSomething().then((value) => {
  console.log(value);
});
console.log("End.");

// async function promiseWithAsyncAwait() {
//   console.log("Start.");
//   const result = await doSomething();
//   console.log(result);
//   console.log("End.");
// }
// promiseWithAsyncAwait();
/* Output:
Start.
End.
You did it.
*/
