const fs=require('fs')

fs.readFile(__dirname+'/textfile.txt',function(err,data){
    if(err) throw err
    data=data.toString()
    data=data.split("\n")
    let data2={}
    for(i=0;i<data.length;i++)
    {
        if(data2.hasOwnProperty(data[i]))
           data2[data[i]]+=1
        else
          data2[data[i]]=1
    }
    for(key in data2)
    {
        console.log(key+'='+data2[key])
    }

})