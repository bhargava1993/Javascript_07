
// console.log(sample());

// function sample(){
//     return "normal function";
// }

// function expression

// const sample = function (){
//     return "normal function";
// }

// console.log(sample());

// name less function / anonamous function

// function (){
//     return "nameLessFun function";
// }


// Arrow functions:
// ----------------

// const arrowFun = () => {
//     return "arrow function"
// }

// advantage:1

const arrowFun = () => "arrow function";
// console.log(arrowFun());

const add = (a, b) => a + b;

// console.log(add(10,20))

const even = (a) => {
    if (a % 2 === 0) {
        return "even numbers";
    } else {
        return "odd numbers";
    }
}

// console.log(even(10))

// let ardhamaticObj= {

//     add(a,b){
//         return a+b
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// }

// let ardhamaticObj = {

//     add: (a, b) => {
//         return a + b
//     },
//     sub: (a, b) => {
//         return a - b;
//     },
//     mul: (a, b) => {
//         return a * b;
//     }
// }

let ardhamaticObj = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) =>  a * b
}

// console.log("add", ardhamaticObj.add(10, 20))
// console.log("sub", ardhamaticObj.sub(10, 20))
// console.log("mul", ardhamaticObj.mul(10, 20))

// Higher order functions:

function greet(name){
    return "Hello "+ name;
}

function processUser(recFun){
    return recFun("Harsha");
}

console.log(processUser(greet));





