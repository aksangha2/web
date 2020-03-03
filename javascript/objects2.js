let x={
    a:10,       //property:value
    b:"asd",
    c:false,
    d:[1,2,3],
    e:{
        p:'asd',
        q:true
    }
}
x.k=[2457,135]   //to add key
console.log(x)

let obj={
    aNumber:123,
    aString:"asdas",
    aFunction:function(){
        return (this.aNumber + this.aString)   //inside body of function this refers to object obj itself
    }
}
console.log(obj.aFunction())

