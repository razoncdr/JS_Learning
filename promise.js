let success = true;
let promise = new Promise((resolve, reject)=>{
    if(success) resolve("Success!");
    else reject("Error!");
})

promise
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    .finally(()=>console.log("promise Completed."))