const numbers = [4, 6, 8, 9];
const squared = numbers.map(number => number * number);
const sumOfElement = squared.reduce((accumulator, current) => accumulator + current,0)

const avg = (items, total) => total / items.length;
console.log(squared)
console.log(sumOfElement)
console.log(avg(squared, sumOfElement))