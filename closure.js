function outer(){
    let count = 0;
    function inner(){
        return ++count;
    }
    return inner;
}

const counter1 = new outer();
const counter2 = new outer();
const counter3 = new outer();

console.log(counter1());
console.log(counter2());
console.log(counter1());




function x(){
    let a = 5;
    const fun = function y(){
        console.log(a);
    }
    return fun;
}

const fun = x();

fun()


let name="mehedi";
async function somePromise(){
    await setTimeout(() => {
        name="sumon";
        console.log(name+" in function somePromise")
    }, 3000);
    console.log(name+" after setTimeOut");
}

async function myFunction() {

    console.log(name);
    let result = await somePromise();
    console.log(name);
  }
myFunction();