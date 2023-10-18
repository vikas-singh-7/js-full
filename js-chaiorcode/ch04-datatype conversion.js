let score = 102;

console.log(typeof score);   // as we will get a numbr as it a numbr data type 
// lets convert this number into a string..... can we really do this..? lets see

let scoreinString = String(score);

console.log(typeof scoreinString);  // w ewill get its type as string and means the number is now changed into a string and we cannot do real methamital operation now with this string lets find out...


let score2 = 102;

console.log(score2+scoreinString);   // it will return us 102102 as 102 is aded witha  string....

/// now lets converta  string into a number 

let stringnum="102";

console.log(typeof stringnum);  // we will get its type as string as it is in double quotes and when something is in double quote it will always a string

// lets change ythis string into a number ..... can we ..? lets fin out

let notStringnum = Number(stringnum);

console.log(typeof notStringnum);  /// yes we can change a string into a number 


console.log(notStringnum);   // if our string has pure mthemetics number then it will be chnaged u=into number and will log  a pure maths value...
// but if our string has  combination of numbers with alphabet it will also get converted into number but sorry it will not log us a number it says NaN not a number....

// true hold 1 value
// false hold 0 value

let isLogged = 1 ;   // it is clearly a number 


console.log(typeof isLogged);   // will return us number 


// can we change our number into boolean lets see...


let isloggedbollean  = Boolean(isLogged);    

console.log(typeof isloggedbollean);  // yes we can and w know 1 means true

console.log(isloggedbollean);  // retuns us true as 

// as any number value can change into a boolean but if it is 0 then in=t will return us fale else if number is any number wether positive or negative it will always return us false....
// thanks see u soon