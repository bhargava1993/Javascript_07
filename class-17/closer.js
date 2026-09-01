
// function outer(){
//     let firstname = "Harsha";
//     let salary = 1000;

//     function inner(){
//         //  console.log("inner function---",firstname)
//         return {firstname, salary};
//     }

//     return inner;
  
// }

// // console.log("name-----",firstname)
// // outer()

// const myFn = outer();
// console.log(myFn())



// function createCounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// const counter = createCounter();

// counter();
// counter();
// counter();



function createBanckAccount(){
    let balance =1000;

    function withdraw(amount){
            balance = balance - amount;
    }

    return {
        getBalance : function (){
            return balance;
        },

        deposit: function (amount){
            balance = balance + amount;
        },

        withdraw
    }
}

const account = createBanckAccount();

console.log(account.getBalance())

account.deposit(500)

console.log(account.getBalance())

account.withdraw(200);
console.log(account.getBalance())