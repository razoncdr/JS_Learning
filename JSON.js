const obj = {
    name: "Rajon",
    age: 25
}

jsonObj = JSON.stringify(obj)

console.log(jsonObj)
console.log(typeof jsonObj)


const str = `{
    "Books": ["A", "B", "C"],
    "Author": "Myself Kumar"
}`

let ans = JSON.parse(str)

console.log(ans.Author)


const user = {
  name: "Rajon",
  age: 25,
  skills: ["JavaScript", "C#", "SQL"],
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

const jsonPretty = JSON.stringify(user, null, 2);
console.log(jsonPretty);

jsonPretty = JSON.stringify(obj, null, 0); // No indentation
console.log(jsonPretty);
jsonPretty = JJSON.stringify(obj, null, 4); // 4 spaces indentation
console.log(jsonPretty);
jsonPretty = JSON.stringify(obj, null, "\t"); // Tab indentation
console.log(jsonPretty);

console.log(5+"5"-2)
console.log(1+"2"+3)

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.slice(1, 3))
