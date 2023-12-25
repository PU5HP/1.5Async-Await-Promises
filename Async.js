
// synchronous func

function sum (a,b){
    console.log("inside sum:");
    return (a+b);
}
//console.log("sum is: "+sum(10,34));
console.log("hello world 1");

//sync func end here

//async func: set time out
let x=3; let y=45;
function sumAsync (x,y){
    console.log("inside sumAsync");
    console.log("the sum is :",x+y);
}
//setTimeout(sumAsync,5000);
//setTimeout(sumAsync(23,23),5000) is wrong use -> to pass arguments
setTimeout(() => sumAsync(34,54),10000);

console.log("hello world");

//console.log(setTimeout(sumAsync,5000));
//async end