const express = require("express");

const app = express();

app.use(express.json());

app.get("/sample", (req, res) => {

    console.log({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })

    res.send({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    });

});

app.post("/add", (req, res) => {
    console.log(req.query)

    let {first, second} = req.query
    console.log(typeof first);
    console.log(typeof second);

    let result = +first + +second;
    res.send({result: result});
})

app.listen(3000, () => {
    console.log("server is running on 3000 port");
})

//http://localhost:3000/add


// function add(a,b){
  
//     return a+b;
// }

// add(10,20)