// first import readfile
let { readFile } = require("fs")
let fs = require("fs")

//console.log(process.argv[0])

// The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous
// node my-first-async-io.js
// https://github.com/maxogden/art-of-node#callbacks
console.log(process.argv[2])
  let argument = process.argv[2];

    /* readFile(argument,'utf8', (err, asynFile) => {
      let lines = asynFile.toString().split("/n").length - 1;
      console.log(lines);

      if (err) throw error;
      console.log("The file contains:", asynFile);
    }); */

  /*   fs.readFile(argument, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      let lines = contents.toString().split("/n").length - 1;
      console.log(lines);
    }); */