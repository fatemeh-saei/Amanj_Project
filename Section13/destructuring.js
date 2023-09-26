const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);

console.log(numbers);


const {a, ...others} = { a: 1, b: 2, c: 3 };
console.log(others);

const [first, ...others2] = [1, 2, 3];
console.log({others2});
