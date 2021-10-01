function maxNumber(num1,num2,num3){
    for(var i = 0; i < maxNumber.length; i++){
        var Max = 0;
        if(num1 >= num2 && num1 >= num3){
            Max = num1;
        }
        if(num2 >= num1 && num2 >= num3){
            Max = num2;
        }
        if(num3 >= num1 && num3 >= num2){
            Max = num3;
        }
    }
    return Max;
}
console.log(maxNumber(8,8,7));