// lets learn shift and unshift method

// in an array we need to add a new value at very first index e do is unshift() we cannot modify as arr[0] = "value "  because we need that previus first value at second index

var arr=[2,3,4,5,6,7,8,9];
console.log(arr);

arr.unshift(1);  // ads 1 to very first index and make the prev value that was on index 1 to index 2 

console.log(arr);


// array.shift();

// we want to remove the very first value in array and also e need tp remove the empty plca eor index too so we use aray.shif
// as delete.arr[0]; will delete the value at 0index but will reserve the space 

var arr1=[0,1,2,3,4,5,6,7,8,9];

console.log(arr1);

arr1.shift();  // delete the first index

console.log(arr1);

// lastly shift removes the first index means 0 along with value
// unshit adds a new value at very 0 index and make orev value on index 2



