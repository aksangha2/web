let arr=[1,2,3,4,5,6,7,8]

let sum=arr.reduce(function(accum,item){
    return accum+item;                   //return value of (n-1)th case become accumulator value for nth case except
})                                       //for 1st case(for n=1) first item is accumulator,reduce starts from second

console.log(sum);

let fact=arr.reduce(function(accum,item){
    return accum*item;
})

console.log(fact)