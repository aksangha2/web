//map also h_o_f and takes function as argument
let arr=[12,56,135,73,13,468]

let arr2=arr.map(function(item){
    return 100-item;
})

console.log(arr2)

let a=[1,2,3,4,5,6,7,8,9]
let a2=a.map(function(item){
    return item*item;
})
console.log(a2)

let a3=a.map(Math.sqrt)   //Math.sqrt already defined function
console.log(a3)