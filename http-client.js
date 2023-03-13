const fs = require("fs")
const http = require("http")

/* Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  */


// console.log(URL)

// The http.get() method is a shortcut for simple GET requests

/*  by calling the setEncoding function, "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings */

let URL = process.argv[2]

http
  .get(URL, function callback(response) {
    response.setEncoding("utf8");

    //save data that comes in from our request

    response.on("data", (chunk) => {
      console.log(chunk);
    });

    response.on("error", (error) => {
      console.log(error);
    });
  })
  .on("error", (error) => {
    console.log(error);
  });
    
// node http-client.js

   /*  the function inside the get request is a good example of how nodejs uses an event driven system to handle data thats coming from an external source */