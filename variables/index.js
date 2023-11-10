var a = 2;
let b = "Hello";
const c = 34;

// DataTypes
// String
// Number
// BigInt
// Object
// null
// undefined
// NaN

// normal
function add(a, b) {
  return a + b;
}

// anonymous
const sum = function (a, b) {
  return a + b;
};

// arrow
const div = (a, b) => a / b;

console.log(add(1, 2));
console.log(sum("a", 0));
console.log(div(2, 4));

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (a<1) {
    console.log(a);
    a++;
}
