var word1 = "";
var word2 = "";
function commonLetter(word1,word2){
    for(var i = 0; i < word1.length; i++){
        if(word2.includes(word1[i])){
            console.log("Common letters: " + word2[i]);
        }  
    }
}
commonLetter("tumelo", "umuzi");