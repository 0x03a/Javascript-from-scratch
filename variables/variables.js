console.log(" testing ");

//Variables
// var , it is a keyword which stands for variable
// those laanguage in which we have to give datatype are known as strongly typed languages
// i.e Datatype varname= value; strongly typed lan

var age = 22;
var num1 = 20;
var num2 = 10;

console.log(num1 + num2);
console.log(age);

// javascript is loosely typed lan, bcz in this 'datatype' dynamically assigns

age = "Inshal";
console.log(age);

// Naming conventions
//Naming conventions are standardized rules or guidelines used to create consistent and meaningful names for variables, functions, classes, and other identifiers in programming. Proper naming conventions help improve code readability and maintainability

// like
// firstname (valid)
// first_name (valid)
// FirstName (valid) (used in Classes) means name like this First 'F' capital and 'N' capital
// firstName (valid)  (pref) cammel casing

//var 1age = 34; // (invalid) var name cannot be start with a number or any symbol it should always be a alphabet
// var a ge=35; // (invalid)
//var a1ge=34;// (valid)
//var !age=34 // (invalid)
//var age!=45; // (invalid)
//var ag#e=45;// (invalid) cannot use symbols in variables name

// var scope is is Global (means it's a global variable)
// for example
if(true)
{
    var name='InshalR'; // now it should be local bcz it is declared in if block
}

// but as we know var (scope is Global) so it will print it outsilde the if block also
//console.log(name); // so we can say it as deprecated usage, you can also see a line on(name) it (uncomment to see the line one name)
// we can also change the value of name in console which further shows that it is global



// ............................ let ....................................

// 'let' is same as 'var' but the only difference is that 'let' scope is local

let age2 = 23;
console.log(age2);
age2= "InshalR"
console.log(age2);

if (true)
{
    let a=43;
    console.log(a);
}
//console.log(a); // it will generate an error bcz 'let' scope is local and the 'a' can be printed only in the if block bcz it's scope is local.
// if you want to choose b/w 'let' and 'var' then recommeded is 'let'

c=45;
console.log(c);
 // and now see no keyword before c and still c is printing. so by default c is global

 // note:
 // let,var & const are keywords and not data types it gives only scope and some constraints to the variables defined

// .............................. const ...........................

// two functions of const
// 1- value assigned to const variable cannot be changed
// 2- const scope is local
// 3- a value must be assigned to const variable


const var1=34;
//var1=45; // will generate an error that it cannot be changed.
console.log(var1);

//const var2; // it will generate an error that a value must be assigned to const
// but if it was 'let' or 'var' they will not generate any error.

let var2;
console.log(var2); // it will not generate an error but will show undefined in console of live server
// but if do this that var2 = 34;

var2= 35;
console.log(var2); // it will be printed successfully

//......................... 

// summary

// var - global
// Re-assign
// can be accessed every where

// let - local
// Re-assign
// only accessed in a block

// const - local
// cannot be Re-assigned
// only accessed in a block










