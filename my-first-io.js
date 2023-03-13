/* Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (/n) it contains to the  
console(stdout), similar to running  */
  
// command line run file: node my-first-io.js

const fs = require("fs");

//console.log(process.argv)

let file = fs.readFileSync(process.argv[2]);
let lines = file.toString().split("\n").length - 1;
console.log(lines);

/* Buffer objects are Node's way of efficiently representing arbitrary arrays  
  of data, whether it be ascii, binary or some other format. Buffer objects  
  can be converted to strings by simply calling the toString() method on  
  them. e.g. const str = buf.toString(). */

//The split() method splits a string into an array of substrings.