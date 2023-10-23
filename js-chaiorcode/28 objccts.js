// what is object is javasxript

// obj is  a datatype in js which can hold more than 1 value with its properties
// key values pair 
// obkect is the advance form of array as w can name the index and then values 

var obj = {
    name:"vikas",
    lname:"singh",
    age:22,
    favMovies:["batman","hobbit"],  // we cam store aray in object
    salary:function(){
        return 100000

    },
    fullname:function(){
        return this.name + " " + this.lname    // this beacie we tell function that use the property name from this obect
    },

    obj2:{   // we can add an object inside an object 
        city:"chandigarh"

    }

};

console.log(obj);

console.log(obj.age);

console.log(obj.favMovies[0]);  // arrays

console.log(obj.salary());  // salary functuon runs

console.log(obj.fullname());   // fullname function runs


console.log(obj.obj2.city);  // we say obj ki propety obj2 uski bhi property city ko print karo





