// index of   this method return us the the inex of the word which we are seaerchngb fporf 

var str = "hey vikas good vikas";
var a = str.indexOf("vikas");  // it will retun the possition or jndex of very first vlaue which we searches

console.log(a);  //  4 as postioj of word vikas is 4 

var b = str.lastIndexOf("vikas");   // returns 15 as the last vikas is at the index 15 

console.log(b);

//replace replace method is used to change the value of the strung into a new value

var str1 = "javascript is a great language and is a easy one ";

var n = str1.replace(/is/g,"was");   // the is globallly mans everytime is occurs change it into was 

console.log(n)
