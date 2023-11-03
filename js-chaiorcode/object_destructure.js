// what is object destructure
// simply when we want to assign thw values of the object to a variablw we use object destructuring z

//


var obj ={
    name:"vikas",
    course:"btech",
    age:22,
    lname:"rajput"
};

console.log(obj);

// lets assign the values to variables by es6 method

// take a empty object and assign variables in them 
// remember the nmae and the ke of the obvject should be same

let {name:firstname,course,age,lname}=obj;


console.log(firstname)
console.log(course)
console.log(lname)


let fullname = ` the name of the student is ${firstname} and the lastname of the student is ${lname}`;

let details=age+course;


console.log(fullname);




// we can also rename the variables name alice name


// simply an object destructure means assign the values of the object to the avriables

// like let{variableone,variable2,variable3} = object;

// remember the name of the variable shoyukd be same as the name of the keys of the object 

// we cana also give a variable a allice name like {variable:variableone};
