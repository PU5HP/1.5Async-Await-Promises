console.log("Hi there 1!!!");


setTimeout(function(){console.log("inside setTimeout func of 10 sec");},10000)//10 sec Async + callback
console.log("Hi there 2!!!");

setTimeout(function(){console.log("inside setTimeout func of 20 sec");},20000)//20 sec Async + callback
console.log("Hi there 3!!!");
let a=10;

for(let i=0;i<10;i++){
    a++;
}

console.log(a);