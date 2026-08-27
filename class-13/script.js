// promise:

// const promise = new Promise((resolve, reject) => {

//     const success = true;
//     console.log("1st statement");

//     setTimeout(() => {
//         if (success) {
//             resolve("10th class passed got 575 marks")
//         } else {
//             reject("failed")
//         }
//     }, 5000);

// });

// promise.then((result) => {
//     console.log("result---", result);
// }).catch((error) => {
//     console.log("error---", error);
// })

// ---------------------------------------

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((result) => result.json()
//     ).then((data)=>{
//         console.log("data---",data)
//     }).catch((error) => {
//         console.log("error--", error);
//     })

// --------------------------------------------


// function getUser(a, b, name) {

//     return new Promise((resolve, reject) => {

//         // console.log("task 1")
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then((result) => result.json()
//             ).then((data) => {
//                 console.log("task 2")
//                 resolve(data)
//             }).catch((error) => {
//                 reject(error);
//             });

//         // console.log("task 3")
//         // console.log("a,b,name----", a, b, name);
//     });


// }

// getUser(10, 20, "bhargava").then((result) => {
//     console.log("result----", result)
// }).catch((error) => {
//     console.log("error----", error)
// })


// -----------------------------------------


// getUser()
// getOrders()
// getPayments()

function getUser() {

    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            const user = {
                "id": 101,
                "name": "sudheer",
                "education": "mtech",
                "location": "anathpur"
            }
            if (status) {
                resolve(user)
            } else {
                reject("user data not found");
            }
        }, 2000)
    })
}

function getOrders(userDetails) {
    return new Promise((resolve, reject) => {
        let status = false;

        setTimeout(() => {
            const orders = [
                {
                    "id": 501,
                    "produtname": "Laptop",
                    "price": 50000
                },
                {
                    "id": 502,
                    "produtname": "Mobile",
                    "price": 30000
                },
            ];

            if (status) {
                resolve({ orders, userDetails })
            } else {
                reject("products not found");
            }
        }, 2000)

    })
}

function getPayments(orderId, name) {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            const paymentDetails = {
                orderId: orderId,
                userName: name,
                amount: 75000,
                status: "Success"
            }
            if (status) {
                resolve(paymentDetails)
            } else {
                reject("payment failed");
            }
        }, 2000)

    })
}

// Promise chaining
// getUser()
// getOrders()
// getPayments()



getUser()
    .then((user) => {

        return getOrders(user);
    })
    .then((orderDetails) => {

        let { orders, userDetails } = { ...orderDetails }
        return getPayments(orders[0].id, userDetails.name);
    })
    .then((paymentDetails) => {
        console.log("paymentDetails---", paymentDetails);
    })
    .catch((error) => {
        console.log("error---", error)
    });


// nested promises

// getUser()
//     .then((user) => {
//         console.log("user---", user);

//         getOrders(user)
//             .then((orderD) => {
//                 console.log("orderDetails---", orderD);

//                 let {orders, userDetails} = {...orderD}

//                 getPayments(orders[0].id, userDetails.name)
//                     .then((paymentDetails) => {
//                         console.log("paymentDetails---", paymentDetails);
//                     }).catch((error) => {
//                         console.log("order error---", error)
//                     })
//             }).catch((error) => {
//                 console.log("order error---", error)
//             })

//     }).catch((error) => {
//         console.log("getuser error---", error)
//     })


// getOrders()
// .then((orders) => {
//     console.log("orderDetails---", orders);
// }).catch((error) => {
//     console.log("order error---", error)
// })

// getPayments()
//     .then((paymentDetails) => {
//         console.log("paymentDetails---", paymentDetails);
//     }).catch((error) => {
//         console.log("order error---", error)
//     })

