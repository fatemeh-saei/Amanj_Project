function show(message){
    const messageElement = document.getElementById("messagebox");
    messageElement.textContent = message;
    messageElement.classList.remove("hidden");
    setTimeout(()=>{
        messageElement.classList.add("hidden");
    },1000)
}

function compare(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (firstName.length > lastName.length){
        show(`${firstName} is longer than ${lastName}`);
    }
    else{
        show(`${lastName} is longer than ${firstName}`);
    }
}