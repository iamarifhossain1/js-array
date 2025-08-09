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

/** Task - 3
 * Use a for...of loop to concatenate all the elements of an array into a single string.
 */

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let storeArray = [];

for (const name of names) {
    storeArray.push(name);
}

console.log(storeArray.join(""));


/** Task - 4
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 */

const statement = 'I am a hard working person';
let str = statement.split(' ');
let rev = [];
for (const words of str) { 
    rev.unshift(words);
}

console.log(rev.join(' '));

/** Task - 5
 * Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
 */

const nums = [1, 2, 3];
const newNums = [];
newNums.push(99, 2, 3);
console.log(nums);
console.log(newNums);


/** Task - 6
 * Given an array of student objects, print each student’s name and marks.
 */

const students = [
    {Name: 'John', Marks: 85},
    {Name: 'Alice', Marks: 90}
]

for (const student of students) {
    const newStudent = student;
    const studentInfo = 'Name: ' + newStudent.Name + ', ' + 'Marks: ' + newStudent.Marks;
    console.log(studentInfo);
    
    
}


/** Task - 7
 *  Given a 2D array, update the value at second row first item to 99 and print the updated array.
 */

let values = [
     [1, 2],
     [3, 4],
     [5, 6]
]

values[1][0] = 99;
console.log(values);
