// suppos w  hav an array an we want to onvrt that array into a string can we change it to string ?

// yes we can chnage the value

// y use of array.string

var arr =["vikas",1];

console.log(typeof(arr));   //0 returns objct as array is a object in js

 var b = arr.toString(); 

console.log(typeof(b));   // rturn string 

console.log(b[0]);   // v as the o index we have lttr v and if we say array[0] we gte vikas



// value of () this is the useless function we use it is used to display the value of array

var c = arr.valueOf();

console.log(c);   // returns value of array 

//

// fill()  array.fill is use to fill the arrayb with a static value all the vl.aue of array will replace but this sttaic val;ue

var arr1 = [1,2,3,4,5,6,7,8,9];

console.log(arr1);

var b = arr1.fill("Shree Ram"); // as all the values of array will change into shreer am

console.log(b);

// summary

// fill mthjof will fill all the bvalue of array witha stati value wjovh we passssed in fill("value") 

// array.value of() it on;y shows us thevalue f array 

//

// Array.toString() this mthjod is ysed when we want to change a rrayb into a string 



