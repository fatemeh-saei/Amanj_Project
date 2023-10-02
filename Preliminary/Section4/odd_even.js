const numbers = [20, 50, 70, 56, 43, 9, 1708];
const numbers3 = [];


const numbers2 = numbers.filter((item)=>{
    if(item % 2 === 0){
        return true;
    }
    else{
        return false;
    }
});
console.log("with filter:", numbers2);


for(let item of numbers){
    if(item % 2 === 0){
        numbers3.push(item);
    }
}

console.log("with for:", numbers3);