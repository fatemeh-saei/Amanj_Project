const url = "https://api.todoist.com/rest/v2/tasks";
const token = "24185c875719d8f8c6ea4e4dc716f1c665472d8a";

async function getTodos(){
    try{
        const response = await fetch(url,{
            headers: {"Authorization": `Bearer ${token}`}
        });
        if(!response.ok){
            throw("some error", response.status);
        }
        const data = await response.json();
        return data;
        //console.log(data);
    }catch(error){
        console.log("some error happend", error);
    }
}
//getTodos();

async function loadTodos(){
    const todos = await getTodos();
    const todosList = document.getElementById("todos");
    todosList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.content;
        todosList.appendChild(li);
    });
}

async function createTodo(value){
    const response = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            content: value
        })
    });
    console.log(await response.json());
}

async function addTodo(){
    const newTodo = document.getElementById("newTodo");
    await createTodo(newTodo.value);
    newTodo.value = "";
    loadTodos();
}

loadTodos();

