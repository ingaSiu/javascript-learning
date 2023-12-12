// Difference between null & undefined

// Q.1) What is "undefined" in JavaScript ?
// undefined => datatype in JS
// a variable that is not assigned any value is UNDEFINED

let x;
console.log(x); // undefined (it displays value)
console.log(typeof x); // undefined

// Q.2) What will be the output of undefined==null & undefined===null ? Why ?
//let x = null;
let y;
console.log(x == y); // true, because both are false
console.log(x === y); // false,because it also checks a data type

// Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)
// yes
//let x = undefined;
console.log(x);
