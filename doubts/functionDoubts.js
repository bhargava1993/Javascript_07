'use strict'

// function sample(firstName) {
//     console.log("Hello " + firstName)

//     return "Hello " + firstName;
// }

// console.log(sample("sudheer"));



// function greet(firstName, callback){
//     console.log("Hello " + firstName)

//     callback()
// }


// const birthday = function (name, cb) {
//     console.log("Happy Birthday " + name);
//     console.log(cb, sayBye)
//     sayBye();
// }



// greet("sudheer", sayBye);


// const nameless = () => {
//     console.log("nameless funtion")
// }

// setTimeout(nameless, 1000)

// console.log(sayBye());


// const sayBye = function () {
//     console.log("BYE")
// }


// birthday("sudheer", sayBye);




function first(a, cb){
    console.log(a)
    cb();
}
function second(a, cb){
    console.log(a);
    cb();
}
console.log(20)
function thried(){
    console.log("thried")

    setTimeout(()=>{
        console.log("settime out")
    })
    second(20, fourth)
}
function fourth(){
    console.log("fourth")
}
first(10,thried);
console.log(50)

// 20
// 10
// thried
// 20
// fourth
// 50


// 20 
// 10
// thried
// 20
// fourth
// 50

// //koushik
// 30

// //harsha
// thried
// 30
// 20

// //sudheer

// gangireddy

30