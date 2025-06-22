let asyncFunc = async (dataId) => {
    console.log(`Data ${dataId}`);
}

(async ()=>{
    console.log(asyncFunc(1));
    console.log(await asyncFunc(2));
})() 


// let asyncFunc = async (dataId) => console.log(`Data ${dataId}`);

// console.log(asyncFunc);


// (async () => {
//     await asyncFunc(1);
//     await asyncFunc(2);
// })();
