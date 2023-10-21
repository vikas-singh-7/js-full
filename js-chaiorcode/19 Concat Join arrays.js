// array concat and join

// say we have two arrays

var arr1 =["vikas","vishal"];

var arr2 = ["rohit","lukcy","rakesh","rishu"];

// now we want that both the arrays will merge into a single array
// we use array.concat

var mergedArray=arr1.concat(arr2); // this new array will have the merged values of arr1 nd arr2 

console.log(mergedArray);

console.log(typeof mergedArray);   // will retun object as in js arrays are object because object have key properties simillary arrays also is a key property pair as index is key and value is property

// array.join()    array.join combined the all the values of arrays and make them string
// we have many values in array and array.join combines them inyo a single string

var ar =["vikas","vishal"];

var ar1=ar.join(" ");

console.log(ar1);

console.log(typeof ar1);   // string



