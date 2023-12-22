//call back syntax

/*console.log("Start of program");

function kiratAsyncFunction(callback){
    console.log("inside kiratAsync function");
    //do some async here
    setTimeout(function () {
        console.log("set timeout async func has printed this:");
    },1000)
    
    console.log("before calling callback");
    callback();
    console.log("after calling callback");
}

function callback(){
    console.log("callback function has been call here!!")
}

kiratAsyncFunction(callback);

console.log("bye world");

// call back output

Start of program
inside kiratAsync function
before calling callback
callback function has been call here!!
after calling callback
bye world
set timeout async func has printed this:
*/


//promise then syntax
/*function kiratAsyncFunction(){
    
    let p = new Promise(function(resolve) {
        //do some async here
        setTimeout(function () {
            console.log("set timeout async func has printed this:");
        },1000)

        resolve("data is here!!!");
    });
    
    return p;
}

function main(){
    kiratAsyncFunction().then(function(value){
        console.log(value);
    })
}

main();
*/

//async await syntax


function kiratAsyncFunction(){
    
    let p = new Promise(function(resolve) {
        //do some async here
        
        setTimeout(function () {
            console.log("set timeout async func has printed this:");
        },1000)
        
        resolve("data is here!!!");
    });
    return p;
}

async function main(){
    const value =await kiratAsyncFunction();
    console.log(value);
}

main();