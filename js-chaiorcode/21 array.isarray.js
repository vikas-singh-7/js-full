// if we want to know weather ouyr variable is an array or not we can use the function array.isarray

var a=[1,2,3];

console.log(Array.isArray(a));  // it will see that the variable a is an array or not if a is an array it will return true wlse false


if(Array.isArray(a)==true){
    console.log("yes the given variable is an array")
}else{
    console.log("no the given varibale is not an array")
}


var b ="vikas";

var c = Array.isArray(b);   // we use a var c so that we can store the value of true or false


console.log(c); // true as a is an array

if(c ==true){
    console.log("yes it is an array")
}else{
    console.log("no its not an array")
}