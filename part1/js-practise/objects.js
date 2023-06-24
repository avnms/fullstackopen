const obj1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PHD",
};

const obj2 = {
  name: "Full Stack web development application",
  level: "intermediate studies",
  size: 5,
};

const obj3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

console.log(obj1.name);
const fieldName = "age";
console.log(obj1[fieldName]);

obj1.address = "Helsinki";
obj1["secret number"] = 12341;
console.log(obj1.address);
console.log(obj1["secret number"]);
