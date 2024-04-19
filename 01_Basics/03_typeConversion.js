// Conversion in Number
let score = "33";
let value = Number(score);
console.table([typeof(score), score]);
console.table([typeof(value), value]);

let score1 = "33abc";
let value1 = Number(score1);
console.table([typeof(score1), score1]);
console.table([typeof(value1), value1]);

let score2 = null;
let value2 = Number(score2);
console.table([typeof(score2), score2]);
console.table([typeof(value2), value2]);

let score3 = undefined;
let value3 = Number(score3);
console.table([typeof(score3), score3]);
console.table([typeof(value3), value3]);

let score4 = true;
let value4 = Number(score4);
console.table([typeof(score4), score4]);
console.table([typeof(value4), value4]);

// Conversion in Boolean
let isLoggedIn = 1;
let bool = Boolean(isLoggedIn);
console.log(bool);     // true

let isLoggedIn2 = 0;
let bool2 = Boolean(isLoggedIn2)
console.log(bool2);   // false

let isLoggedIn3 = "";   // Empty string
let bool3 = Boolean(isLoggedIn3);
console.log(bool3);    // false

let isLoggedIn4 = "Ayush";
let bool4 = Boolean(isLoggedIn4);
console.log(bool4)    // true


// Conversion in String
let num = 33;
let str = String(num);
console.table([typeof str, str]);