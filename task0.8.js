function convertToTime(num){
    var hours = Math.floor(num / 60);
    var mins = num % 60;
    if(hours > 1 && mins > 1){
        console.log(hours + " hours, " + mins + " minutes.")
    }else{
        console.log(hours + " hour, " + mins + " minute.")
    }
}
convertToTime(133);