const express=require('express')
const server=express()

const todosRoute=require('./todos')

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/todos",todosRoute)



server.listen(2000)