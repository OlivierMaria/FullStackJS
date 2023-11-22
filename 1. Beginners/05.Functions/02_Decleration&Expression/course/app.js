// Function Declaration
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("Oli");

// Function Expressions
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("Olivier");

// -------------------------
console.log(x); // ERROR
let x = 10;
