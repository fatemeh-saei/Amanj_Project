function sumArray(arry){
    let sum = 0;
    for (let i = 0; i < arry.length; i++){
        sum += arry[i];
    }
    return sum;
}

let numbers = [1, 9, 2, 8, 3, 7];
console.log(sumArray(numbers));