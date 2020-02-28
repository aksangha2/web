//objects are first class variables in js, we can create objects without creating class
let obj={
    a:10,       //properties
    b:"hello",
    c:true,
    d:{
        p:10,
        q:20
    }
}
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(obj.d.p)
console.log(obj.d.q)

//to add properties in object
obj.l=1111

console.log(obj)

//to delete properties in object
delete obj.b

console.log(obj)

console.log(obj.b)