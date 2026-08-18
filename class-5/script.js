
// 1. Write a program to print your name.

// var name = "bhargava";
// var name = "harsha"

// console.log("name----",name)

// function printName() {

//     var name = "bhargava";

//     console.log("name----", name)
// }

// printName();


// function printName(name) {

//     console.log("name----", name)
// }

// printName("bhargava");
// printName("Harsha");
// printName("Deepika");
// printName("Aravind");


// 2. Write a program to add two numbers.

// var a=10, b=20;
// var a=40, b=50;
// var result = a+b;
// console.log(result)

// function add(a, b,c) {
//     console.log("a----",a, "b-----",b, "c----",c)
//     var result = a + b;
//     return a + b;
// }


// console.log(add(10, 20,30));
// console.log(add(40, 50));
// console.log(add(70, 60));
// console.log(add(100, 200));

// '' - sigle quote
// "" - double quote
// `` --> template litarals


function greet(name, age){
    // return "Happy Birthday "+name +" "+age;

    return `Happy Birthday ${name} ${age}`;
}

console.log(greet("Sudheer", 23));
