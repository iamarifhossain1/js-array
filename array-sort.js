const numbers = [6, 1, 5, 4, 7, 3, 9, 2];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);


const friends = ['Sakib', 'Nokib', 'Akib', 'Rakib', 'Hakib'];
// friends.sort();
// console.log(friends);

const ages = [1, 6, 100, 28, 15, 2, 5];
// console.log(ages);
// ages.sort();
// console.log(ages);


// Acending
const sortedAges = ages.sort(function(a, b) {return a - b});
console.log(sortedAges); 

// Decending

const sortedAgesDecending = ages.sort(function(a, b) {return b -a})
    console.log(sortedAgesDecending);
    