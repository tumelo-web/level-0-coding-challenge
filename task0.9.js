function findVowel(word){
    const vowel = ['a','e','i','o','u','A','E','I','O','U'];
    var letter = [];
    for(var i = 0; i < word.length; i++){
        if(word.toUpperCase().match(vowel[i]) || word.toLowerCase().match(vowel[i])){
            letter.push(vowel[i]);
        }
    }
    console.log("Vowels: " + letter);
}
findVowel("TUMELO");