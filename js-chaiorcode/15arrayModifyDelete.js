// we can modufy a value in ar array 

var arr = [1,2,3,5,4];

console.log(arr);  // 12354;


// supose we haev array and counting is in it but we want to change the avlue of inde 3 which hold value 5 to 4 we do is arr[3] = 4;

arr[3] = 4;  // we say at index three wahtever the value is just change it to anew value 4 

arr[4]=5;   // we say at index 4 whatever the value is just chage it to the enw valyue 5

console.log(arr);  //  12345

/// say we need to remove some values and hold the scpace so that we can use that values later... 

// delete arr[1];


// say we have a array of 

var arr2=["vikas","cse",22];

console.log(arr2);  // vikas cse 22

// now we want to remov ethe value cse we do is 

delete arr2[1];   // we say whatever the value is in index 1 just rmove it 

console.log(arr2)   // vikas,undefine,22

// we can later fill this value

// arr2[1] = prompt("enetr values")....

