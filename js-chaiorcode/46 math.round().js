// if we have an decimal value and we want to make its round off then we use math.roundd

var a = 10.50;

var b = Math.round(a);  // 11 as rpund of 10.50 is 11
console.log(b);

var c = 10.44;

var d = Math.round(c);  // 10 as roundoff 10.4 is 10 
console.log(d);


// math.trunc  it trim the decimals value 

var n = 10.99;

var m = Math.trunc(n);   // 10 as 
console.log(m);