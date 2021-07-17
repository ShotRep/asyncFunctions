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
// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth
//       const elRight = element.getBoundingClientRect().right
//       const currLeft = element.getBoundingClientRect().left
//       if (elRight + amount > bodyBoundary) {
//         reject({bodyBoundary, elRight, amount})
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`
//         resolve()
//       }
//     }, delay)
//   })
// }

// const btn = document.querySelector("button")
// async function animateRight(el) {
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
// }
// animateRight(btn).catch((err) => {
//   console.log("Can no longer move.", err)
// })

//versus .then

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});

/*  Parallel Vs. Sequential Requests  */
/* we will be using https://pokeapi.co/api/v2 */

//remove the need for .then by using async function
//SEQUENTIAL REQUESTS - Happening in sequence, 1 has to finish before the next starts.
// async function getPokemon() {
//   const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
//   const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
//   const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
//   const pokemon4 = await axios.get("https://pokeapi.co/api/v2/pokemon/4")
//   const pokemon5 = await axios.get("https://pokeapi.co/api/v2/pokemon/5")
//   console.log(pokemon1.data)
//   console.log(pokemon2.data)
//   console.log(pokemon3.data)
//   console.log(pokemon4.data)
//   console.log(pokemon5.data)
// }
// getPokemon()

///PARALLEL REQUESTS - Happening in parallel, all start at same time.
// async function getPokemon() {
//   const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
//   const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
//   const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
//   const promise4 = axios.get("https://pokeapi.co/api/v2/pokemon/4")
//   const promise5 = axios.get("https://pokeapi.co/api/v2/pokemon/5")
//   console.log(promise1)   // shows promise as pending
//   const pokemon1 = await promise1
//   const pokemon2 = await promise2
//   const pokemon3 = await promise3
//   const pokemon4 = await promise4
//   const pokemon5 = await promise5
//   console.log(promise1)   //  shows promise as fulfilled
//   console.log(pokemon1.data)
//   console.log(pokemon2.data)
//   console.log(pokemon3.data)
//   console.log(pokemon4.data)
//   console.log(pokemon5.data)
//   }
// getPokemon()

/* A Demo of Sequence vs Parallel code */

// function changeBodyColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color
//       resolve()
//     }, delay)
//   })
//}
//Sequence - this way it takes 4 seconds for our info to be retrieved
// async function lightShow() {
//   await changeBodyColor('teal', 1000)
//   await changeBodyColor("pink", 1000)
//   await changeBodyColor("red", 1000)
//   await changeBodyColor("purple", 1000)
// }

//Parallel - this way it takes 1 second for our info to be retrieved
// async function lightShow() {
//   const promise1 = changeBodyColor("teal", 1000)
//   const promise2 = changeBodyColor("pink", 1000)
//   const promise3 = changeBodyColor("red", 1000)
//   const promise4 = changeBodyColor("purple", 1000)
//   await promise1
//   await promise2
//   await promise3
//   await promise4
// }

// lightShow()

/*   PROMISE ALL   */
/* Works with sending requests in parallel */
/* Refactor Pokemon code */

async function getPokemon() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")
  const promise4 = axios.get("https://pokeapi.co/api/v2/pokemon/4")
  const promise5 = axios.get("https://pokeapi.co/api/v2/pokemon/5")
  const results = await Promise.all([promise1, promise2, promise3, promise4, promise5])
  console.log(results)
  printPokemon(results)
}

  function printPokemon(results) {
    for (let pokemon of results) {
      console.log(pokemon.data.name)
    }
    
    console.log(results[0].data)
    console.log(results[1].data)
    console.log(results[2].data)
    console.log(results[3].data)
    console.log(results[4].data)
  }
getPokemon()

/* Refactor Light Show Code */
//our function remains the same.
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}
//
  async function lightShow() {
    const promise1 = changeBodyColor("teal", 1000)
    const promise2 = changeBodyColor("pink", 1000)
    const promise3 = changeBodyColor("red", 1000)
    const promise4 = changeBodyColor("purple", 1000)
    const results = await Promise.all([promise1, promise2, promise3, promise4])  
}
  lightShow()
  
