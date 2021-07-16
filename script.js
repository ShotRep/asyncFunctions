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
// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers.")
//     }
//     resolve(x + y)
//   })
// }

// add('5', 6)
//   .then((val) => {
//     console.log("Promise Resolved: ", val)
//   })
//   .catch((err) => {
//     console.log("Promise Rejected: ", err)
//   })

/*       AWAIT keyword       */

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets')
// }

// getPlanets().then((res) => {
//    console.log(res.data)
// })

//an easier way

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planets')
//   console.log(res.data.results)
// }
// getPlanets()

//what if its rejects or not resolved? how do we handle .catch using await?

// async function getPlanets() {
//   const res = await axios.get("https://swapi.dev/api/planetz")
//   console.log(res.data.results)
// }

//1. using .catch  -  can catch many errors -  not specific.
// getPlanets().catch((err) => {
//   console.log("Error added to catch:", err)
//   // console.log(err)
// })

//2. using try block code with catch - catch 1 error - specific to what we are doing
// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.dev/api/planetz")
//     console.log(res.data.results)
//   } catch (err) {
//     console.log("Error added to catch", err)
//   }
// }
// getPlanets()

/*            MULTIPLE AWAITS            */

//from a past exercise, moving button until it can no longer move rejecting the promise.
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth
      const elRight = element.getBoundingClientRect().right
      const currLeft = element.getBoundingClientRect().left
      if (elRight + amount > bodyBoundary) {
        reject({bodyBoundary, elRight, amount})
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`
        resolve()
      }
    }, delay)
  })
}

const btn = document.querySelector("button")
async function animateRight(el) {
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
  await moveX(el, 100, 1000)
}
animateRight(btn).catch((err) => {
  console.log("Can no longer move.", err)
})
