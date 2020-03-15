const express=require('express')
const server=express()

const teacherRoute=require('./routes/teachers')
const studentRoute=require('./routes/students')

server.use('/students',studentRoute)
server.use('/teachers',teacherRoute)

server.listen(2233)
