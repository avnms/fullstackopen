const sum = (num1, num2) => {
  return num1 + num2;
};

const square = (p) => p * p;

const result = sum(3, 5);
const squared = square(5);

console.log(result);
console.log(squared);

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);

console.log(tSquared);
