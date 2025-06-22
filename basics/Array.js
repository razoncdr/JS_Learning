const cars = ["Saab", "Volvo", "BMW"];

let s = cars.toString();

console.log(s, typeof cars, cars.length)


cars[10] = "A"
cars.forEach(val => console.log(val))

for(i=0;i<=10;i++)
    console.log(cars[i])

cars["size"] = "Large";

console.log(typeof cars)

const arr = [4];
const arr1 = new Array(4);
console.log(arr, arr1)

console.log(Array.isArray(arr))
console.log(Array.isArray(arr))

console.log(arr instanceof Array)


let x = null + "12"
console.log(x)


let a = [2, 4, 5,  3 , 3, 1, - 3, 7]

a = a.map(val=> val*val)
console.log(a)

console.log(a.join(" | "))

const fruits = ["Banana", "Orange", "Apple", "Mango", "a", "b", "c"];
fruits.copyWithin(2, 0);

console.log(fruits)

function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();

console.log(text)

console.log(2*undefined)