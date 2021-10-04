function convertToFahrenheit(temp){
    temp = temp * 9/5 + 32;
    return temp;
}
console.log(convertToFahrenheit(5));

function convertToCelsius(temp){
    temp = (temp - 32) * 5/9;
    return temp;
}
console.log(convertToCelsius(81));