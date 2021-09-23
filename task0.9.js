const vowel = ['a','e','i','o','u'];
var word = [];
function findVowel(word){
    for(var i = 0; i < word.length; i++){
        if(word.toUpperCase().match(vowel[i]) || word.toLowerCase().match(vowel[i])){
            console.log("Vowels: " + vowel[i]);
        }
    }
}
findVowel("UMUZI");