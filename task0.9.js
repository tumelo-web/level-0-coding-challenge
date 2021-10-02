function findVowel(word){
    const vowel = ['a','e','i','o','u'];
    var letter = [];
    for(var i = 0; i < word.length; i++){
        if(word.toUpperCase().includes(vowel[i]) || word.toLowerCase().includes(vowel[i])){
            letter.push(vowel[i]);
        }
    }
    console.log("Vowels: " + letter + ".");
}
findVowel("tumelooo");