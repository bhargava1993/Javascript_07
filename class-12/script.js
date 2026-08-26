
// synchronous:

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");


// console.log("order placed");
// console.log("preparing food");
// console.log("Food delivered");

// asynchronous:
// -------------

// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// }, 5000)

// console.log("task 3");

// console.log("task 1");

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// console.log("task 2");
// console.log("task 3");
// -----------------------------------------

// callback:
// ---------

// A callback is a function that we pass as an argument to another function,
// so that other function can call it later.

// function greet(name){
//     console.log("hellow "+name)
// }

// function processUser(a, b, callback){
//     console.log("line --45",callback)
//     console.log("line --46",a,b)
//     // callback("Aravind")

// }
// processUser(greet, 10, 20)


// setTimeout(() => {
//     console.log("task 2");
// }, 5000)

// function add(a,b){
//     return a+b
// }

// const add  = (a,b)=>{
//    return a+b
// }

//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json =>console.log("outer---",json))


// function getUser(callback) {

//     // const user = {
//     //     id: 101,
//     //     name: "bhargava"
//     // }

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json =>callback(json))
// }

// getUser((user) => {
//     console.log("user---",user)
// })


// Error handling:
// ---------------


function getUser(id, callback) {

    if (id === 101) {
        const user = {
            id: 101,
            name: "bhargava"
        }
        callback(null, user);
    }else{
        callback("user not found", null);
    }

}

const same = (error, user) => {

    if (error) {
        console.log(error);
        return;
    }
    console.log("user---", user)
}

getUser(200, same)