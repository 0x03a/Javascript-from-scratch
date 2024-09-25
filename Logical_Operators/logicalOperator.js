// Logical operators

// AND (All conditions must be full filled)
// OR (Atleast one condition should be true)
// NOT (if condition is true it will convert it into false)


// AND  (&&)
     let age = 20;
     const gender = 'male'

     if(age >= 18 && gender == "male")
     {
        console.log(" you are adult male")
     }


// OR (||)

    age=16;

     if (age >=18 || gender == 'male')
     {
          console.log("adult")
     }

// Note:
    // double equal returns boolean value
     let isMale = gender == "male"
     console.log(isMale)

// NOT (!)

const num= 5;

if(num % 2 !=0)
{
 console.log("ODD");
}

if(!(num % 2 == 0))
{
   console.log("Odd")
}
else
   console.log("Even")



