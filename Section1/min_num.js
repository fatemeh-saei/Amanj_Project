let numbers = [2, 25, 120, 29];
let min = numbers[0];
for (let number of numbers){
    if (number < min){
        min = number;
    }
}

console.log(min);