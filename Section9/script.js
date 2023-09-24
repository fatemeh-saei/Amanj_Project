function show(message){
    const messageElement = document.getElementById("messagebox");
    messageElement.textContent = message;
    messageElement.classList.remove("hidden");
    setTimeout(()=>{
        messageElement.classList.add("hidden");
    },1000)
}

const students = [];

function add(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let score = document.getElementById("score").value;
    students.push({firstName, lastName, score});
}

function addStudent(message, passed){
    const messageElement = document.getElementById("messages");

    const student = document.createElement("div");
    student.classList.add("message");
    if(passed){
        student.classList.add("passed");
    } else{
        student.classList.add("failed");
    }
    student.innerText = message;
    messageElement.appendChild(student);
}

function calculate(){
    for(let student of students){
        let message;
        if(student.score > 10){
            message = student.firstName + " " + student.lastName + " " +  "passed by" + " " + student.score;
            addStudent(message, true);
        } else{
            message = student.firstName + " " + student.lastName + " " + "failed by" + " " + student.score;
            addStudent(message, false);
        }
    }
}