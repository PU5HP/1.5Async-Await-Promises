



const fs = require("fs");
//file system module

fs.readFile("file.txt", "utf-8", function(err,data){
    console.log(data);
})

console.log("going before the reading file cause the readFile is Asynchronous");

let a =0;
// although the asynchronous func the readFile is completed but it will
//wait for the running thread to be completed and then return to the completion of the asynchronous fuc


for(let i=0; i<10000000;i++){
    a++;
}

console.log("HI there 2");