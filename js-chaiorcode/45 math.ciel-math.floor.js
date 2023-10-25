// what7 if we have adecimal number an dw want to incrase it to nearest value

// we do by ciel

var a = 10.43;

var b = Math.ceil(a);   // rturn 11 as math.ceil always retun us upward value

console.log(b)

var c = -2.34;

var d = Math.ceil(c); // -2 as nearest upward value is -2

console.log(d)


// Math.floor()   it always reyurn us the downward value of decimals

var t = 10.99;

var m = Math.floor(t);   // 10 as the nearest downward value is 10 

console.log(m);

var h = -19.90; // -20 
var k = Math.floor(h);

console.log(k)