/**
 * 1. const --> Value not going to change
 * 2. let --> Value might change
 * 3. var --> should not use (unless exceptional cases)
 */

// Primitive Type

const price = 500; // number / numeric
// console.log(price);

const name = 'kirkir ali khan';
const isPoor = false; // boolean

// Non-Primitive Type

// Array

const friend = ['Elon', 'Mark', 'Bill', 'Jeff'];

// Object

const students = {Class: 9, name: 'Arif Hossain', age: 14, address: 'Mirpur'}


// Condition

if ( price > 1000) {
    console.log('Too Expensive');
}

else if (price > 500) {
    console.log('Maybe i can buy this');
    
}

else {
    console.log('Within my budget');
}

// While Loop

let pushUp = 0;

while (pushUp < 10) {
    console.log('PushUP:', pushUp);
    pushUp++
}

// For Loop

for(let i = 0; i < 10; i++) {
    console.log('Count On:', i);
    
}