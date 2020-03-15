const express = require('express')
const server=express()

server.get('/',function(req,res,next){
    console.log('yo')
    res.send('Hello World')
})

//variable part in url
/*server.get('/greet/:name',function(req,res,next){
    let greeting="Good Morning, "+req.params.name
    res.send(greeting)
})

server.get('/greet/:tod/:name',function(req,res,next){
    let tod='Morning'
    switch(req.params.tod){
        case 'evening': tod='evening';break;
        case 'morning':tod='morning';break;
    }
    let greeting="Good "+tod+","+req.params.name
    res.send(greeting)
})*/

server.get('/greet/:tod',function(req,res,next){
    let tod='Morning'
    switch(req.params.tod){
        case 'evening': tod='evening';break;
        case 'morning':tod='morning';break;
    }
    let greeting="Good "+tod+","+req.query.name
    res.send(greeting)
})

server.get('/html',function(req,res,next){
    res.send(`
    <html> 
    <body>
    <h1>this is a HTML page</h1>
    <i>this looks really nice</i>
    </body>
    
    </html>`)
})
server.listen(2120)