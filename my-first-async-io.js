// first import readfile

//console.log(process.argv[0])

// The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous

// Cope and paste into command line for testing: node my-first-async-io.js

// https://github.com/maxogden/art-of-node#callbacks

let fs = require("fs");

  let file = process.argv[2];

fs.readFile(file, "utf8", function (err, data) {
     
      if (err) {
        console.log("error");
      }

      let lines = data.toString().split("\n").length - 1;
      console.log(lines);
  });


  // This is the most important topic to understand if you want to understand how to use node. Nearly everything in node uses callbacks. Callbacks are functions that are executed asynchronously, or at a later time. Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen. readFile a function (known as a callback) that it will call after it has retrieved the data from the file system.