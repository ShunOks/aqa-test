// function declaratoion
function square1(width, height) {
  return width * height;
}

// function expression
const square2 = function (width, height) {
  return width * height;
};

// arrow function
const square3 = (width, height) => width * height;

// concise arrow function
const square4 = (width, height) => width * height;

console.log('function declaratoion realisation: ', square1(5, 10));
console.log('function expression: ', square2(2, 5));
console.log('arrow function: ', square3(3, 6));
console.log('concise arrow function: ', square4(4, 8));
