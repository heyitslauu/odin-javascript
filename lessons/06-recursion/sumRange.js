/* 

Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/


function sumRange(range, total = 0) {
    if ( range <= 0) {
        return total;
    }
    else {
        return sumRange(range - 1, total + range)
    }
}

console.log(sumRange(3)) // 6
console.log(sumRange(10)) // 55
console.log(sumRange(2)) // 3
console.log(sumRange(5)) // 15
console.log(sumRange(7)) //28