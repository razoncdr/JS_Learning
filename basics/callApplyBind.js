const rajon = {
    name: "Rajon", 
    age: 25,
    sayhi: function (hometown){
        console.log(`Hi there! I am ${this.name} from ${hometown}`)
    }
}

console.log(rajon)
rajon.sayhi("Sylhet")
const ringku = {name: "Ringku", age: 22};

rajon.sayhi.call(ringku, "MoulviBazar")
rajon.sayhi.apply(ringku, ["MoulviBazar"])
let ringkuSayHi = rajon.sayhi.bind(ringku, "MoulviBazar")();