/* Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (/n) it contains to the  
console(stdout), similar to running  */
  
// node my-first-io.js

/* Buffer objects are Node's way of efficiently representing arbitrary arrays  
  of data, whether it be ascii, binary or some other format. Buffer objects  
  can be converted to strings by simply calling the toString() method on  
  them. e.g. const str = buf.toString(). */

const fs = require("fs");

//console.log(process.argv)

let file = fs.readFileSync(process.argv[2]);
let lines = file.toString().split("\n").length - 1;
console.log(lines);

