/** Task 1
 * Write a JavaScript code to reverse the array colors without using the reverse method.
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverse = [" "];

for (let i = 0; i < colors.length; i++){
    reverse.unshift(colors[i]);
}

console.log(reverse);


/** Task - 2
 * Write a JavaScript code to get the even numbers from an array using any looping technique.
 */

const numbers = [12, 98, 5, 41, 23, 78, 46];
let num = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        num.push(number)
    }
}

console.log(num);


