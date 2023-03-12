// fs.readdir(path, [options], callback) - for asynchronous
// fs.readdirSync(path, [options]) - for synchronous
const fs = require("fs");
const path = require("path");

// specify the directory and file type and store them in a variable
const directory = process.argv[2];
const ext = "." + process.argv[3]
//console.log(ext)

fs.readdir(directory, (err, files) => {

    //console.log(process.argv)

  if (err) console.log(err);
  else {
    //console.log("Filenames with the .md extension:");
    files.filter((file) => {
      if (path.extname(file) === ext) console.log(file);
    });
  }
});
