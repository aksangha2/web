function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http"))
        {
            reject(new Error("Url does not start with http"));
        }else
        {
            console.log("start download:"+url)
            setTimeout(function(){   //fake 3-sec download task
                let fileName=url.split("/").pop();
                resolve(fileName);
            },3000)
        }
    })
}

function resize(fileName){
    return new Promise(function(resolve,reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("file is not png"));
        }else{
            console.log("start resize:"+fileName)
            setTimeout(function(){  //fake 3-sec resize task
                   let resizedFile=fileName.split(".")[0]+"-resized"+".png";
                   resolve(resizedFile);
            },3000)
        }
    })
}


function upload(resizedFileName){
    return new Promise(function(resolve,reject){
        console.log("start upload:"+resizedFileName)
        setTimeout(function(){  //fake 3-sec upload task
             let uploadedUrl="http://imgur.com/"+resizedFileName
             resolve(uploadedUrl)
        },3000)
    })
}


/*Promise.all([
    download("http://cb.lk/logo.png"),
    download("http://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")  
]).then(function(values){   //values is array of results of resolve of each promise
    console.log(values)
})                      
//able to run promises parallely (3 downloads run parallely)*/


/*
Promise.all([
    download("http://cb.lk/logo.png"),
    download("ftp://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")  
]).then(function(values){   //values is array of results of resolve of each promise
    console.log(values)
}).catch(function(err){       //then function will not work if any one of them does not resolve
    console.log(err)           //catch works when any one of promises reject
})                              */



//download-resize-upload

Promise.all([
    download("http://cb.lk/logo.png"),
    download("http://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")  
]).then(function(download_values){
    return Promise.all(download_values.map(resize))  
}).then(function(resize_values){
    //console.log(resize_values)
    return Promise.all(resize_values.map(upload))
}).then(function(upload_values){
    console.log(upload_values)
})
.catch(function(err){       
    console.log(err)           
})




