// like array and oject method we also have string methjds

// first we will do length property and toLowerCAse and toUpperCase

// length property    it tells us about the lenght if the string

var str="hey vikas";

console.log(str)

// here now lets apply length propety here this will get us abiut no of charactewrs statring frm 0 it even counts spaces

var b = str.length;

console.log(b)


// now lets learn abt touppercase method of function

// it makes our string to upper case means all the letter of string will be in uppwe case

var str1="hey vikas wow you are doing good ";

console.log(str1);

var b = str1.toUpperCase();  // we changeb our strinhg to uppercase

console.log(b)
//
//toLowerCase()   this methjod is used to make our string letter to lower case


var str2="HEY NIgA ShUT THE FKp"

console.log(str2);


var c = str2.toLowerCase();   // this will change all the letter of string into lower case
console.log(c)

// now understand include function 
// name tells it will return true or fakse if the word we added to it is present i our string 

var str3="hey nigga shut the fuck up";

var d = str3.includes("nigga")
console.log(d)  // return true as the nigga is present in our string 

var e = str3.includes(" ");  // true as the space is even aded 

console.log(e)


// we did 
//lenght property
//toUpperCAse
//toLowerCase
//includes