// LOOPS 

// For
// While
// Do While

// loops ( doing a thing in a repeated way)

// For loop (used when you know how many times to loop)

for(let i=1; i<=10 ; i=i+1)
{
    console.log("Inshal",i)
}

// While ( If you don't know in how many times you will complete your task)

let intial_pos=0;

let house=100
while(intial_pos != house)
{
     intial_pos=intial_pos+1;
     console.log('Step Taken '+ intial_pos);
}


// do while is same like while but dfference is that it will first run its iteration then it will check
// now intial_pos is 100

do{
  console.log("first iteration without condition checked")

}while(intial_pos != house)


// another do while exmaple


let number=50;
let guess=0;
//note: prompt always return string

do{
  guess=parseInt(prompt("Guess a Number"))

  if(guess == number)
  {
    guess=0;
    console.log("YOU ARE THE WINNER")
  }

}while(guess!=0)

// now when we try the same code using while loop then this happens

while(guess !=0) // in this case the condition never becomes true
{
    guess=parseInt(prompt("Guess a Number"))

  if(guess == number)
  {
    guess=0;
    console.log("YOU ARE THE WINNER")
  }
}