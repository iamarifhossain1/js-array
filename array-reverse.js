// For Loop

const numbers = [1, 2, 3, 4, 5];
const reverse = [];
// for (let i = 0; i < numbers.length; i++) {
//     reverse.unshift(numbers[i]);
// }
// console.log(reverse);



// let num = [2, 4, 6, 8, 10];
// const rev = [];

// for (let i = num.length-1; i >= 0; i--) {
//     rev.push(num[i]);
// }

// console.log(rev);

// For of Loop 

for (const num of numbers) {
    reverse.unshift(num);
}

// Using reverse method

console.log(numbers);
numbers.reverse();
const result = numbers.reverse();
console.log(result);

