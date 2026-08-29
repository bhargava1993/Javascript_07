
// Destructuring

// const multipleValues = ["bhargava","450","software","hindupur","100000"];

// let name = multipleValues[0];
// let totalmarks = multipleValues[1];
// let job = multipleValues[2];
// let location = multipleValues[3];
// let salary = multipleValues[4];

// let [name, totalmarks, job, location, salary] = ["bhargava", "450", "software", "hindupur", "100000"];

// console.log("name---",name)
// console.log("totalmarks---",totalmarks)
// console.log("job----",job)
// console.log("location----",location)
// console.log("salary-----",salary)


// let numbers = [10,20,30,40];

// let [first, ,thrid] = numbers;

// console.log(first)
// console.log(thrid)
// ---------------------------------------------------

// Object Destructuring:


// let user = {
//     name: "sudheer",
//     age: 23,
//     city: "anathapur"
// }

// const name = user.name; 
// const age = user.age;
// const city =  user["city"]

// option:1

// let { name, age, city } = user;

// console.log(`name :${name} - age:${age} - city:${city}`);

// option:2
// let { age } = user;

// console.log(`age:${age}`);

//option:3 Rename variables

// let { name: firstName  } = user;

// console.log("name---",firstName)

//option:4  Default values

// const voter = {
//     name: "koushik",
//     age:21
// }

// const { name, age = 18 } = voter;

// console.log(`name-${name} - age ${age}`)


// nested objects:

// const user = {
//     "name": "aravind",
//     address: {
//         city: "khammam",
//         state: "Telangana"
//     }
// }

// // console.log(user.address.city)

// const { name, address: { city } } = user

// console.log("name----",name, "city---", city)


function displayUser({ name, age }) {
    console.log("age---",age)
    console.log("name---",name)

    // console.log("voterDetails---",voterDetails.age)
    // console.log("voterDetails---",voterDetails.name)

    // let age = voterDetails.age;
    // let name= voterDetails.name

    // let {age, name }= voterDetails;

    if (age >= 18) {
        console.log("you are elegible")
    } else {
        console.log("not elegible")
    }

}

const voter = {
    name: "koushik",
    age: 21
}

displayUser(voter)