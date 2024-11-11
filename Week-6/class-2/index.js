// map, filter, arrow fns

function sum(a, b) {
    return a + b;
}

// arrow fn
const sum1 = (a, b) => {
    return a + b;
}

// const ans = sum(1, 2);
// console.log(ans);

// given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]
const input = [1, 2, 3, 4, 5];

// for(let i=0; i<input.length; i++) {
//     input[i] *= 2;
// }

function transform(i) {
    return i * 2;
}

// map
const ans = input.map(transform);
// console.log(ans);

// filtering
// given an input array, give back all the even values from it
const result = input.filter((n) => {
    if(n % 2 == 0) return true;
    else return false;
});
console.log(result);