//strings are immutable
let str="Asahjbdhad"
console.log(str)
console.log(str.indexOf("a"))
console.log(str.indexOf("a",4))
console.log(str.substr(3))
console.log(str.substr(3,5))
console.log(str.substring(3))
console.log(str.substring(3,5))    //for positive values slice n substring are similar values
console.log(str.slice(3,4))                 
console.log(str.substring(-5,-3))  //substring does not work with negative values,returns empty string
console.log(str.slice(-5,-3))      //slice works with negative values

console.log(str.split('a'))
let url="http://youtube.com/watch?v=yrur74u3e3rh"
console.log(url.split('?'))
console.log(url.split('=')[1])