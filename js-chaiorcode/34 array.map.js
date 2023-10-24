// array . map is th mtho whihc is used to itertate over the  values of array and everytime it iterttae a function will be called
// remember whenver we use map it alwaasy return us a new array without the changing our original array

var arr =[1,2,3,4,5,6];

// lets make a new array where the valeus of new array will be the multiple by two of the prev values ;

console.log(arr);


//

var b = arr.map(test);

function test(value , index){   // everytimee the value of atrray passed into value parametr function runs and dreturn a new value to an array
    return  index + " : " + value *2;

};

console.log(b); // this will return us  newe array 

// lets use map with an objct

// but why with object  becausde if we want to xtrat valuee from objetc likee from objeect with a same property we can use map 

var ary=[
    {name:"vikas",age:22,lname:"singh"},
    {name:"vishal",age:18,lname:"singh"},
    {name:"rohit",age:20,lname:"singh"}
];

console.log(ary)

// we have an array of object here 
// suppose we only want to see the name and lname propety here lets use 

var c = ary.map(test1);   // this will return us  anew array having the values of object
function test1(x,index ){   
    return index + " index =   " + x.name + " :" + x.lname

};

console.log(c)