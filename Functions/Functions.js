// Functions 

// function is a block of code that performs a particular task

function sayhello()
{
    console.log("Hello Inshal")
}

sayhello() // calling function

function addtwonum(a,b,c) // in function these three value in parnethesis are argument
{
 console.log(a+b+c)
}

addtwonum(5,10,7) // and these three values are parameters

function muiltiplyTwonum(num1,num2)
{
    console.log(num1*num2)
}
muiltiplyTwonum(2,3)

// return function

function multiply(num1,num2)
{
    return num1*num2
}

let result= multiply(3,4)
console.log(" Hey user the result is:",result)

// function that accepts infinite arguments

function  accepts_infinite_Arg(a,b,...manyMoreAgrs)
{
    console.log(a,b, " and many more", manyMoreAgrs)
}

accepts_infinite_Arg("one","two","three","four","five")


//  "one" "two" and many more
// ["three", "four", "five"] <-- an array

// Another way of doing it

function  infinite_Arg()
{
    console.log(arguments)
    let ans=0;
    for(let i=0; i< arguments.length;i=i+1)
    {
         ans= ans + arguments[i]
    }

    return ans
}

console.log(infinite_Arg(1,2,3,4,5,6))

// another way of doing it

function  inf_Arg(...numbers) // spread operator
{
    console.log(numbers)
    let ans=0;
    for(let i=0; i< numbers.length;i=i+1)
    {
         ans= ans + numbers[i]
    }

    return ans
}

console.log(inf_Arg(1,2,33,44,55))

