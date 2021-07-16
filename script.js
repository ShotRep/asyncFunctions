//A quick overview of Async functions

/* Promises are used heavily with async functions. Be very familiar with how they work.
At the core of async functions are promises, async functions are just syntactic sugar.*/

function getData(){
  const data = axios.get('https://swapi.dev/api/planets')
  console.log(data)
}
/*Data is now equal to a promise, we must use .then to wait and grab*/


function getData1() {
  const data1 = axios.get("https://swapi.dev/api/planets")
    .then((data1) => {
    console.log(data1)
  })  
}
/*Data is now resolved by adding .then*/

//To write code more like the first example there are 2 new keywords we can use.
//ASYNC and AWAIT