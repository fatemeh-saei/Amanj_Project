function addItem4(){
    const newItem = document.createElement("li");
    newItem.textContent = "Item 4";
    const list = document.getElementById("list");
    list.appendChild(newItem);
}

function addItem(){
    const item = document.getElementById("input-text").value;
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("list").appendChild(li);
}

function removelastItem(){
    const list = document.getElementById("list");
    list.removeChild(list.lastChild);
}

function removeItem(){
    const removeValue = document.getElementById("input-text").value;
    const list = document.getElementById("list");
    for(let li of list.children){
        if(li.textContent === removeValue){
            list.removeChild(li)
        }
    }
}

