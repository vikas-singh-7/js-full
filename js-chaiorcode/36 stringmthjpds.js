// what if we want to know wetehr our string starts with that particular word or letter whuch we want to know how could we know that
// simple by using startswith();

var str = "hey vikas";

var b = str.startsWith("hey");  // retuns true as our string starts with the eord hey
console.log(b)


// same as endswith ()   // it will tell us wether our string ends with that partivcukar word or letter or not

var c = str.endsWith("S")  // false as s is presemnt biy in lower case so yess it is case senstitive

console.log(c)


// search()   / sarch metod is used to know about the posotion of the word or letter in our string as stringa slo have index from 0 to n each word or letter is at one index in string even space has its own index 

var str1="hey nigga shut the fuvk up";

var c = str1.search("shut");
console.log(c)  // 10 as the word shut strts from 10 index means at 11 length;

// match funtion // it rtuns th array of the words which we eant to fin weathr theya re present i our string or not 
// remember match function only usd in regular expression /value/g g means globally

// match return us array of the words which are presnt in our string

var str3="hey my name is vikas and i am doing good and i hope you are doing good too and i will definately make myself proud";

var f = str3.match(/i/g);   // here we will get array of i values the numbr of times i comes in pur string everytime it make a new value as i in new index

console.log(f)


//startswith()  return true or false as if our word o letter is the beggineing of the string

// endwith return true as if our string ends woth the sme word or letter tht we put in oyur function

// search()   retuns the index of the value or word if present in oyr strung

// match()   retuns array having thevaklues as the word or letter whihc have present in our string

