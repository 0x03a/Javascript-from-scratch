// Conditional statements and Switch


// ---------COnditional Statements-----------
// if you have done c++,java then it's working is same like them
// if-else

const age=22;

if( age >= 18 )
{
    console.log(" yes you can vote");
}
else
{
    console.log(" you can't vote");
}

// if-else if-else

if( age >= 18 )
    {
        console.log(" yes you can vote");
    }
    else if (age < 18)
    {
        console.log(" you can't vote");
    }
    else
    {
        console.log(" You are an adult")
    }

// only one conditional will run


// Ternary Operator ( recommened only if you have one condition, if their are more then use if-else if-else)

age==18 ? console.log(" you are a teenager") : console.log("not a teenager")

//  or

let result= age ==22 ? 'true': 'false'
console.log(result)



//------------Switch Cases----------------

const option =1;

switch(option)
{
    case 1 :{
            console.log("Hi")
    }
    break;
    case 2 :{ 
        console.log("bye")
    }
    break;
    default: console.log("Inbalid Option")
}


// can be done with out brackets like below

switch(option)
{
    case 1 :   
            console.log("Hi")
    break;
    case 2 :   
            console.log("bye")
    break;
    default: console.log("Inbalid Option")
}


// another example

let a=40
let b=50
let opt="+"

switch(opt)
{
    case "+" : console.log("Answer is",":",a+b)
    break;
    case "-" : console.log("Answer is",":",a-b)
    break;
    case "*" : console.log("Answer is:",":",a*b)
    break
    case "/" : console.log("Answer is","",a/b)
    break
    case "%" : console.log("Answer is",":",a%b)
    break
    default : console.log( "Inavlid input")
}

// we can also do this with if-else if-else but this not look stable, so switch is recommended in these type of cases