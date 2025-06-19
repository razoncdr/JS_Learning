function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData) getNextData();
        else console.log("Got all data.")
    }, 1000)
}

console.log("Getting Data1...")
getData(1, ()=>{
    console.log("Getting Data2...")
    getData(2, ()=>{
        console.log("Getting Data3...")
        getData(3, ()=>{
            console.log("Getting Data4...")
            getData(4)
        })
    });
})