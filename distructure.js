const actor = {
    name: 'Ananto',
    age: 33,
    phone: '01700000000',
    money: 876619019001
}

const {name, age: boyos, phone, money} = actor;
// console.log(boyos, phone)

const numbers = [30, 90];
const [first, second] = numbers;
console.log(second);

function distructuring(a, b){
    return [a*2, b*2];
}
const [prothom, ditio] = distructuring(6, 12);
console.log(prothom);
 console.log(ditio)
