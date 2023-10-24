// can we re assign valu to a const ?
const name = "vikas";

// name="kajal"

// console.log(name)  // error as we cannot reasign the value to a constant


// but if we take an array as const w an rassign that array a valu\

const arr=[1,3,3,4,5];
console.log(arr);

arr[1]=2;  // here we say hey arr at your index 1 xhange the value to 2 

console.log(arr);

arr[5]=6;  // ebven we can add a new value to const array 

console.log(arr);

// so we can change the value of a const but it should be in an array

// can we do the same with object lets see

const obj = {
    age:22,
    fullname:"vikas_Singh",
    course:"btech"
}

console.log(obj);

obj.age=18;  // here we agian change the value into a const variable
obj.girlfriend="a big no";   // assign new property to a objct

 
console.log(obj)


// so we can actually re assign a const variable but it shpuld be  a array or a object 