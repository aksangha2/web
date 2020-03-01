function greeter(){
    console.log("hello")
}

let HelloSayer=greeter;
console.log(HelloSayer==greeter)

greeter();
HelloSayer();




function add(x,y){
    return x+y;
}

let sum=add(4,5)
console.log(sum)

sum=add   //sum is function itself,treating functions as object itself
console.log(sum)



//need of higher order functions

//function as a argument

function getFirstName(fullName){
    return fullName.split(" ")[0]
}

function greeter2(findName,fullName){
    let firstName=findName(fullName);
    console.log("Hello "+firstName);
}

greeter2(getFirstName,"Akash Sangha")

//to return a function

function createGreeter(name){
    let firstName=name.split(" ")[0]
    function greeter()
    {
        console.log("Hello "+firstName);
    }
    return greeter;
}

let johnGreeter=createGreeter("John Doe")
let HarryGreeter=createGreeter("Harry Greeter");

johnGreeter();
HarryGreeter();