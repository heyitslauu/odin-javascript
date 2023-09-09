/* 
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

SAMPLE: 

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/


function powerOfN(base, exponent, total = 1) {

    if (exponent <= 0) {
        return total;
    }
    else {
        return powerOfN(base, exponent - 1, total * base)
    }
    
}

console.log("TOTAL:", powerOfN(2, 4)) // 16
console.log("TOTAL:", powerOfN(2, 3)) // 8
console.log("TOTAL:", powerOfN(2, 2)) // 4 
console.log("TOTAL:", powerOfN(2, 1)) // 2
console.log("TOTAL:", powerOfN(2, 0)) // 1