
// function getUser() {

//     return new Promise((resolve, reject) => {
//         const status = true;

//         setTimeout(() => {
//             const user = {
//                 "id": 101,
//                 "name": "sudheer",
//                 "education": "mtech",
//                 "location": "anathpur"
//             }
//             if (status) {
//                 resolve(user)
//             } else {
//                 reject("user data not found");
//             }
//         }, 2000)
//     })
// }

// function getOrders(userDetails) {
//     return new Promise((resolve, reject) => {
//         let status = true;

//         setTimeout(() => {
//             const orders = [
//                 {
//                     "id": 501,
//                     "produtname": "Laptop",
//                     "price": 50000
//                 },
//                 {
//                     "id": 502,
//                     "produtname": "Mobile",
//                     "price": 30000
//                 },
//             ];

//             if (status) {
//                 resolve({ orders, userDetails })
//             } else {
//                 reject("products not found");
//             }
//         }, 2000)

//     })
// }

// function getPayments(orderId, name) {
//     return new Promise((resolve, reject) => {
//         const status = true;

//         setTimeout(() => {
//             const paymentDetails = {
//                 orderId: orderId,
//                 userName: name,
//                 amount: 75000,
//                 status: "Success"
//             }
//             if (status) {
//                 resolve(paymentDetails)
//             } else {
//                 reject("payment failed");
//             }
//         }, 2000)

//     })
// }

// async function run() {
//     try {

//         const user = await getUser();
//         // console.log("user----",user)
//         const orderDetails = await getOrders(user);
//         //  console.log("orderDetails----",orderDetails)
//         let { orders, userDetails } = { ...orderDetails }
//         let paymentDetails = await getPayments(orders[0].id, userDetails.name);
//         // console.log("paymentDetails----",paymentDetails)
//         return paymentDetails;
//     } catch (error) {
//         console.log("error---", error)
//     }

// }

// run()
//     .then((result) => {
//         console.log("result---", result)
//     })


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((result) => result.json()
//     ).then((data)=>{
//         console.log("data---",data)
//     }).catch((error) => {
//         console.log("error--", error);
//     })

// async function fetchData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         response = await response.json();
//         console.log("response---", response)

//     } catch (error) {
//         console.log("error--", error);
//     }

// }
// fetchData();
// ------------------------------------------------



// async function fetchUser() {
//     try {
//         let status = true;

//          setTimeout(() => {
//             const user = {
//                 "id": 101,
//                 "name": "sudheer",
//                 "education": "mtech",
//                 "location": "anathpur"
//             }

//             console.log("user----",user)
//         }, 2000);

//     } catch (error) {
//         console.log("fetchUser fn error---", error);
//     }
// }

// fetchUser();

// --------------------------------------------------


// All:
// ---

// 1p - 2days
// 2p - 2days
// 3d - 2days

// function task1() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("task1 completed")
//         }, 5000)

//     })

// }

// function task2() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("task2 completed")
//         }, 4000)

//     })
// }

// function task3() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             reject("task3 completed")
//         }, 3000)

//     })
// }

// async function run() {
//     try {
//         let res1 = await task1();
//         console.log("result1----", res1)
//         let res2 = await task2();
//         console.log("result2----", res2)
//         let res3 = await task3();
//         console.log("result3----", res3)
//     } catch (error) {
//         console.log("error----", error)
//     }
// }
// run()

// All:
// ----

// async function All() {
//     try {

//         let [result1, result2, result3] = await Promise.all([
//             task1(),
//             task2(),
//             task3()
//         ])
//         console.log("result---", result1)
//         console.log("result---", result2)
//         console.log("result---", result3)

//     } catch (error) {
//         console.log("error----", error)
//     }
// }
// All();


// race:
// -----

// async function Race() {
//     try {

//         let result = await Promise.race([
//             task1(),
//             task2(),
//             task3()
//         ])
//         console.log("result---", result)
        
//     } catch (error) {
//         console.log("error----", error)
//     }
// }
// Race();


// async function Race() {
//     try {

//         let result = await Promise.race([
//             task1(),
//             task2(),
//             task3()
//         ])
//         console.log("result---", result)
        
//     } catch (error) {
//         console.log("error----", error)
//     }
// }
// Race();


// async function allSettled() {
//     try {

//         let result = await Promise.allSettled([
//             task1(),
//             task2(),
//             task3()
//         ])
//         console.log("result---", result)
        
//     } catch (error) {
//         console.log("error----", error)
//     }
// }
// allSettled();
// -------------------------------------

