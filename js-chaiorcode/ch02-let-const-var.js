const userId =1234;

// userId=234;  {this will give us error as constant means i will store the thing and i will not allowed you to change that thing again thats it yeaaah i am a lil bad }


let userEmail ="vikasgoogle.com";

console.log(userEmail);    // here we will get the useremail as it is assigned to useremail let

userEmail="gugugoogle.com"    // but wait what is this simply nothing we take the name of the let and reassigned let a new value.

// lets try to log the let wether it gets a new value or still it is on its old value

console.log(userEmail);     // and here we go we will se that the variable username which was defined by let has a new value and it looses its old value... and this is called reassign we can not reassign a const but we can reassign a let and a var  

var userPassword="12345";
console.log(userId);


userAccount=1111; // now what is this a variable name without its type declaration   chill down js allows us to make a variable and store a memory allocation of this variable but can i reassign it ?
//well lets find out

userAccount=1212;   

// and yes we can reassign it yes it looses its old value and now it is storing a new value but what it is may be a var or may be a let ..... ? well i also dont know...



// console.table([userId,userEmail,userPassword,userAccount]);   // what the hell is console.table([])...?  
// se we made four variables and we want to log them and we have to write console.log(name) foyur times so being a lazy bear we can add all the variables inside a table and it will log us all trhe variables in one go and also will give us result in the form of table.

// wait nigga why cant we just write console.table(name1,name2);   instead od console.table([name1,name2,name3])  ?


//well i also dont know lets try to wrte the table in the samw way


// console.table(userId,userEmail,userPassword,userAccount);


  // and yes we got an error says arguements must be in array means when we want to log something in table we have to put that variables in a [] square brackets (array these [square brackets] are called by the way)... so i guess you got your all answers

  //sumaary  

//   const cant be reassig again........ let and var can be reassign again..... we can aslo define a variable without its type declaration means it is var const or let and magically that undeclared type variable can also reassign values...

let name;

//what the hell is this we made a varibale let name and w didnt assign any values... lets try to console it 

console.log(name);  // here we will see it shows us undefind means yes the varibale has taken a memory but it is just empty means we can fill some thing in it and also we wil notice that it says name is deprecated....
// deprecated means you can do something but you are not alowed yet.... simply name can store somevalue but for now it is undefine

//..... well this is completly fine w can just declared a empty or say undefine variable  and we can store something or assign some value to that undefined variable later
