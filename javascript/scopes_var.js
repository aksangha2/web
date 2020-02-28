//var has functions scope, it does not have block scope

var x=10
/*function myFun(){
  x+=1;
}

myFun()
console.log(x)*/

function myFun2(){
    var x=20;
    x+=1;
    console.log("line12 "+x)
    if(true){
        var x=30;    //in if,we access outside x only,in if block new x is not created it changes value of previous x only
        x+=1;        //fresh scope for variables is not created in if block
        console.log("line16 "+x)   
    }
    console.log("line18 "+x)  //changes done in if block is applicable outside also(using var)
}
myFun2()
console.log("line21 "+x)