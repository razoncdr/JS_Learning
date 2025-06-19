let mp = new Map();

mp.set("name", "Rajon")
mp.set(5, 10)

for(let [key, value] of mp) console.log(key, value)

console.log(mp.get(5))

console.log(mp.has(5));
console.log(mp.has(6));

console.log(mp.size);

mp.clear();

console.log(mp.size)