function convertToTime(num){
    var hours = Math.floor(num / 60);
    var mins = num % 60;
    console.log(hours + " hour, " + mins + " minutes.")
}
convertToTime(133);