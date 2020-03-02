let arr=[6,3,9,1,7,2]
console.log(arr.sort())

//js by default does lexicographical sort
let arr2=[6,3,9,1,7,2,14,26,35]
console.log(arr2.sort())


function compare(a,b){
    return a-b;     //if negative value then swapped
}

let sortedarr=arr2.sort(compare)
console.log(sortedarr)

function compare2(a,b){
    return b-a;   
}

let sortedarr2=arr2.sort(compare2)
console.log(sortedarr2)



let arr3=[5,3,6,40,26,50]
arr3.sort(function(a,b){
    console.log(arr3)                          //insertion sort
    console.log(a+" "+b)                           
    return a-b;          
})
console.log(arr3)

//if to sort by unit's digit,return value in compare function: return a%10 - b%10
function compare3(a,b){
    return a%10 - b%10;
}
console.log(arr3.sort(compare3))

//another use of higher order functions:allows to create sort function which takes compare function as argument
//(would not have been possible w/o h_o_f)