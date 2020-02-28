//let has block level scoping,if block scope than function also present

let x=10
/*function myFun(){
  x+=1;
}

myFun()
console.log(x)*/

function myFun2(){
    let x=20;
    x+=1;
    console.log("line12 "+x)
    if(true){
        let x=30;   
        x+=1;        
        console.log("line16 "+x)   
    }
    console.log("line18 "+x)  
}
myFun2()
console.log("line21 "+x)