// Arrays - push method
const t = [1, -1, 3];
t.push(5);

console.log(t.length);
console.log(t[1]);

t.forEach((value) => {
  console.log(value);
});

// Concat
const t1 = [1, -1, 3];
const t2 = t1.concat(5);

console.log(t1);
console.log(t2);

// Map
const a = [1, -1, 3];
const m1 = a.map((value) => value * 2);
console.log(m1);

const m2 = a.map((value) => "<li>" + value + "</li>");
console.log(m2);

// Destructuring assignment
const nums = [1, 2, 3, 4, 5];
const [first, second, ...rest] = nums;

console.log(first, second);
console.log(rest);
