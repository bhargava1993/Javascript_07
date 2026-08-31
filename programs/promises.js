
// function fetchUser(a, b) {
//     return new Promise((response, reject) => {
//         response(a+b)
//     });
// }

// // console.log(fetchUser(10,20))

// function order(result){
//     return new Promise((response, reject) => {
//         response(result*2)
//     });
// }


// fetchUser(10,20)
//     .then((result) => {
//         console.log("fetchUser result--------",result)
//             return order(result);
//     }).then((result) => {
//         console.log("22 order result--------",result);      
//     })
//     .catch((error) => {
//         console.log("error-------",error)
//     });



// function step1(callback, b) {
//     // console.log("step1 staring-----------")
//     // console.log("a---", a())
//     // console.log("b---", b)

//     callback();
//     // console.log("step1 ending-------------")
// }

// step1("sudheer","bhargava");

// step1(10,20)

// step1([10,20],[30,40])

function step2(callback) {
    
        callback()
}

function step3(callback) {
   
    callback()
}

step1(() => {

    step2(() => {

        step3(() => {

        })

    })
}, 20)

