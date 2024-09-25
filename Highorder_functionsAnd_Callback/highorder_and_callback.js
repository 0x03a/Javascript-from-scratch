// High Order functions and Callback

// High order function (A function that takes a function as an argument)

function add(a,b)
{
    return a+b;
}

console.log(add(2,3));


// now making an high order function


function add2(a,b,callback) // this is an highorder function, and here the function we are calling is called call back function in this case i.e showresult etc
{
    let result= a+b;
    callback(result)
}

add2(2,4, function(val)
{
    console.log(val)
})

function showresult(result)
{
     console.log(result)
}

add2(3,4,showresult)

add2(4,5,(val)=> console.log(val))


// returning a  function

function add3(a,b,cb)
{
  let result= a+b;
  cb(result);

  return () => console.log(result); // "() => console.log(result)" this is a func which we are returning
}


let resultFunction = add3(2,49, ()=>{}); // '()=>{}' ignoring call back function by doing this, but we can also do both (i.e showing result by call back and return function) but i want to show only return function that's why i am ignoring it
resultFunction(); // and now in this function this function "() => console.log(result)" is assigned