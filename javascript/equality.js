console.log(1=="1")  //non-strict equality operator
console.log(1==="1") //strict equality operator
console.log((1+"1")==11)
console.log("11"-1==1)
console.log([]=="")
console.log([]==0)
console.log(""==0)
console.log(false==[])

 /*//add empty object with empty array
console.log({}+[]) //in console answer 0 if {}+[]
console.log([]+{})   //direct in console ans [object Object]  */// do in console

//unary + operator
console.log("1")
console.log(typeof("1"))
console.log(+"1")
console.log(typeof(+"1"))
//+ operator tries to typecaste right datatype in number

console.log(+[])
let o={}
console.log(o.toString())
console.log(""+{})

/* {} in L.H.S =block
  {} in R.H.S =object*/