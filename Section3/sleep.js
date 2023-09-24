//2
function addItem(){
    const input = document.getElementById("input-text");
    const item = input.value;
    const li = document.createElement("li");
    li.textContent = Number(item);
    const list = document.getElementById("list");
    if(list.children.length < 7){
        list.appendChild(li);
    }
    else{
        alert("You can enter your sleep time only for 7 days.");
    }
    input.value = "";
}

function average(){
    const sleepingTime = document.getElementById("input-text").value;
    const list = document.getElementById("list");
    let sum = 0;
    let count = 0;
    for(let li of list.children){
        sum += Number(li.textContent);
        count += 1;
    }
    document.getElementById("result").textContent = sum / count;
}
