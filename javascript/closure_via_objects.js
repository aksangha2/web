//scope of outer function is preserved inside a inner function,this scope is called closure scope

function createCounter(initValue,delta){
    let val=initValue;
    let Counter={                      //object with key and value 
        incr:function(){
            val+=delta;
        },
        decr:function(){
            val-=delta;
        },
        show:function(){
            console.log(val)
        }
    }
    return Counter;
}

let a=createCounter(50,5);
a.show();
a.incr();
a.incr();
a.show();
console.log(typeof(a));
console.log(typeof(a.show))
console.log(typeof(a.show()))