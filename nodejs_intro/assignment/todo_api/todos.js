const route=require('express').Router()

let todos=[
    {task:"0",done:"true"},
    {task:"1",done:"false"},
    {task:"2",done:"false"},
    {task:"3",done:"true"}
]

route.get("/",(req,res)=>res.send(todos))
route.get("/:id",(req,res)=>res.send(todos[req.params.id]))
route.post("/",(req,res,next)=>{
    todos.push({task:req.body.task,done:req.body.done})
    res.send(todos)
})
route.patch("/:id",(req,res)=>{
    let id=req.params.id
    todos[id].task=req.body.task
    todos[id].done=req.body.done
    res.send(todos)
})
route.delete("/:id",(req,res)=>{
    todos.splice(req.params.id,1)
    res.send(todos)
})

module.exports=route
