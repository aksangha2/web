//application of promise

function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log("starting to download the file");
        setTimeout(function(){
            console.log("download is complete")
            resolve();
        },3000)
    })
}

/*downloadPromise().then(function(){
    console.log("after download");
})*/

//if we want this result some time later

let downloadedFile=downloadPromise()

setTimeout(function(){
    downloadedFile.then(function(){
        console.log("after download")    //this should have already done 3 sec later but due to this it will take time
    })
},5000)


//resolve change state of promise to resolved but it takes for then if present there
//we can run 'then' function on resolved after sometime also,this is called deferred resolve

//in callback function have to give callback at the time
//promises stores the result until callback and can use that data afterwards also using then

