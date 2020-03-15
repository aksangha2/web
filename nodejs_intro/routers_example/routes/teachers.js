const route=require('express').Router()

let teachers=[
    {name:"arnav",subject:"webdev"},
    {name:"parteek",subject:"ml"}
]

route.get("/",(req,res)=>(res.send(teachers)))

route.get("/add",(req,res)=>{
    teachers.push({
        name:req.query.name,
        subject:req.query.subject
    })
    res.send(teachers)
})
route.get("/:id",(req,res)=>(res.send(teachers[req.params.id])))

/*if /add after /:id (id need to be int )
route.get("/:id",(req,res)=>{
    if(isNan(parseInt(req.params.id))){
        next();
    }
    res.send(teachers[req.params.id])
})   */

module.exports=route