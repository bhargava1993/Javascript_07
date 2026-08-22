// forEach:
// --------

// 1. it just loop your array
// 2. it won't return any array

// let numbers = [10, 20, 30, 40, 50];

// name less function
// ()=>{}
// function (){}


// numbers.forEach(function (number) {
//     console.log(number)
// })

// -------------------------
// using arrow function:

// numbers.forEach((number, index, array) => {
//     console.log(number * 2, "----", index, "----", array)
// })

// let discount=[];

// numbers.forEach((number) => {
//   discount.push(number-2);
// })

// console.log(discount)


// ------------------------------


// map:

// 1.map returns an array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers1.map((number, index, array)=>{
//     console.log(`${number} ---- ${index} ---- ${array}`)
// })

// let discount = numbers1.map((number) => {
//    return number - 2;
// })

// let discount = numbers1.map((number) => number - 2);

// let bonus = numbers1.map((number) => {

//     if (number % 2 === 0) {
//         return number+5000;
//     }else{
//          return number+10000;
//     }

// })
// console.log(bonus)
// console.log(numbers1)


// let users = [
//     { name: "harsha", age: 22 , salary: 10000},
//     { name: "koushik", age: 20, salary: 10000 },
//     { name: "aravind", age: 23, salary: 10000 },
//     { name: "gangi reddy", age: 24, salary: 10000 },
// ];

// users = users.map((user, index) => {

//     if(user.age > 22){
//         user.salary = user.salary + 5000;
//     }
//     // console.log(`${index} --`, user);
//    return user;
// })
// console.log(users)

// --------------------------
// forEach --> Do something
// map --> create something

// -------------------------------------------

// filter:
// --------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let bonus = numbers.filter((number) => {

//     // console.log(number);

//     if (number > 5) {
//         return number;
//     } 

// })

// let bonus = numbers.filter((number) => number%2 === 0)
// console.log(bonus)

// let users = [
//     { name: "harsha", age: 22, salary: 10000, city: "kadiri" },
//     { name: "koushik", age: 20, salary: 20000, city: "hindupur" },
//     { name: "aravind", age: 23, salary: "15000", city: "khammam" },
//     { name: "gangi reddy", age: 24, salary: 20000, city: "kadiri" },
//     { name: "deepika", age: 24, salary: 15000, city: "hindupur" },
// ];

// let filterCity = users.filter((user) => user.city === "kadiri");

// // console.log(filterCity);

// let filterSalary = users.filter((user) => {

//     if (user.salary < 15000) {

//         user.salary = user.salary + 5000
//         return user;

//     }

// });

// console.log(filterSalary)
