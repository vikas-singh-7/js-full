// why foreach

// as foreach is a loop and whn we wqant ot itertate tom vlues of the arrys we use f0reach

var arr = [1,2,3,4,"vikas"];

console.log(arr);

arr.forEach(function(value,index){    // this means arr value are going to itertste one by one first parmeter is always value and seond parameter is aways index

    if(value==4){
        console.log(index + " value is " + value);

    }else{

        console.log(index + " " + value)
    }
    


})