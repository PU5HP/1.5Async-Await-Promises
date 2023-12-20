
function findSum(n){
    console.log('inside find sum');
    let ans=0;
    for(let i=0; i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log("Inside findSumTill100");
    return findSum(100);
}

setTimeout(findSumTill100, 1000);

console.log("hello world");