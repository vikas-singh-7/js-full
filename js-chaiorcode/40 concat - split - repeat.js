// we have given two strings and we are said that we have to join these two strings and make one string can we do this..
// yes we can by string.concat();

var str = "hey vikas ";
var str2="how are you friend";

var a = str.concat(str2);  // we say hey str one add the stribg 2 in you 


console.log(a);
// suppose we have three strings and we want to concat all three
var str3=" i hope you are good";

var b = str.concat(str2,str3);  //  we say hey strone add str2 and str3 in you 

console.log(b);

// split this method says split the strings into array from a particular value 
//

var str4 = "hey vikas how are you";

// we want to split our string into assray from space means from space split the value in array

var arr = str4.split(" "); // retuns us  array havng value slpit from string ehn  space appens


console.log(arr);

// suppose we have given  a stringa nd we want to print itseveral times without using ore thean one print sattement can we 
// yes we can by the repeat method;

var str6 = "hey nigga whts up";

var m = str6.repeat(8);  // repeat the smae string 8 times 

console.log(m);
