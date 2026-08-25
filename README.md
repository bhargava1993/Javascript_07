What is Javascript?
Javascript is a programming language 
used to make web pages interactive and dynamic.

-> javacript is browser level language
 (initially introduced for only frontend)

-> later they has introduced NODE.js to run javascript outside the Browser
(Node.js you can implement backend(api))
-> Node.js is runtime environment.

Easy way to remember:
-----------------------
HTMl - Structure (static/fixed) - Structure of the house
CSS - Design (styles/layout)  - paint, furniture, decoration
Javascript - Behavior/Actions (dynamic) - switches, doors, lights working

----------------------

file extensions:
-----------------

.html --> index.html
.css ---> style.css
.js --->sample.js

symbols:
---------
``  - backtick
{} - curly bracket
[] - angular bracket
() - parantasis
------------------------------

concepts:
--------
Javascript
1. variables (var, let, const)(Hosting/ TDZ)
2. Data types
3. operators
4. conditions (if/else)
5. loop
6. functions (duplication)

advanced (ES6+)
-------------
deep copy / shallow copy
Array methods
Objects(key: value)

Spead operations
rest operations
destructure

sync/Async:
promises / Async-await

fetch apis
----------------------

addtions
subtraction
multiplication - *
division  - /
modulo division -%
factors
prime
even/add

------------------------------

Data Type:
----------
example:
---------
rice

tomoto
mirchi

cloths

water
milk

computer data:
--------------
numbers-123
alpha-abcds
symbols - {},[],@,!,#

name = "bhargava"
"water","rice", "koushik","Arvind","veg","non-veg"

'bhargav',"rice" ----> string

"123", '10.6', '10'

123 - int, real,
10.6 - float, decimal

true, 1 - success
false, 0 - failure


---------------------------

Data types:
------------
Number
Strings - "", '',
Boolean - true,1, false,0
undefind
Null
symbol

Array - [],  multiplevalues, diffrent datatypes
objects: {key : value}
----------------------------


data types:
----------------

1. primitive types   - simple, immutable values
2. non-primitive types - Array,Objects (dynamic), complex strucutre, function

variables:
-----------
variables are used to store data

var

-------------
ES6
----
let
const

-------------------------------
crud:  create, read, update, delete

Array Methods:
--------------

By using index values you can able to read the values

1.push - to add values at the end
2.pop - remove the values at the end
3.unshit - to add values starting
4.shift - remove the values from starting
5.length - it will give total numbers of values avaliable in array
6.revers
7.sort
8.indexof
9.include
10.findIndex

advanced:
---------
11.foreach
12.map
13.filter
14.reduce

15.slice
16.splice

17.flat
18.concat


--------------------------------------

object:
-------
to read values in Object .(dot) or ["id"]

delete obj.id;


keys:  Object.keys(obj),
       Object.values(obj)



loops:
------
start = 0
end = 10

 for(initilization/start; condetion(stop) ; increament/decreament){
     //logic
 }
 ----------------------------

operators:
----------
1. Arthmetic operators: 
    +, -, *, /, %, **

2. increment/ decrement operators
    ++, --

    i++, i--   ==> post-increment --> increment after use
    ++i, --i   ==> pre-increment --> increment before use

3.comparion operator

==,===, !=, !==, < ,> , <=, >=

=   --> - assigmenet operator

to check equal value:
----------------------
==  --> 10 == "10"
=== -->  10 === 10 (strict checking)

not equal:
-----------
!=
!==

< - lessthan  --> 10<5
> - graterthan --> 10>5

<=  - lessthan or equal
>=  - graterthan or equal
---------------------------------------------


conditional statement:
-------------------------
simple:
----------
if(condition){
    logic
}
--------------

simple if/else:
---------------

if(condition){
    success logic
}else{
    failure logic
}

ladder if-else:
---------------
if(condition){

}else if(condition){

}else{

}
-----------------------------------------------

logical operators:
-------------------

&& --> AND   --> all condtions should succeed
|| --> OR  --> any one condition suold succeed
!  --> NOT  --> opposite


success  success =>success

s s s s s s s f


&&

true && false --> false

true && true  --> true


ture || false || false --> true

!true ==> false
!false ==> true
------------------------------

Nullish :
---------
??

-----------------

optional chaining(?.) --> safty checking
------------------------
safely access nested properties

---------------------------------------------------

Function:
---------

syntax:
--------
without argumnets:
-------------------
function function_name(){
    
    //business logic

    return;
}

function_name();

with arguments:
---------------

function marriage(bride, groom, brother, father){

    return;
}



marriage("boy","girl","brother");

------------------------------------------------

variables:     var, let, const
-----------
var name = "bhargava";

name="harsha";

2015
ES6:
----
 let
 const

var  ---> redeclare, reassign --> both possible
let --> reassing ---> value updatation possible
const --> it is fixed, both not possible

Hosting -> var, function
TDZ (temporal dead zone)-->  let , const

use strict;

-------------------------------

conditional statements:
----------------------

1. simple if/else
2. nested if/else
3. ladder if/else
4. Ternary Operator

synax:
------
if/else
-------------
if(condition){
 success
}else{
    failure
}

nested if/else:
----------------

if(condition){

    if(condition){
         if(condition){

         }else{

         }
    }
}else{

}

Ladder if/else:
----------------

if(){

}else if(){

}else if(){

}else{

}

Ternary Operator/ teny if/ short if/else:
------------------------------------------
syntax:
-------
(condition)?"success":"failure";
------------
let time=7;

if(time === 7){
    console.log("Good morninng);
}else{
    console.log("---")
}

example:
--------
let time=7;
time === 7 ? console.log("Good morninng): console.log("---");


scope of variables:
--------------------
Gloabl ---> anywhere you can access
{} (block) --> inside block only you can access
functional --> only inside function

Looping statements:
-------------------
1. for --> loop

for(let i=0;condition;i++){
    code block
}

2. for...of -->loop

for(let item of array){
    code block
}

3. for...in -->loop

for(let key in object){
    code block
}

4.while -->loop

while(condition){
 code block
}

5.do...while -->loop

do{
    code block
}while(codition)


different types of functions:
----------------------------
1. normal function/ named function
2. arrow functions / es6
3. function expression/ es6
4. anonus function/name less function
5. higher order function

6. IIFe
7. function curring

8. callback function
9. recursive funtion -  A resursive function is a function that calls itself to solve a problem step by step

pure functions/ improve pure function
