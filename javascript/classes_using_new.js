//classes not in js as in c++ or java

function person(name,age){
    this.firstName=name.split(" ")[0];    //firstName and lastName acts like public variable
    this.lastName=name.split(" ")[1];     //anything attached to 'this' will be available inside p1 and p2
    //this.age=age;
    //let mAge=age;      
    //'age' now is like a private variable       
    this.isAdult=function(){
        //return age>18;
        return age>18;                   //can use age(argument) directly also instead of mAge
    }                                     

}
let p1=new person("John Smith",30);
let p2=new person("Harry Porter",12)
console.log(p1);                         //mAge is not directly available or visible inside p1 and p2
console.log(p2);                         //but mAge would be available inside closure of function isAdult
console.log(p1.isAdult());
console.log(p2.isAdult());