const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PHD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.growsOlder = function () {
  this.age += 1;
};

arto.greet();
console.log(arto.age);
arto.growsOlder();
console.log(arto.age);

arto.doAddition(1, 4);

const refToAddition = arto.doAddition;
refToAddition(1, 9);

const refToGreet = arto.greet;
refToGreet();

setTimeout(arto.greet, 1000);

setTimeout(arto.greet.bind(arto), 1000);
