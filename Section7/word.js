const sentence = "Salam Hi Chetori Khoobi Hello Chetori Hi";
const words = sentence.split(" ");
const wordsCount = {};

for (word of words){
    if (!wordsCount[word]){
        wordsCount[word] = 1;
    } else {
        wordsCount[word] += 1;
    }
}
console.log(wordsCount);

const students = {
    Sara: 20,
    Mohammad: 18,
    Ali: 19
}

let sum = 0;
let count = 0;
for (let value of Object.values(students)){
    sum += value;
    count +=1;
}
console.log(Object.keys(students));
console.log("sum:", sum, "\n", "counter:", count);