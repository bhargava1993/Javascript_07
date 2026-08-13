studentId = 1;

var studentIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null, "bhargava", "sudheer", "koushik", "soumya"];

firstName = "bhargava";

var studentNames = ["bhargava", "sudheer", "koushik", "soumya"]


// console.log("studentId----", studentId);
// console.log("firstName----", firstName);

// console.log("studentIds----", studentIds);
// console.log("studentNames----", studentNames);

// console.log("studentId----",typeof studentId);
// console.log("firstName-----",typeof firstName);

var lastName = null;

// console.log("lastName----",typeof lastName)

var status = true;
var inactive = false;

// console.log("status------",typeof status);
// console.log("inactive------",typeof inactive);

var studentDetails = [1, 10, 36, 14, 100, 445, 60, "bhargava", "Rajashekara"]

var marks = [60, 70, 90, 100, 45, 50, 445]

// objects: {key : value}
// ----------------
var bhargavaDeatils = {
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "bhargava",
    "fathername": "Rajashekara"
}

var sudheerDeatils = {
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "sudheer"
}

var deepikaDeatils = {
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "sudheer"
}

var studentDeatils = {
    "deepikaDeatils": deepikaDeatils,
    "sudheerDeatils": sudheerDeatils,
    "bhargavaDeatils": bhargavaDeatils
}

var studentDetailsArray = [{
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "sudheer"
},
{
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "sudheer"
},
{
    "telugu": 60,
    "english": 70,
    "maths": 90,
    "social": 100,
    "totalMarks": 445,
    "studentName": "sudheer"
}
]


// console.log("studentDetailsArray----", studentDetailsArray);


// !,@, #, *, +, -

var bhargava = Symbol("bhargava");

console.log(typeof bhargava)

var a=10,b=10;
var result = a+b;
console.log(result);
