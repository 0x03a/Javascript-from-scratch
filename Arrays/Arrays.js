// Arrays

// Arrays (When you want to store multiple elements in one variable)

const Students = [ "Inshal","John","Cena"]

console.log(Students)

// if i want to se array's length then
console.log(Students.length)

console.log(Students[0])
console.log(Students[1])
console.log(Students[2])

// we can also  change value in arrays
Students[1]="Kalper"
console.log(Students[1])

// now you are thinking that array is of const type , how can we change the values of array?
// if we do this

// Students = {"not","what"} ERROR // see if you try to re-intialize it it will generate an error
// more over we can add, delete, and change the value of already intialize array(When it is const)

// And now we can also push values in arrays

Students.push(" hello","why")
Students.push("what")
console.log(Students)


// In other languages like C++, JAVA etc Array is homogenous means all the data in array of same type 
// But in JAVASCRIPT you can store all datatypes in arrays, means it is heterogenous

const myArray = [1,true,"Inshal","@"]
console.log(myArray)
myArray.push({name: "BABA"}) // we can also push objects in arrays

console.log(myArray[4].name)

// we can also find the index of value 

console.log(myArray.indexOf(true)) // index is 1
console.log(myArray.indexOf(2)) // if the value is not present then it will return '-1'

console.log(myArray)

myArray.pop() // it will delete the element from the end

console.log(myArray)

const array2=[]
array2.pop() // no error it will run
array2.push(1)
console.log(array2)

const array3=[]
array3.push("Inshal")
array3.push("InshalR")
array3.push("InshalRR")

array3.reverse() // it will reverse the whole array 

console.log(array3)

// we can also do this

console.log(array3[1]="RInshalR") // here it will change the value, but for correct result you have to again do console.log

console.log(array3) // here the value of index 2 has been changed