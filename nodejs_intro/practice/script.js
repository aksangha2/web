const fs=require('fs')

let data='cat\ndog\ncat\nlion\ntiger\nmonkey\nlion\ndog\nhorse'


fs.writeFile(__dirname+'/textfile.txt',data,function(err){
    if(err) throw err
})
