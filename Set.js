let s = new Set();

s.add(1);
s.add(10);
s.add(4)
s.add("Hello");
s.add(1);

s.delete(1)

// for(let val of s) console.log(val);
for(let ind in s) console.log(ind);

console.log(s.has(5));
console.log(s.has(10));

console.log(s.has(5));
console.log(s.size)

s.clear();
console.log(s.size)

const obj = {};
const map = new Map();

obj['__proto__'] = "value in object";
map.set('__proto__', "value in map");

console.log(obj['__proto__']);
console.log(map.get('__proto__'));

