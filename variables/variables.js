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

// javascript is loosely typed lan, bcz in this type dynamically assigns

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
//console.log(name); // so we can say it as deprecated usage, you can also see a line on(name) it


 
