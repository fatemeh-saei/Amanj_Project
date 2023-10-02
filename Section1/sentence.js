const sentence = "salam man fatemeh hastam - salam fatemeh";
const words = sentence.split(" ");

const wordCount = {};

for(let word of words){
    if(!word){
        continue;
    }
    if(wordCount[word]){
        wordCount[word] += 1;
    }else{
        wordCount[word] = 1;
    }
}
console.log(words);
console.log(wordCount);
