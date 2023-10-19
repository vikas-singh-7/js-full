// logical operators come to help when we want to compare two or more comnditions in a single if

let a =10;
let b =20;

//types of logical operators 
//logical and &&
// logical or || 
//logical not !


// logical and && means both the statement should be true for the condition to run
// if(a=10 && b=11){
    // console.log("xyz")
// }



if(a<=20 && b >=10){
    console.log("hello vikas") // both the conditiona are true

};


//logical or means || means if one of the condition is true then it wil work

// if(a=10 || b <10){
// console.log("hey")
// }

let c = 10;
let d = 11;
if(c=10 || d<11){
    console.log("hey i am true as i am a or operator")
};


//

// logical not ! means it will change the value of true to false if the condition is true it will make it false 
 let g =10;
if(!(g=10)){
    console.log("hey")  // noe we know that g = 10 condition is true and statement should run but we added a not operator this makes this cpondition false so the sattenent will not run
}else{
    console.log("not operator addded")
}