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
//to first download and then resize the file


/*download('http://cb.lk/logo.png').then(function(fileName){
    resize(fileName).then(function(resizedFile){
        console.log("resized file is at:"+resizedFile)
    })
})*/

//can also do by
/*download('http://cb.lk/logo.png').then(resize).then(function(resizedFile){
    console.log('resized file is at:'+resizedFile)
})*/

//inside then we r supposed to write function and that function gets argument that is there is resolve

/*//now if url does not starts with http

download('ftp://cb.lk/logo.png').then(resize).then(function(resizedFile){
    console.log('resized file is at:'+resizedFile)
})*/

//after promise have to go for catch
//inside catch we have error
/*download('ftp://cb.lk/logo.png').then(resize).then(function(resizedFile){
    console.log('resized file is at:'+resizedFile)
}).catch(function(err){
    console.error(err)
})*/

/*download('http://cb.lk/logo.jpg').then(resize).then(function(resizedFile){
    console.log('resized file is at:'+resizedFile)
}).catch(function(err){
    console.error(err)
})
//thus catch can handle reject of any promise in chain  */



/*download('http://cb.lk/logo.png').then(resize).then(function(resizedFile){
    console.log('resized file is at:'+resizedFile)
}).catch(function(err){
    console.error(err)
})*/


//to download-resize-upload
download('http://cb.lk/logo.png')
.then(resize)     //to upload w/o resize comment out this line
.then(upload)
.then(function(uploadedUrl){
    console.log('file was uploaded to:'+uploadedUrl)
}).catch(function(err){
    console.error(err)
})








