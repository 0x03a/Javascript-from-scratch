// Arrays High Order Functions

const students= ["Inshal","john","wood"]

function print(n)
{
console.log(n)

}

students.forEach(print) // forEach take function as a parameter and it will send one by one each array value


function print1(n,t)  // if i do this take two arguments
{
console.log(n,t)

}

students.forEach(print1) // now it will send array value plus it's index in the function

students.forEach((val)=> console.log(val)) // it will also print all of the values

// So forEach is a higher order function which takes function as a parameter


// now .map

students.map((val)=> console.log(val))
// .map is same like forEach so what's the difference?

const numbers = [1,2,3,4,5,6,7]

numbers.forEach((val)=> console.log(val*3))

// now let say i Want to store these val in another array

let another_arr= numbers.forEach((val)=> val*2)

console.log(another_arr) // does'nt print bcz the forEach function does not return an array

// now let's use .map

another_arr=numbers.map((val)=>val*2)

console.log(another_arr) // now you will see that .map has return an array in it

function double(val)
{
    return val *2;
}

const double_arrr=numbers.map(double);

    console.log(double_arrr)



// .map return a new another array while .forEach is used for looping over array elements

const numbr =[1,2,3,40,5,6,7,8,9];

let ans= numbr.find((num)=> num ===9) // now this find function returns number if it is correctly find, if it is not find the output will be undefined

console.log("number is:",ans)

ans=numbr.find((num)=>num ===80)

console.log(ans) // the output will be undefined

ans= numbr.findIndex((num)=> num === 40)

console.log(ans) // the index will be printed

console.log(numbr[ans]) // the value at particular index will be printed

let res=numbr.includes(40) // includes return boolean value if the number is present it will return true otherwise false

console.log(res)

// Another function is filter
// now let say we want to filter even numbers from the given array 'numbr'

const newarr=numbr.filter((num)=> num % 2 === 0) //   it will also take a call back function and it will return all even numbers

console.log(newarr) // even number array


// slice function
// this function can return a subarray of an array

const num1_arr= [1,2,3,4,5,6,7]

// now suppose i want elements from 2-5 form num1_arr into another array
// I will use slice function and it will return another array

let num2_arr=num1_arr.slice(1,4+1); // gives index from intial and to the final where you want. remember if your final index is 5 then you have to write 5+1 bcz it automatically does not include it 
// you can also try it by your self

console.log(num2_arr) // output will be 2,3,4,5

num2_arr=num1_arr.slice() // if you give nothing it will include all the elements
console.log(num2_arr) 

num2_arr=num1_arr.slice(2) // it will include all the numbers onward '2'
console.log(num2_arr)


// splice ( removes the element from the array and places into another array)

const num3=[1,2,3,4,5,6,7,8]
let neww_arr=num3.splice(0,3+1) // now range is index 0 - 3  and all the deleted elements comes in newW_arr
console.log(neww_arr)

// now if you see num3 it is without deleted elements
console.log(num3) // output 5,6,7,8






