function convertToTime(num){
    var hours = Math.floor(num / 60);
    var mins = num % 60;
    if(hours > 1 && mins > 1 || hours == 0 && mins == 0){
        console.log(hours + " hours, " + mins + " minutes.")
    }
    if(hours > 1 && mins == 0){
        console.log(hours + " hours, " + mins + " minutes.")
    }
    if(hours == 0 && mins > 1){
        console.log(hours + " hours, " + mins + " minutes.")
    }
    if(hours == 1 && mins >= 0){
        console.log(hours + " hour, " + mins + " minutes.")
    }
    if(hours == 0 && mins == 1){
        console.log(hours + " hours, " + mins + " minute.")
    }
}
convertToTime(0);