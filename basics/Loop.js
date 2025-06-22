// const a = [5, 4, 6, 6, 2, -1, 4, 7]

// const b = a.map(val=>{val*2, console.log(val*2)});

let ans;

// Task 1: Get even numbers

const nums = [1, 2, 3, 4, 5, 6];
// Expected: [2, 4, 6]

ans = nums.filter(val=>val%2==0);



//  Task 2: Filter students who passed

const students = [
  { name: "A", marks: 85 },
  { name: "B", marks: 45 },
  { name: "C", marks: 30 }
];
// Expected: students with marks >= 50

ans = students.filter(val=>val.marks>=50)


// Task 3: Extract usernames
// const users = [
//   { id: 1, username: "rajon" },
//   { id: 2, username: "fahim" }
// ];
// // Expected: ["rajon", "fahim"]

// ans = users.map(val=>val.username)

// Task 4: Convert to formatted strings
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 50 }
];
// Expected: ["Pen costs 10", "Notebook costs 50"]

ans = products.map(val=>`${val.name} costs ${val.price}`)

// Task 5: Count total price
const cart = [
  { item: "Pen", price: 10 },
  { item: "Notebook", price: 50 }
];
// Expected: 60

ans = cart.reduce((acc, cur)=>acc+=cur.price, 0)


// Task 6: Count occurrences
const votes = ["yes", "no", "yes", "yes", "no"];
// Expected: { yes: 3, no: 2 }
ans = votes.reduce((acc, cur)=>{
    acc[cur] = (acc[cur]||0)+1;
    return acc;
}, {})


// Task 7: Get names of users age > 18
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];
// Expected: ["Bob", "Charlie"]
// Use: filter + map

ans = users.filter(val=>val.age>18).map(val=>val.name)

// Task 8: Capitalize first letter of every word in a sentence
const sentence = "javascript is awesome";
// Expected Output: "Javascript Is Awesome"
// Use: split + map + join

ans = sentence.split(" ").map(s=>s[0].toUpperCase()+s.slice(1)).join(" ")


// Task 9: Sum of marks of only passed students
const students1 = [
  { name: "A", marks: 70 },
  { name: "B", marks: 35 },
  { name: "C", marks: 85 }
];
// Pass mark = 40
// Expected Output: 70 + 85 = 155
// Use: filter + reduce

ans = students1.filter(val=>val.marks>=40).reduce((acc, cur)=>acc+=cur.marks, 0);


// Task 10: Find the user with the highest score
const players = [
  { name: "Rajon", score: 80 },
  { name: "Fahim", score: 95 },
  { name: "Nusrat", score: 90 }
];
// Expected Output: { name: "Fahim", score: 95 }
// Use: reduce
ans = players.reduce((acc, cur)=>{
    return acc = (acc.score>cur.score)?acc:cur;
}, {none: 0})


// Task 11: Extract domain names from emails
const emails = [
  "rajon@gmail.com",
  "fahim@yahoo.com",
  "nusrat@outlook.com"
];
// Expected Output: ["gmail.com", "yahoo.com", "outlook.com"]
// Use: map + split

ans = emails.map(val=>{
    return val.split("@")[1]
})

console.log(ans)