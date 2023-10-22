// whwn vr w want that our array shoul pass a test we us array.some();

var arr =[1,2,4,5,12,18];

var b = arr.some(checkAdult);  // here we say that hey array get ready for a check test


function checkAdult(age){   // we made a checktest here
    return age>=18;

};

console.log(b);

// remmeber the some method meas array has to pass a test even a single value f an array passes the test it will return is true...

// array.every();

// every is same as some we take acheck test ad pases our aray bit this tim eevery bslue of asrry shluf=d pass the test other wise it willreturn falsde

var arr1=[1,2,3,4,5,11,6,7,8,9];

var m = arr1.every(test);

function test(val){
    return val >=10;
};


console.log(m);   // false as every value of aray should pass the test


