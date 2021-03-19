(function(){
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    globalThis['addSyncClient'] = addSyncClient;

    //Async (using callback)
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    globalThis['addAsyncClient'] = addAsyncClient;

    //Async (using Promise)
    function divideAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (y === 0){
                    return rejectFn(new Error('Invalid arguments'));
                }
                var result = x / y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 4000);
        });
        return p;
    }

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 4000);
        });
        return p;
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
            return result * 2;
        });
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
    }

    

    globalThis['addAsyncPromiseClient'] = addAsyncPromiseClient;


    
})()