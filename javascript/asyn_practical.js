 //to download

function downloadfile(url,downloaded){
    //we are downloading the file here
    //let's assume it takes 3 sec to download
    console.log("Downloading File: " +url);
    setTimeout(function(){
        let FilePath="C:\\downloads\\"+url.split("/").pop()
        console.log("File was downloaded to: "+FilePath);
        downloaded(FilePath);
    },3000)
}

/*downloadfile("http://google.com/logo.png",function(path){
    console.log("we got the file at: "+path)
})   */



//to resize

function resizeFile(filePath,resized){
    //we are resizing a file
    //it takes 2 sec
    //we again use a fake setTimeout delay
    console.log("we are resizing:"+filePath);
    setTimeout(function(){
        let newPath=filePath.split(".")[0]+"-resized."+filePath.split(".")[1];
        resized(newPath);
    },2000)
}

/*resizeFile("c:\\users\\photo.jpg",function(path){
    console.log("resized file is at: "+path)

})   */



//want to download and then resize(//to do 1 asyn_fxn after the other)
//will wait download to end first and then resize

/*downloadfile("http://google.com/logo.png",function(downloaded_path){
    console.log("we got the file at: "+downloaded_path)
    resizeFile(downloaded_path,function(path){
        console.log("resized file is at: "+path)
    
    })
}) */


//upload fxn
function uploadFile(diskPath,uploaded){
    //we will upload file here
    //it will take 3 sec
    setTimeout(function(){
        let uploadedPath="https://cb.lk//uploads/"+diskPath.split("\\").pop();
        console.log("we uploaded to "+uploadedPath)
        uploaded(uploadedPath);
    },3000)
}


//download-resize-upload

downloadfile("http://google.com/logo.png",function(downloaded_path){
    console.log("we got the file at: "+downloaded_path)
    resizeFile(downloaded_path,function(resized_path){
        console.log("resized file is at: "+resized_path)
        uploadFile(resized_path,function(uploadUrl){
            console.log("uploaded successfully to: "+uploadUrl)
        })
    })
})



