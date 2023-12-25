function kiratAsyncFunction() {
    let p = new Promise(function(resolve) {
        // Simulate an asynchronous operation
        setTimeout(function() {
            console.log("set timeout async func has printed this:");
            
            // Resolve the promise after the asynchronous operation is done
            resolve("data is here!!!");
        }, 10000);
        
        console.log('before resolve');
        // Note: resolve is called immediately here, but it won't affect the promise until later
        console.log('after resolve');
    });
    
    return p;
}

function main() {
    kiratAsyncFunction().then(function(value) {
        console.log(value);
    });
}

main();