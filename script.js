//A quick overview of Async functions

/* Promises are used heavily with async functions. Be very familiar with how they work.
At the core of async functions are promises, async functions are just syntactic sugar.*/

// function getData(){
//   const data = axios.get('https://swapi.dev/api/planets')
//   console.log(data)
// }
/*Data is now equal to a promise, we must use .then to wait and grab*/

// function getData1() {
//   const data1 = axios.get("https://swapi.dev/api/planets")
//     .then((data1) => {
//     console.log(data1)
//   })
// }
/*Data is now resolved by adding .then*/

//To write code more like the first example there are 2 new keywords we can use.
//ASYNC and AWAIT keywords.  Syntactic Sugar for .then

/*     ASYNC KEYWORD    */
/*
  async functions always return a promise.
  If the function returns a value, the promise will be resolved with that value.
  If the function throws an exception, the promise will be rejected.
*/

//*Note these functions make no sense but are good for illustration purposes.

//example 1
//basic JS 101
// function greet() {
//   return "Hello!"  //returns 'Hello!'
// }

//async version
// async function greet() {
//   return "Hello!"   //returns a resolved promise of 'Hello!'
// }
// greet().then((val) => {
//   console.log("Promise Resolved: ", val)
// })

//example 2
//basic JS 101
// function add(x, y) {
//   return x + y
// }

//async version
// async function add(x, y) {
//   return x + y
// }
// add(5, 6).then((val) => {
//   console.log('Promise Resolved:',val)
// })

//Now how would we return a promise that is not resolved?
//in async functions all we need to do is throw an exception.

// I. async promise
// async function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw 'Error: X and Y must be numbers.'
//   }
//   return x + y

// II. standard promise
function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y must be numbers.")
    }
    resolve(x + y)
  })
}

add("q", 6)
  .then((val) => {
    console.log("Promise Resolved: ", val)
  })
  .catch((err) => {
    console.log("Promise Rejected: ", err)
  })
