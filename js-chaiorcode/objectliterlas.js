// lets understand what obejct litertalas is

// se when we create a obejcet we give key values pairs

// var name = "vikas"
//     // if we want to use a variable in object we write obk{
// name:name; means name key has  aproperty  of vribale nme if our key and variable has the sam ename then we must give only one variale name
// automatically the name of the avriable will become the property and the value f the variable will became the avlue of key
// }

var fname = "vikas";
var lname = "singh";

// two variable declared

var obj = {
  fname, // here we used the object litertals
  lname, // the variable lname became  the key and the value of lname variable will automaticaaly become the value
};

console.log(obj);

//  suppose if we want that the value  of our varibale will become the property or key of object then we use [] brackes

var n = "name";
var c = "course";
var obj2 = {
  [n + "ofstudent"]: "rajputVikas", // here [n] means that hey take the value  of variable n and make the property
  [c]: "b-tech", // value of var c will be the propety of the object
};

console.log(obj2);

console.log(obj2.nameofstudent);

console.log("lets make a function inside a obejct");

//new function syntax in object literals

var l = "name";

var s = "srname";

var obj3 = {
  [l]: "zara",
  [s]: "spataza",
  fullname:function(){
    return `the name of the fav one is ${this.name} ${this.srname}`
  },
  fullname1(){
    return `hey miss ${this.name}`
  }
};

console.log(obj3);
console.log(obj3.fullname())   // this way was old

// new was is 
console.log(obj3.fullname1())

// we dont even need to write he word function

obj3.fulllnameagain = function(){
    return `${this.name}`
}


console.log(obj3)



// now lets see how to return a object insdie a function


var mob="iqoo";
var model="2023";

function details(){
    return {
        mob,   // we know the name of the variable will beocme the key or property

        model  // the value of the variable willl become the value pf the key
    }

}


var bb = details();

console.log(bb);
console.log(bb.model);


