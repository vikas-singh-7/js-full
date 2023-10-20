// lets learn local and global varoables

// global means outside means everyone can access it 

// in javascript a glbal variable is a variable which is declared outside of any scope ..... what is scope {} these curly braces are scope in js 

// so a variabe which is declared outside the scope is called as  global vaiable and we can access that variable inside a funcion or scope or everye=whefre we wants

// example


var name = "vikas singh";

function fname(){
    console.log(name)
};
fname();  // it will print us vikas singh as we said hey function when u called out your working is to say my name as log the variable name..

// can we use name variable again..

// yes 

if(true){
    console.log("hey the name is " + name);   // it will print us the name 
}else{
    console.log("getOUt")

}


// so a global variable can be used anywhere....

// LOCAL VARIABLE 

// a local variable is a variable whihc is defimed insdie a scope {} or like inside a function and we cannot use it outside of that block..

function vikas(){
    var fullname="vikasSIngh";

    console.log(fullname)
};
vikas();   // it will print us fullname value as we know


// lets find out if we can get the valuen of fullname outside the function

// console.log(fullname)  // we find that we get an error as fullname is not defined as blovk trlls that the variable whihv is made inside me is of my variabe and i cannt letanyone else to sue my variable...

if(true){
    console.log(fullname)  // fullname is not defined yes the variabl which is local can be accepetd by only local team not the global...
}; 