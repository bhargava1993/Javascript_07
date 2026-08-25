// string methods:

// 1.length

// let string = "Javascript";

// console.log(string.length)

let firstName = " bhaRgava";

// console.log(firstName.toUpperCase())

let firstNameU = "  BHARGAVA  ";

// console.log(firstNameU.toLowerCase().trim())

// trim()
// console.log(firstNameU.trim())


// if(firstName.toLowerCase().trim() === firstNameU.toLowerCase().trim()){
//     console.log("Both are equal")
// }else{
//     console.log("Both are not equal")
// }


// let skill = "I am learing JavaScript";

// console.log(skill.charAt(2))

// console.log(skill.includes("learing"))

// console.log(skill.replace("learing","practicing"))

// console.log(skill.replaceAll("a","A"))


// let str = "applebananamango";

// console.log(str.split("").reverse().join().replaceAll(",",""))


// let string = "mAdam ";
// let reverseS = string.split("").reverse().join().replaceAll(",", "");

function checkPalindrome(string) {

    let reverseS = string.split("").reverse().join().replaceAll(",", "");

    if (string.toLowerCase().trim() === reverseS.toLowerCase().trim()) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }

}

console.log(checkPalindrome("madam"))
