var details = {
    "name": "bhargava",
    "id": 1,
    "salaray": 10000,
    "location": "hindupur",
    "full name":"bhargava reddy"
};

// console.log(Object.keys(details))

// console.log(details);

// console.log(details["name"])
// console.log(details.salaray)
// console.log(details.location)
// console.log(details.id)
// console.log(details["full name"])

// console.log(details["full name"]);

// details["location"] = "Banglore"
// details.education = "MCA";

// delete details.id;

// console.log(details);

var keys = Object.keys(details);

// console.log(keys)
for(var i=0; i< keys.length; i++){

    // details["location"]
    
    console.log(details[keys[i]])

}