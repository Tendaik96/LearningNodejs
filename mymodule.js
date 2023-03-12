"use strict";

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
      console.log(file);}
    });

    return callback(null, filteredList);
  });
};

//modules
