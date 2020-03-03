function Fruit(color,taste){
    this.color=color;
    this.taste=taste;
}
let orange=new Fruit("orange","sour");
let apple=new Fruit("red","sweet");

console.log(orange);
console.log(apple);

let mango={
    color:"yellow",
    taste:"sweet"
}
console.log(mango);

console.log(orange.color);
console.log(mango.color);

//2nd example

console.log(this);
function fun(){
    console.log(this);
    /*console.log(global == this);*/ //global special object in js (not defined in browser)
    //in browser have window where we have all global objects (window.parseInt)(var x=10;window.x)
    //in nodejs equivalent of window is global

}
fun();   //true
new fun();   //false   //autoboxing (when new keyword new object is created and fun runs inside this box)


function fun2(){
    this.p="something";
    return 10;
}
let o1=fun2();
let o2=new fun2();
console.log(o1);
console.log(o2);
console.log(o1.p);
console.log(o2.p);
