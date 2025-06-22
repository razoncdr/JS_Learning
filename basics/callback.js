// // console.log("1")
// // setTimeout(()=>console.log("2"), 2000)
// // console.log("3")
// function print2(){
//     setTimeout(()=>console.log("2"), 2000);
// }

// function print1(cb){
//     console.log("1");
//     cb();
//     console.log("3");
// }

// print1(print2)




// function print2(cb){
//     setTimeout(() => {
//         console.log("2");
//         cb();  // call cb after 2 is printed
//     }, 2000);
// }

// function print1(){
//     console.log("1");
//     print2(() => {
//         console.log("3");
//     });
// }

// print1();




// function sayHi(name, cb){
//     console.log(`Hi, ${name}.`);
//     cb();
//     console.log("See you again.")
// }

// sayHi("Rajon", function sayBye(){
//     console.log("Bye, Rajon. ");
// })

// function sayHi(cb)
// {

// }

// function A(cb){
//     setTimeout(()=>console.log("A"), 2000);
//     cb();
// }

// A(function B(){
//     setTimeout(()=>console.log("B"), 1000);
// })



for(var i=0;i<5;i++)
{
    setTimeout(()=>{console.log(i)}, 2000);
}

// setTimeout(()=>{console.log(0)}, 2000);
// setTimeout(()=>{console.log(1)}, 2000);
// setTimeout(()=>{console.log(2)}, 2000);
// setTimeout(()=>{console.log(3)}, 2000);

var i = 0;
setTimeout(function(){
    console.log(i++)
}, 2000);
setTimeout(function(){
    console.log(i++)
}, 2000);
setTimeout(function(){
    console.log(i++)
}, 2000);
setTimeout(function(){
    console.log(i++)
}, 2000);


function a(i){
  console.log(i);
}
for(var i=0;i<=5;i++){
  function b(j){
    setTimeout(() => a(j),j*1000);
  }
  b(i);
}