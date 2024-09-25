// Arrow Functions

// most commonly used in js and these are below differences from normal function

// 1- syntax

const sayhello = () => {   // arrow functions
    console.log("hi")
}

sayhello();

const add = (a,b) =>{
  //  console.log(a+b)
    return a+b
}

console.log(add(2,3))
// if like we have one statement in function we can write it as

const add2 = (a,b) => a+b // one arrow liner function (more linear approach)

console.log(add2(1,2))






// 2- arguments

/*function  infinite_Arg()
{
    console.log(arguments)
    let ans=0;
    for(let i=0; i< arguments.length;i=i+1)
    {
         ans= ans + arguments[i]
    }

    return ans
}
 This argument object cannnot be used in Arrow function
 
console.log(infinite_Arg(1,2,3,4,5,6))
*/

// now for infinite arguments we will use  spread operator

const infinite_arg = (...num) => {
     let result=0;

     for(let i=0; i< num.length;i=i+1)
     {
        result = result + num[i];
     }

     return result;
}

console.log(infinite_arg(1,2,4,5,6,7,8,9))

// 3- Hositing

// normal func
// Hositing is that if you define function later or before it will called


sayhi()

function sayhi()
{
    console.log("hi what")
}


//sayhi()

// arrow func

// and this is avialable in only normal function not in arrow function

//hi(); will generate error here

const hi = () => console.log("hello InshalR")

hi()// run successfully

// 4- This Keyword

// normal func
const obj ={

value: 20,
myfunction: function()
{
    console.log(this.value) // now here in normal function 'this' is pointing to the object
}
}

obj.myfunction()

// arrow func



const obj2 ={

    value: 20,
    myfunction:  () => {
        console.log(this.value) // now here in arrow function 'this' is pointing to the windows not the object you can also see in console
    }
    }
    
    obj2.myfunction()
