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
