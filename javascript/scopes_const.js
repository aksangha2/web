const x=10
/*function myFun(){
  x+=1;
}

myFun()
console.log(x)*/

function myFun2(){
    const x=20;
    //x+=1;
    console.log("line12 "+x)
    if(true){
        const x=30;   
        //x+=1;        
        console.log("line16 "+x)   
    }
    console.log("line18 "+x)  
}
myFun2()
console.log("line21 "+x)