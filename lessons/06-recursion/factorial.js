/* 
Write a function that returns the factorial of a number. 
As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. 
The factorial of 1 is just 1.

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/


function factorial(n, total = 1) {

    if ( n <= 0) {
        return total;
    }

    else {
        return factorial(n - 1, total * n)
    }
}


console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(2))
console.log(factorial(1))
console.log(factorial(0))
