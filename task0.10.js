function commonLetter(word1,word2){
    var letters = [];
    for(var i = 0; i < word1.length; i++){
        if(word2.includes(word1[i])){
            letters.push(word1[i]);
        }
    }
    console.log("Common letters: " + letters);
}
commonLetter("tumelo", "umuzi");