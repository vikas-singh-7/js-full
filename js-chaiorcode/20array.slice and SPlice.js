// array.slice array.splice

// say we have a array and we want to make a new array from the values of existing array then we use array.slice like a slice of cake from a complete cake but slice is still a cake similar;y we make the new array from the existing value of the pure array but both are arrays....

var arr =["vikas","vishal","rohit","rishu","rakesh","lucky"];

console.log(arr);

// now take vikas vishal and rohit from the array and make new array

var arr1=arr.slice(0,3);  // here i say that from array arr get the values from index 0 to index 3 means 0,1,2  3 will notb count 

console.log(arr1);

//


// Array.splice()   splice means when we want to add or remove the value from an array at any index we use splice

var ar=["vikas","vishal","rohit","kodu","sethu","rakesh"];

console.log(ar);

// noow we want to remove kodu and sethu along with index we use Array.splice
// solice(index which we want to delete or add , we want to delete the value or nor if we want delete we use 0 and if not then we use 1  if we want to delete all the  values ahead we )
ar.splice(3,2,"lukcy","rishu");

console.log(ar);





