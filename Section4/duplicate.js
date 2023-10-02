const words = ["fati", "sara", "zahra", "fati" ];
const words2 = [];
const duplicate = [];
for (let word of words){
    if(!words2.includes(word)){
        words2.push(word);
    }
    else{
        if (!duplicate.includes(word)){
            duplicate.push(word);
        }
    }
}
console.log(words2, duplicate);