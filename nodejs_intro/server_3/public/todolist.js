$(function(){
    let newtodo=$('#newtodo')
    let addtodobtn=$("#addtodo")          /*jquery selectors*/
    let todolist=$('#todolist')
    addtodobtn.click(function(){
        console.log("button was clicked")
        let newtdo=newtodo.val()
        console.log(newtdo)
        /*to send this to backend*/

        $.post('/todos/',{task:newtdo},function(data){    /*AJAX*/
            /*console.log(data)*/
            todolist.empty();
            for(todo of data){
                /*todolist.append("wow")*/
                todolist.append("<li>"+todo.task+"</li>")
            }
        })
    })
})
console.log("some stuff")