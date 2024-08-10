// Find sum of 2 numbers
// function sum(a, b) {
//     return parseInt(a) + parseInt(b);
// }

// let ans = sum("20", 30);
// console.log(ans);

// Find sum from 1 to a number
function sum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
    // return n * (n-1);
}

const ans = sum(10);
console.log(ans);
