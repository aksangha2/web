const express=require('express')
const Router=express.Router
const route=Router()

let students=[
    {name:"rahul",college:"dtu",year:"1"},
    {name:"saksham",college:"nsit",year:"2"},
    {name:"parul",college:"iiit",year:"3"},
    {name:"neha",college:"nit",year:"1"},
]

route.get("/",(req,res)=>res.send(students))
route.post("/",(req,res,next)=>{
    students.push({name:req.body.name,college:req.body.college,year:req.body.year})
    res.send(students)
})
route.get("/:id",(req,res)=>res.send(students[req.params.id]))
module.exports=route