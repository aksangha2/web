const express=require('express')
const todoRoute=require("./routes/todos")
const server=express()

server.set("view engine",'hbs')
server.set("views",__dirname+"/views")  /*to set folder in which it will look for views*/

server.use(express.json())
server.use(express.urlencoded({extended:true}))




server.use("/todos",todoRoute)
server.listen(3456)