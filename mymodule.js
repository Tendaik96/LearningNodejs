"use strict";

/* Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O.  */

  /* You must write a module file (mymodule.js) to do most of the work. The  
  module must export a single function that takes three arguments: the  
  directory name, the filename extension string and your callback function,  
  in that order. Don't alter the filename extension string in any way before  
  passing it to your module. */

const fs = require("fs");
const path = require("path");

module.exports = function (directory, ext, callback) {
     ext = "." + ext;
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);

    let filteredList = [];
   files.forEach((file) => {
     if (path.extname(file) === ext) {
        
        filteredList.push(file);
       console.log(file);
      }
    });
// The callback function must be called using the idiomatic node(err, data) convention.
    return callback(null, filteredList);
  });
};

//modules
