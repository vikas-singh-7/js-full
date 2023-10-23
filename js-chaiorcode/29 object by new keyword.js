// we can make objects by using new keyword too

var obj = new Object();

obj.name="vikas";   // properyu one

obj.lname="singh";  // properyu two

obj.salary=function(){ // method three  remember when we add a function inside a object it is called a method
    return 100000
};

obj.fullname=function(){  // method propery 4
    return this.name + " " + this.lname
}


console.log(obj);

console.log(obj.fullname());


