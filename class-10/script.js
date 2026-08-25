// reduce: 
// -------
// syntax:
// array.reduce((accumulator, currentValue)=>{

// }, initialValue);

// 1.sum an array

// let array = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i <= array.length - 1; i++) {
//     sum = sum + array[i];
// }

// console.log(sum)

// let sum = array.reduce((total, num) => {
//     return total+num;
// }, 5);

// console.log("sum---",sum)


// 2. find the maximum

// const numbers = [4, 9, 2, 7];

// let max = numbers[0]

// for (let i = 0; i <= numbers.length - 1; i++) {

//     if (max < numbers[i]) {
//         max = numbers[i];
//     }

// }

// console.log(max);

// let maxValue = numbers.reduce((max, current) => {

//     return current > max ? current : max;

// }, numbers[0]);

// console.log(maxValue)


// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple", "mango"];


// {key:value}
// let obj = {};
// let duplicate = [];

// for (let i = 0; i <= fruits.length - 1; i++) {

//     //   console.log(fruits[i])

//     if (obj[fruits[i]]) {
//         obj[fruits[i]] = obj[fruits[i]] + 1;
//         // duplicate.push(fruits[i])
//     } else {
//         obj[fruits[i]] = 1;
//     }

// }
// console.log(obj);
// console.log(Object.keys(obj))
// console.log([...new Set(duplicate)])


// const counts = fruits.reduce((obj, fruit)=>{
//     obj[fruit] = (obj[fruit] || 0)+1;
//     return obj;
// },{});

// console.log(counts)
// console.log(Object.keys(counts))

// let duplicate=[]
// for(let ele in counts){

//     // console.log(ele, counts[ele])
//     if(counts[ele] > 1){
//         duplicate.push(ele)
//     }
// }

// console.log(duplicate)

// group objects:

// const people = [
//     { name: "koushik", "age": 20 },
//     { name: "aravind", "age": 20 },
//     { name: "gangi reddy", "age": 22 },
//     { name: "harsha", "age": 22 },
//     { name: "koushik", "age": 21 },
// ];

// const grouped = 
// people.reduce((obj,person)=>{
//     console.log(person.age)

//     if(!obj[person.age]){
//         obj[person.age] = [];
//     }
//     obj[person.age].push(person.name)
//     return obj;

// },{});

// console.log("grouped---",grouped);

// {
//     20: ["koushik", "aravind"],
//         22: ["gangi reddy", "harsha"],
//             21: ["koushik"]
// }


// const nested = [1, 2, [3, 4], [5, 6,[8,9, [10,11,[12]]]], [7]];

// o/p: [1,2,3,4,5,6,7]

// const result = nested.flat(2);
// const result1 = nested.flat(Infinity);

// console.log(result)
// console.log(result1)

// const nested = [[1,2],[3,4,[10,12]],[5]];

// const result = nested.reduce((nesArr, arr)=>{

//     return nesArr.concat(arr)

// },[])

// console.log("result---",result);

// const arr1 =[1,2];

// const arr2= [3,4];

// console.log(arr1.concat(arr2))
// console.log([...arr1, ...arr2])

// const firstName = "bhargava";

// console.log(typeof firstName)

// const arr=[1,2];
// const obj={name:"bhargava"};

// const fun = (a,b)=>{ return a+b};

// console.log(typeof arr)
// console.log(arr instanceof Array)
// console.log(Array.isArray(arr))
// console.log(typeof obj)
// console.log(typeof fun)


// recursive function: A resursive function is a function that calls itself to solve a problem step by step

function printNumber(num){
  
    if(10 <= num){
        return ;
    }
    console.log(num)
    printNumber(num+1)
}

printNumber(0)

