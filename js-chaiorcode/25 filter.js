// array filter mthos us to mak an array from th lmnt of th xisting array but on;ly th valus that pass th tst

var arr=[1,2,12,1,4,12,54,65,80,9,2];

console.log(arr);

// a new array from th valus of arr but on;y th values whih are even

var b = arr.filter(tst);

function tst(val){
    return val%2==0;
}

// 2 12 4 12 54 80 2 

console.log(b);
// filter always reyurna  new array with the leemst that passes the test

