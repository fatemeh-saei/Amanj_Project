let numbers = [1, 9, 2, 8, 3, 7];
/*
function sumArray(arry){
    let sum = 0;
    for (let i = 0; i < arry.length; i++){
        sum += arry[i];
    }
    return sum;
}
console.log(sumArray(numbers));
*/

let sum = 0;
for(let i = 0; i < numbers.length; i +=1){
    sum += numbers[i];
}

console.log(sum);