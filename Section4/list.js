const words = ["hello", "hi", "bye", "good"];
const words2 = ["hello", "father", "sister", "good"];
const words3 = [];

for(let word of words){
    if (words2.includes (word)){
        words3.push(word);
    }
}
console.log(words3);
