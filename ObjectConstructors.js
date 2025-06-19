function Person (name, age) {
    this.name = name, 
    this.age = age
}

let myself = new Person("Rajon", 25)
let alice = new Person("Alice", 40)

console.log("I am " + myself.name)

Person.prototype.country = "Bangladesh"

console.log(Object.entries(myself))

console.log(Person)


let x = new String("abc");
let y = new String("abc");
let z = x;


console.log(x==y, x===y)
console.log(x==z, x===z)

let b;
let a = b?b:0;

console.log(a)