//asynchronous program

/*
function task(done){
    console.log("doing some task");
    done();
}

task(function(){
    console.log("task was done")
})

console.log("we did a task")
console.log("\n");

//2nd example

function done(){
    console.log("task was done")
}

setTimeout(done,1000); //setTimeoutfunction after 1000ms will call done function (in delay other tasks can be performed)
console.log("we did a task")
console.log("\n");   */

//next example

function task2(done2){
    console.log("we are doing a task");
    setTimeout(done2,1000);
}

task2(function(){
    console.log("task was done");
})

console.log("we did a task");

//setTimeout creates a asynchronous delay and while that delay some other part of program can be executed

