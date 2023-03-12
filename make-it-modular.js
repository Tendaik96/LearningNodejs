"use strict";

const mymodule = require("./mymodule.js");
const directory = process.argv[2];
const ext = process.argv[3];

mymodule(directory, ext, (err, files) => {
  if (err) console.log("There was an error:\n", err);

  files.foreach((file) => {
    console.log(file);
  });
});
