const list1 = ["sara", "fatemeh", "salam", 4 ];
const list2 = ["hi", "bye", "salam", 4 ];
const list3 =[];

for(let item of list1){
    if (list2.includes(item)){
        list3.push(item);
    }
}

console.log(list3);