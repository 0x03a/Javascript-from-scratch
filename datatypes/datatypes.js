// Datatypes in javascript

/*
- Numbers
- Strings
- Booleans
- NULL
- Undefined
- Objects
*/


// 1- Numbers
// here in javascript there is no concept of integer, float, long etc
// just simple like -> " let num=3.14 " which is a number

let num1=3.14;
let num2=14;

console.log(num1+num2)


// 2- Strings

// strings are alphanumerics (Alphanumerics refer to characters that include both letters and numbers.)
// strings can be written in double quotes also in single quotes too.
const Name ='Inshal' 
const lastName="R"
console.log(Name+lastName) // concatinating two strings

console.log(1+'1'); // output will be 11 bcz it is concatinating

// but if i do 

console.log('123' * 1) // output is 123 now in JS if we multiply a string with a number it will convert that string into number
console.log('523'* 6) // output will be 3138 
console.log('dd'*4); // output is 'NaN'

console.log('a'+1)



/*
When you attempt to multiply a string ('dd') by a number (4), JavaScript tries to perform arithmetic on the string, which is not possible.
As a result, it returns NaN, which stands for "Not-a-Number," indicating that the operation is not valid.
*/

// we can also do this
console.log("dd".repeat(4)); // Output: dddddddd , we can only do this for strings

console.log("2".repeat(3)*3) // ouptut will be : 666


/*
string '1' + '1' - string
string + number - string
string * number - number

*/

// 3- Booleans
// In boolean there are only true and false which means that 1 and 0;

let isLoggedin= true;  

console.log(isLoggedin) // output will 'true'

if(isLoggedin) // true means 1 the condition is true, if it was false it then will not be executed
{
    console.log("hello")
}

/*
true -> 1
false -> 2
*/

let flag= false;
console.log(false + 10); // output will be 10 bcz '0 + 10 = 10'


// 4- NULL

let space= null; // meaning that it is occuping some space and later you can replace null with some value
// good practice to intialized the variable with null, if you want not to giving the variable an intial value 

console.log(space); // output will be null

// 5- UNDEFINED

let space1; // by default it is undefined
// not recomended to use it

// difference b/w null and undefined

//- null is used when you want to intentionally specify that a variable has no value.
//- undefined is typically the default state of a variable that has not been assigned a value.
//Type:
//    null is an object type.
//    undefined is its own type, undefined.
//Default vs. Manual Assignment:
//   undefined is the default state when a variable is declared without an assignment.
//   null is manually assigned to indicate that the variable is empty or will be filled later


// see the code below 
/*
CODE:

let user = null; // User is currently not assigned an object but may be assigned one later.
let age; // Age is declared but not assigned a value, so it is undefined.

console.log(user); // Output: null
console.log(age);  // Output: undefined
*/


/* Best Practices

- Use null to represent an intentional absence of value, especially when you expect to replace it later.
- Avoid assigning undefined manually; instead, let it naturally represent uninitialized variables

*/


// -5 Objects

/* In different languages like c++ etc. In them objects means that they are objects of different classes
but in javascript the meaning is different that we have key values pairs
*/

const person= {
    firstName: "Inshal",
    lastName: "R",
    age: 20,
    isLoggedin: false, // here in last with out comma it will run, but writing comma here is a good practice
}

console.log(person)
// To access only single property i can do this below
console.log(person.firstName)

console.log(person.firstName + person.lastName + person.age + person.isLoggedin) // we can also do this


/*

const person2= {
    firstName: "Inshal",
    lastName: "R",
    age: 20,

}
    an error will be generated if you write any keyword in the object like
    let firstName: "Inshal" -> will generate an error

*/


/*-------------------Operators--------------
-> +
-> -
-> *
-> /
-> %
*/

console.log(10%10)

//..................

// typeof operator

console.log(typeof("123"*2)) ; // ouput is 'number', it will tell the type

console.log(typeof(4.45))// outputL 'number'

console.log(typeof(true)) // output: 'boolean'