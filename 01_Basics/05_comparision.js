console.log(2<1); // false
console.log(2>1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

// Normal Operator (>, <, ==, <=, >=, !=) dont compare data type its only compare value
console.log("2" > 1); // true
console.log("1" > 2); // false

// to compare data type and value both we use ===, !== operator
console.log("2" === 1); // false
console.log("1" !== 2); // true

// Comparision with null
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Comparision with undefined
console.log(undefined < 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
