
// const array = ["banana", "mango", "apple", "graps", "orange"];

// console.log(array.reverse());

// console.log(array.sort());

// let numArray = [20, 17, 13, 100, 99, 33, 1, 22];

// console.log(numArray.sort((a, b) => a - b));
// console.log(numArray.sort((a, b) => b - a));

const array = ["banana", "mango", "banana", "aravind",
    "apple", "graps", "banana", "orange", "mango"];

// console.log(array.indexOf("orange"));

// console.log(array.includes("koushik"))


// const users = [
//     { id: 101, name: "aravind" },
//     { id: 102, name: "sudheer" },
//     { id: 103, name: "deeika" },
//     { id: 104, name: "harsha" }
// ]

// const index = users.findIndex( user => {
//    return user.id === 110
// })

// console.log(index)

// const numbers = [10, 20, 60, 75, 30, 100];

// const index = numbers.findIndex(num => num > 50);

// console.log(index)


const fruitsArray = ["apple","banana", "mango", "banana", "aravind","orange",
     "graps", "banana", "orange", "mango",100,40,20,15,1,3,100,40];

// console.log(fruitsArray.includes("graps"));

let uniqueArray=[];
let duplictas=[]


for(let i=0; i <= fruitsArray.length-1; i++){

// console.log(!uniqueArray.includes(fruitsArray[i]))

    if(!uniqueArray.includes(fruitsArray[i])){
        uniqueArray.push(fruitsArray[i])
    }else{
        duplictas.push(fruitsArray[i])
    }
  
}

console.log("uniqueArray---",uniqueArray.sort((a,b)=>a-b))
console.log("duplictas---",duplictas)