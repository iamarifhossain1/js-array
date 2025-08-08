let price = 25;
const compPrice = price;
price = 20;


// console.log(price);
// console.log(compPrice);

const products = [25, 25, 25];
const compProduct = [];

for (const product of products) {
    compProduct.push(product);
}

// const comProduct = product;

products[1] = 55;
compProduct[0] = 15;

// console.log(products);
// console.log(compProduct);

const numbers = [1,2,3,4,5];
// const newNumbers = Array.from(numbers);
// const newNumbers = [].concat(numbers)
const newNumbers = [...numbers];
newNumbers.push(18);

console.log(numbers);
console.log(newNumbers);

// Shallow Copy Vs Deep Copy