const arr1 = [17, 90, 76, 54, 98, 56];
const arr2 = [43, 87, 45, 89, 99];
const merged = [...arr1, ...arr2];
// console.log(merged)
const max = Math.max(...merged);
console.log(max)