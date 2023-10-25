// w have a string and we hav egiven a index and we are said that find the character at that index 

// we use charAt;

var str = "javascript is a great language";

var b = str.charAt(8);
console.log(b);   // p as at index 8 word is p 

// suppose we want to know ascii code of the charater at a particular index then we use charcodeat

var c = str.charCodeAt(8);  //112 as the ascii code for small p is 112;


console.log(c);   // 


// suppose we want to know any asciin code"s value in english or our keyboard we use string.fromcharcode()

var d = String.fromCharCode(112);  // as at 112 code the letter is p 

var e = String.fromCharCode(65); // A as at 65 ascii code the letter is capital A

console.log(d)
console.log(e);


// summary if we want to know ascii code of  a prticular letter ina string we give it its index and it return us the code ascii code strng.charCodeAt(index);

// if we want to know any asccii code of any letter we can do we just give the ascii code and it will return us the letter on that code; 
// String.charCode(65)    A as the ascii code 65 is A;

