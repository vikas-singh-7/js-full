// array of object as name suggest array having values as object

// lets see an example

var arr = [
    {     // o index 
        name :'vikas',
        lname:"singh",
        age:22
    },
    {   // 1 index 
        name :'rohit',
        lname:"singh",
        age:20
    },
    {   // 2 index
        name :'vishal',
        lname:"singh",
        age:19
    }
]

console.log(arr);

console.log(arr[0].name + " " +  arr[0].lname   +  " " +   arr[0].age );

// array of object means arrau having value as object 

// we can also itertate array

for(var a =0; a<arr.length; a++){
    console.log(arr[a] )
}


