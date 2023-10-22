// lts find out what is inex of funtion do in arrays

// the index of function return us the index of the value which we want to see

var arr=["vikas","vishal","rohit","vishal","luky"];

console.log(arr);

console.log(arr.indexOf("vishal",2));   // hree we say that indexOf ("value","startPoint")

// question find the index of the value "vikas" in the array where we dont know any index 

var arr1=[1,2,3,4,"vikas",5,6,7,8,9,0];

// now if we have to finf the ijnde of the given value we use index of function

console.log(arr1.indexOf("vikas"));

console.log(arr1[4]);  

// last index of suppose an array has some uolictae values at df index and we need to find the same value but not the first value we do is 

var a=[1,2,3,4,1,2,3,4,5,6,2,5,6];

console.log(a.lastIndexOf(2));  // 10 as the very last value of 2 is at 10 index





