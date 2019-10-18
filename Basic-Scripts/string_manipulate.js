let part1 = "Hello"
let part2 =  "Cold";
/*
A string is a sequence of characters and there are a lot of methods to manipulate them.
*/

console.log("1-length");
//return the length of the string
let length = part1.length;
console.log(length);

console.log("2-lowercase");
//Convert the string to lowercase
test = part1.toLowerCase(part1);
console.log(test)

console.log("3-uppercase");
//Convert the string to uppercase
test = part1.toUpperCase(part1);
console.log(test)

console.log("3-Substring");
//get a character range from the string
test = part2.substr(0,3); 
console.log(test);

console.log("4-Concatenate");
// The + operator concatenates strings
let hello = part1+" Gold";
console.log(hello);


console.log("5-Console.log concatenate way.");
//in console.log you can use ',' to concatenate the string
console.log(part1,part2);


console.log("Challenge: try to understand the result below");
console.log(part1+" Wor"+part2.substring(2,4));







