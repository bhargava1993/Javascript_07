

// for (var i = 0; i <= 5; i++) {

//     setTimeout(() => {
//         console.log(i)
//     },2000);

//     // console.log(i)
// }

// iife:
// ----

// ((a,b) => {
//     // console.log("sample function", a, b)

//     let message = "private";

//     console.log(message)
// })(10,20);


// for (var i = 0; i <= 5; i++) {

//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 2000);
//     })(i)

// }



function sample(a) {

    return function (b) {
       
        return function (c) {
            console.log(a, b, c)
        }
    }

}

sample(10)(20)(30);