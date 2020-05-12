function p(n) //function declared
     {
    for (var i =2; i< n; i++) //loop for prime number
     {
        if (n%i === 0)  //condition for being a prime number
        {
            return false;
        }
        return true; //if condition is false then this will execute
     }
}
console.log(p(44)); // check 44 is prime or not