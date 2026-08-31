// Shallow copy / Deep copy

// primitive  Types and non-primitive Types

//Reference types / non-reference types

//Deep copy
let salary = 10000;

let empSalary = salary;

empSalary= 30000;

// console.log("salary----",salary);
// console.log("empSalary----",empSalary);


//Reference type/ non-primitive Types/ shallow copy

// let array = [10,20,30];

// let newArray = array;

// newArray.push(40);

// newArray.pop()

// Deep copy
// -----------------------

let array = [10,20,30];


let newArray = [...array];

// newArray.push(40)
array.pop();

// console.log("array--------",array);  //[10,20,30]
// console.log("newArray--------",newArray) //[10,20,30]


// let oldObj = {
//     name:"bhargava",
//     id:1,
//     salary:10000
// }

// let newObj= {...oldObj};

// newObj["companyname"] = "HappiestMinds";

// console.log("oldObj--------",oldObj);
// console.log("newObj------",newObj)


let oldObj = {
    name:"bhargava",
    id:1,
    salary:10000,
    address:{
        city:"Bangalore",
        pincode:515201
    }
}

let stringObj = JSON.parse(JSON.stringify(oldObj));

// let againObj = JSON.parse(stringObj)
stringObj.address.area = "white field";

console.log("oldObj--------", oldObj);
console.log("stringObj----", stringObj)


// let newObj = {...oldObj}


// newObj.address.area = "white field";

// console.log("oldObj--------",oldObj);
// console.log("newObj------",newObj)

// Dynamic types

// let array=[10,20,30,40,350];

// let newArray = array;

// let objects ={};

// let fetchUser = ()=>{

// }
