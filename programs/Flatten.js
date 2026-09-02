let array = [10, 20, [1, 2, 3], 90, [5, 6, [100, 200,[1000,2000]]], { name: "bhargava" }];

// console.log(array.flat(Infinity))

function flatArray(arr) {

    let resultArr = []

    for (let item of arr) {
        // console.log("input array item---", item, Array.isArray(item));
        if (Array.isArray(item)) {
            resultArr = resultArr.concat(flatArray(item))
        } else {
            resultArr.push(item)
        }

    }

    return resultArr;

}

console.log(flatArray(array));



// let obj = {
//     name:"bhargava",
//     details: {
//         companyDeatils: {
//             companyName: "zensar",
//             city: "bangalre"
//         },
//         city: "hindupur"
//     }

// }

