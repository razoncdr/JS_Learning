let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);
console.log(x, y)

x = 123;
y = x.toString(2);



x = 123456789012;

x = 9.656;
y = x.toExponential(6); 

console.log(y, typeof y) 

x=123;
y = x.valueOf();
console.log(y, typeof y, typeof x);

x = Number.MAX_VALUE
console.log(x)