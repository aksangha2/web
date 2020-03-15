const express=require('express')
const server=express()

const teacherRoute=require('./routes/teachers')
const studentRoute=require('./routes/students')


server.use(express.json())     /*json middleware-can decode json body to js*/
server.use(express.urlencoded({extended:true}))  /*if body in url encoded format*/

server.use('/students',studentRoute)
server.use('/teachers',teacherRoute)

server.listen(2233)
