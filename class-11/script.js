// const array = [10,20,30,40,50,60];

// const result=[];

// result.push(array[1]);
// result.push(array[2]);
// result.push(array[3]);

// console.log(result);

// o/p: [20,30,40]
// ---------------------------------
// slice()

// 1. slice method returns a new array containing elements from 
// start to end.

// 2.Does not change the original array


// start index
// end index

// const array = [10,20,30,40,50,60];

// array.slice(startIndex,endingIndex)

// let result = array.slice(1,4);

// console.log("result-----",result);
// console.log("array-----",array);

// -----------------------------------------------------

// splice:

// 1. changes te original array

// 2. can remove, insert, replace 

// syntax: splice(start, deleteCount, item1, item2);

// const array = [10,20,30,40,50,60];

// remove
// const remove = array.splice(1,3);
// console.log("remove---",remove);
// console.log("array----",array)

// insert elements
// const array = [10,20,50];

// array.splice(2,0,30,40);

// console.log(array)

// Replace:

// let array = [10,20,30,40];

// array.splice(1,2,25,35);

// console.log(array)

let array = [10,20,30,40];

console.log(array.splice(0,2,3))

console.log(array)

// ----------------------------------------





