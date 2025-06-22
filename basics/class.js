class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fun = ()=>console.log(`Hello, this is ${this.name}`)
    }
}

let user = new person("Rajon", 25)
user.fun();

class student{
    name="";
    age="";
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log("Hi")
    }
}

let s = new student("Rajon", 25)
s.sayHi()
console.log(s)