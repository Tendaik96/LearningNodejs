# Learning Node.js

GO TO https://nodeschool.io/london/

### IN YOUR COMMAND LINE, ENTER:
1. npm install -g learnyounode
2. learnyounode 
3. Follow the instructions

### The Node Command line - (Ref: Eloquent Javascript by Marijn Haverbeke)
When Node.js is installed on a system, it provides a program called node, which is used to run JavaScript files. The console.log method in Node does something similar to what it does in the browser. It prints out a piece of text. But in Node, the text will go to the process’s standard output stream, rather than to a browser’s JavaScript console. When running node from the command line, that means you see the logged values in your terminal.

To find the command line arguments given to your script, you can read process.argv, which is an array of strings. Note that it also includes the name of the node command and your script name, so the actual arguments start at index 2.

### The File System Module
One of the most commonly used built-in modules in Node is the fs module, which stands for file system. It exports functions for working with files and directories.

### COMPLETED
Challenege 1 (hello-world.js) - Console log "Hello world"

Challenege 2 (baby-step.js) - Add all the numbers in the process.argv array

Challenege 3 (my-first-io.js) - Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (/n) it contains

Challenege 4 (my-first-async-io.js) - Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running