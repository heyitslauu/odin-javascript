function fib(n) { 
    const fibArray = []
    if ( n == 0 ) {
        fibArray.push(0)
        return fibArray
    }
    else if ( n == 1) {
        fibArray.push(0)
        fibArray.push(1)
        return fibArray
    }
    else {
        const fibArray = [0,1]
        let first = fibArray[0];
        let second = fibArray[1];
        let next = 0;

        for(i = 2; i < n; i++) {
            next = first + second;
            first = second;
            second = next;

            fibArray.push(next)
        }
        return fibArray;
    }
}

console.log(fib(9));

/* ChatGPTer solution*/

// function fib(n) {
//     const fibArray = [0, 1];
  
//     if (n <= 1) {
//       return fibArray.slice(0, n + 1);
//     }
  
//     for (let i = 2; i <= n; i++) {
//       fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//     }
  
//     return fibArray;
//   }
  
//   console.log(fib(9));


/* 
fibsRec(9)

0 1 1 2 3 5 8 13 21

*/
function fibsRec(n) {
    if (n < 2) {
        return [0,1]
    }
    else {
        let arr = fibsRec(n-1)
        arr.push(arr[arr.length-1]+arr[arr.length-2])
        return arr
    }
}

console.log(fibsRec(6))