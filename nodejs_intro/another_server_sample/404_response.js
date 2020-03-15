const express=require('express')
const server=express()

server.get('/a',(req,res)=> res.send("AAAA"))
server.get('/b',(req,res)=> res.send("BBBB"))

server.use((req,res)=>res.send("<h2>404 not found</h2>"))

server.listen(2543)