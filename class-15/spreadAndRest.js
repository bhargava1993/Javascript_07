// spread:
// -------

// const numbers = [10, 20, 30, 40, 50];

// const newNumbers = [numbres[0],numbres[1],numbres[2],numbres[3],numbres[4], 60,70];

// const newNumbers =[ ...numbers, 60,70];


// const newNumbers =[60,70];

// const array =[...numbers, ...newNumbers ];

// console.log(array)


// spread with objects

// const user = {
//     name:"harsha",
//     age:22
// }

// const updateUser={
//     ...user,
//     city:"kadiri"
// }

// updateUser["name"] = user.name;
// updateUser["age"] = user.age;

// console.log(updateUser)


// Rest oprator:  remaining
// -------------

// Array:
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

// console.log(first);
// console.log(second);
// console.log(remaining);
// console.log(numbers);

// Object

// const user = {
//     name:"deepika",
//     age:22,
//     city:"hindupur"
// }

// const {name, ...remainingDetails} = user;

// console.log(name)
// console.log(remainingDetails)


// function add(a,b,c,d,e){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
// }


function add(a,b,...numbers){
    console.log(a)
    console.log(b)
    console.log(numbers)
    
}
add(10,20,30,40,50)
