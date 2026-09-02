// this
// -----


// let obj = {
//     balance: 1000,

//     getBalance: function () {
//         console.log("inside getBalance", this.balance)
//     },

//     arrow: () =>{
//             console.log("inside arrow", this.balance)
//     }
// }

// obj.getBalance()
// obj.arrow()

// function getBalance(){

// }

// console.log(obj.balance)
// console.log(obj.getBalance)

user === this

let user = {
    name: "bhargava",

    normal: function () {
        console.log(this.name)
    },

    // arrow: () => {
    //     console.log(this.name)
    // },
  
    arrow(){

        const greet = ()=>{
            console.log(this.name)
        }
        greet();

    },

    nested: {
        name: "sudheer",

        normal: function () {
            console.log(this.name)
        }
    }
}

user.normal()
user.arrow()
user.nested.normal()