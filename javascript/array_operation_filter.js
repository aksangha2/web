let arr=[1,2,3,4,5,6,7]

let arr2=arr.filter(function(item){
    return (item%3===0);
})

console.log(arr2)


//second example

console.log("Akash Sangha".toLowerCase())
console.log("Akash Sangha".toLowerCase().indexOf("k"))
console.log("Akash Sangha".toLowerCase().indexOf("sangha"))
console.log("Akash Sangha".toLowerCase().indexOf("kaur"))

let names=["Yt Snjdnd","Rjm WgBH","Ghus Cjh","Tejw Ghdjh"]

function name_sel(name){
    if(name.toLowerCase().indexOf("tejw")!== -1) return false;
    if(name.toLowerCase().indexOf("yt")!== -1)  return false;
    return true;
}

function name_sel2(name){
    if(name.toLowerCase().indexOf("rjm")!== -1) return false;
    if(name.toLowerCase().indexOf("ghus")!== -1)  return false;
    return true;
}

let names1=names.filter(name_sel)
let names2=names.filter(name_sel2)

console.log(names1);
console.log(names2);


