/* Fibonacci Filter

Write a function taking a table as a parameter and
returning only the numbers from this table that are part of the
of the fibonacci suite.

For example fibFilter([1,2,3,4,5]) == [1,2,3,5] */

const fibFilter = (array) => {
    const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
    const checkFib = (n) => {
        let value = 0;
        for (let i = 0; value < n; i++) {
            value = fib(i)
        }
        return value === n
    };
    return array.filter(term => checkFib(term))
};

const array = [1, 4, 5, 13, 2, 3, 4, 20, 30, 11, 8, 12];
console.log(fibFilter(array).toString() === [1, 5, 13, 2, 3, 8].toString() ? 'TD04 :: Success' : 'TD04 :: Failed');