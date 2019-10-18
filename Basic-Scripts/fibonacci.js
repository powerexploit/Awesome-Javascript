

/*
 * Function to create an array containing a part of the fibonacci sequence :)
 * 
 * https://en.wikipedia.org/wiki/Fibonacci_number
 * 
 */

function getFibonacciSequence(max) {
    var fib = []; 
    // define first two numbers
    fib[0] = 0;
    fib[1] = 1;

    for (var i = 2; i <= max; i++) {
        // Next number  =  previous  +  1 before previous
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

// Show first 30 Fibonacci numbers
console.log(getFibonacciSequence(30))
