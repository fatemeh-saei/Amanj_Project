const words = ["fati", "sara", "zahra", "fati_saei" ];
let maxWord = words[0];

for(let word of words){
    if(word.length > maxWord.length){
        maxWord = word;
    }
}

console.log(maxWord);