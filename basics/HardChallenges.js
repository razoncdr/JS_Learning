 // Task 1: Group people by age range
 const people = [
  { name: "A", age: 17 },
  { name: "B", age: 24 },
  { name: "C", age: 45 },
  { name: "D", age: 62 }
];

/* Expected Output:
{
  "Under 18": ["A"],
  "18-40": ["B"],
  "41-60": ["C"],
  "61+": ["D"]
}
*/

// Use: reduce


let ans;


ans = people.reduce((acc, cur)=>{
    let group="";
    if(cur.age<18)group = "Under 18";
    else if(cur.age<=40) group = "18-40";
    else if(cur.age<=60) group = "41-60";
    else group = "61+";

    acc[group] = acc[group]||[];
    acc[group].push(cur.name);
    return acc;
}, {})


console.log(ans);
