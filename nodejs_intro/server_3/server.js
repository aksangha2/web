const express=require('express')
const server=express()

const todoRoute=require("./routes/todos")

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.get("/hello",(req,res)=>{
    res.send("world")
})

server.use("/public",express.static(__dirname+"/public"))
server.use("/todos",todoRoute)

server.listen(2345)