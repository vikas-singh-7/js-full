// array.includes state that wethwr the value we looking for exist in our array or not 

var arr = [1,2,3,4,5,7,8,9,0];

console.log(arr.includes(6));   // false as the 6 is not added in our array

if(arr.includes(6)==false){
    console.log("yes the value 6 didnt exist in our array")
}else{
    console.log("value found in array")
}


// array.includes always give us trure or fals if valu w ear looking for xist in our array thn it givs true

// Array.includes("value");  true or false  