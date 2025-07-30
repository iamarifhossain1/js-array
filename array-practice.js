/** Task - 1
 * Declare an array with 5 elements containing fruits
 * console log the 3rd index element
 * change the value of the 2nd index element to jambura
 * console log the final array
 */

const fruits = ['Mango', 'Apple', 'Watermelon', 'Apple', 'Pineapple'];
console.log (fruits[2]);

fruits[1] = 'Jambura';
console.log (fruits);


/* Task - 2
 * Declare an array of 3 tourist destinations
 * Add a new tourist destination to your tourist array
 * Add two more to your array
 * Remove the last tourist destination you have added
 * display the final array as output
 */

const touristPlace = ['Sajek Valley', 'Cox Bazar', 'Saint Martin'];

touristPlace.push('Hawar');
touristPlace.push('Bandarban', 'Rangamati');
touristPlace.pop();
console.log (touristPlace);


/** Task - 3
 * Create an array of books containing different book.
 * Use the includes method to check if the array contains a javascript book.
 * Print a message to the console indicating whether the element is present in the array or not.
 */

const books = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'Python'];
console.log (books.includes('JavaScript'));


 /** Task - 4
  * Create different variables, each containing either an array or a non-array value.
  * Now use isArray to check if each variable is an array.
  * Print a message to the console indicating whether each variable is an array or not.
  */

const numbers = ['12', '22', '30', '19', '76', '43'];
const emptyArray = [];
const name = 'Sporsho Ahmed';
console.log (Array.isArray(numbers));
console.log (Array.isArray(emptyArray));
console.log (Array.isArray(name));


/** Task - 5
 * Create two arrays of your choice.
 * Use the concat method to combine the two arrays into a new array.
 * Print both the original arrays and the combined array using console.log().
 */

const fruit = ['Mango', 'Apple', 'Watermelon', 'Apple', 'Pineapple'];
const vegetable = ['Capsicum', 'Onion', 'Ginger', 'Tomato', 'Potato'];
const combineArray = fruit.concat(vegetable);
console.log (combineArray);
