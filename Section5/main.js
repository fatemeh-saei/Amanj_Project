const prices = [20000, 41000, 15000, 68000];
let total = 0;

function addTocard(n){
    const item = prices[n];
    const li = document.createElement("li");
    li.textContent = item;
    const list = document.getElementById("list");
    list.appendChild(li);
    sum();
}

function removeFromcard(k) {
    const itemList = document.getElementById('list');
    const totalSpan = document.getElementById('result');
    const removeButtons = document.querySelectorAll('.btn-remove');
    const prices = [20000, 41000, 15000, 68000];
    let total = totalSpan.textContent;
    //let total = document.getElementById("result").textContent;
    for(let li of list.children){
        if(Number(li.textContent) === prices[k]){
            total -= prices[k];
            list.removeChild(li);
            sum();
            itemList.removeChild(li.parentNode);
            break;
        }
    }
    alert("این محصول در سبد خرید وجود ندارد.");
    totalSpan.textContent = total;
}

function sum(){
    const list = document.getElementById("list");
    let sum = 0;
    for(let li of list.children){
        sum += Number(li.textContent);
    }
    document.getElementById("result").textContent = sum;
}

function empty(){
    let emt = document.querySelector("ul");
    emt.innerHTML = "";
}
let btn = document.getElementById("btn-empty").onclick = function(){
    empty();
    document.getElementById("result").textContent = "";
}
