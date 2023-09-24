const numbers = [20, 40, 50, 30, 1000];
numbers.forEach((item)=>{
    console.log(item);
});

const numbers2 = numbers.map((item)=>{
    return item;
});

console.log("sort with alpha:", numbers.sort());
console.log("sort:", numbers.sort((a, b)=>{
    if(a > b){
        return 1;
    } else if(a < b){
        return -1;
    } else{
        return 0;
    }
}));
console.log("numbers2:", numbers2);
console.log("numbers includes(40):", numbers.includes(40));
console.log("numbers2 includes(60):",numbers2.includes(60));