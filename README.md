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

