
// setTimeout: Run Once After a delay

// setTimeout(function,delay);

// setTimeout(()=>{}, 1000);

// 1000 milliseconds = 1 second

// console.log("task1");

// setTimeout(task5);
// setTimeout(()=>{
//     console.log("task6")
// });
// setTimeout(()=>{
//     console.log("task2");
//     console.log("after 3 seconds");
// },60000);

// console.log("task3");


// function sample(){
//     console.log("task4")
// }

// setTimeout(sample,2000);

// function task5(){
//     console.log("task4")
// }


// setInterval()

// setInterval(function,dealy);

// setInterval(()=>{
//     console.log("Hello Good morning")
// },1000);

// Digital clock:

// setInterval(digitalClock, 1000);

// function digitalClock(){

//     const date = new Date();

//     console.log(date.toLocaleTimeString())
//     console.log(`${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`)

// }

// console.log(new Date())

// setInterval(start, 1000);

// let count=10;
// function start(){
//     count--;
//     console.log(count)
// }

// clearInterval():

// const intervel = setInterval(()=>{
//     console.log("Running....")
// },1000);


// const intervel = setInterval(start,1000);

// let count=6;
// function start(){
//     count--;
//     console.log(count)
// }


// setTimeout(()=>{
//     clearInterval(intervel);
// },6000)

// clearTimeout():

const timer = setTimeout(()=>{
    console.log("hello")
},5000)

clearTimeout(timer)