/* 
The collatz sequence is a conjecture in mathematics that follows a sequence. 
This sequence is defined below: 

The sequence begins with any positive integer, say n. 
If the integer n is even, the next number in sequence would be n/2.
If the integer n is odd, the next number in sequence would be 3n+1. 

*/


function collatzRecursion(n, steps = 0) {
    if (n == 1) {
        return steps;
    } 
    else if ( n % 2 == 0) {
        return collatzRecursion(n / 2, steps + 1)
    }
    else {
        return collatzRecursion( (3 * n) + 1, steps + 1)
    }
}

console.log(collatzRecursion(3))