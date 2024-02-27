// Tests for equality and inequality with strings:
const string1: string = 'hello';
const string2: string = 'world';
console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// Tests using the lowercase function:
const string: string = 'Hello World';
console.log(string.toLowerCase() === 'hello world'); // true
console.log(string.toLowerCase() !== 'hello world'); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
const num1: number = 5;
const num2: number = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Tests using "and" and "or" operators:
const bool1: boolean = true;
const bool2: boolean = false;
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

// Test whether an item is in an array:
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;
console.log(array.includes(item1)); // true
console.log(array.includes(item2)); // false

// Test whether an item is not in an array:
const array2: number[] = [1, 2, 3, 4, 5];
const item3: number = 3;
const item4: number = 6;
console.log(!array.includes(item3)); // false
console.log(!array.includes(item4)); // true