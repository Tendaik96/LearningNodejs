/* Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout). */

const http = require("http")
  
let URL = process.argv[2]

http
  .get(URL, function callback(response) {
    response.setEncoding("utf8");

      let output= ''
    response.on("data", (chunk) => {
      output += chunk
    });

    response.on("end", function () {
      console.log(output.length);
      console.log(output);
    });
  })
  .on("error", (error) => {
    console.log(error);
  });

// node http-collect
// learnyounode verify http-collect.js