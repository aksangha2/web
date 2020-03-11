//promises are different way of using asyn fxn
//new syntax that allows to do everything that asyn fxn do and syntax is easier

function someAsyncTask(callback){
    console.log("Beginning of Task");
    setTimeout(function(){
        console.log("End of Task");
        callback();
    },3000)
}

/*someAsyncTask(function(){
    console.log("We did some task");
})*/


let someTaskpromise=function(){
    return new Promise(function(resolve,reject){
        someAsyncTask(resolve);
    })
}

//someTaskpromise();

//if want to do something after the function has ended

someTaskpromise().then(function(){
    console.log("After task is complete");
})