// if w want to chnage  a string to a number we can use number method'

var a = "10";
var b = Number(a);   // here we chnaged the string to number 
console.log(a)

console.log(typeof(b));

// what if our string number has decimals but w edont wnat decimalsn
// we use parseInt()

var q = "10.99";
var w = parseInt(q);   // returns 10 as it doesnot show decimla values

console.log(w)   


// parseFLoat()    means it can change a string into decimals even if the numbe ris in decimals 

var t  = "10.99";
var j = parseFloat(t);   // 10.99 as the parsefloat also print decimals 
console.log(j);