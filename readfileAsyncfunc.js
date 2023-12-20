
//Node.js, the fs.readFile function is asynchronous and typically takes a callback 
//function as one of its parameters.
//The fs.readFile function is used to read the contents of a file. 
//Here's a basic example:



const fs = require("fs");
//file system module

fs.readFile("file.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("going before the reading file cause the readFile is Asynchronous");