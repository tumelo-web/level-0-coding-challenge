function maxNumber(num1,num2,num3){
    for(var i = 0; i < maxNumber.length; i++){
        var Max = 0;
        if(num1 > num2 && num1 > num3){
            Max = num1;
            console.log(Max);
        }
        if(num2 > num1 && num2 > num3){
            Max = num2;
            console.log(Max);
        }
        if(num3 > num1 && num3 > num2){
            Max = num3;
            console.log(Max);
        }
    }
}
maxNumber(5,6,22.1);