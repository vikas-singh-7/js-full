// array of object as name suggest array having values as object

// lets see an example

var arr = [
    {
        name :'vikas',
        lname:"singh",
        age:22
    },
    {
        name :'rohit',
        lname:"singh",
        age:20
    },
    {
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


