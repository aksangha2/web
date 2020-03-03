//prototypes is a way in which we can do inheritance in js

let p={
    a:10
}

let q=Object.create(p);   //(__proto__:p)
q.b=20;

let r=Object.create(q);   //r object created and inside it a new key:value pair is created(__proto__:q)
r.c=30;

console.log(p)
console.log(q)
console.log(r)

console.log(p.a)
console.log(q.a)
console.log(r.a)

console.log(r.__proto__)
console.log(r.__proto__ === q)

console.log(r.c)
console.log(r.b)
console.log(r.a)

q.a++;                      //c.o.w:copy on write          
console.log("q.a "+q.a)
console.log("p.a "+p.a)           
console.log("r.a "+r.a)

//__proto__ is read only

console.log(p)
console.log(q)
console.log(r)