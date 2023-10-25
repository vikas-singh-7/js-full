// suposw we have a stringa and we want anew string from that string from a prticular inde to paricular index we use string.slice(index,end index)
var str = "hey nigga fuck the shut up";

// we wwanta new string but from index 4 to 14

var a = str.slice(4,14);  // nigga fuck returns as we say make a slice from start index and to end index
console.log(a);

// string.substr() // this method is used as when we want to make a new sub string from the string we give first position and after the seconmd parametr is how much letter we need then 

var str1 = "hey vikas";
var c = str1.substr(0,7); // we say start from 0 and from 0 take 7 charater
console.log(c)

var b = str1.substr(0,3);   // start from o index and return the 3 letters from 0 
console.log(b);


// string.substring()
// retuns a new tring same as substr but it will not cout the last char

var f = "hey vikas";


var m = f.substring(0,7);
console.log(m)
