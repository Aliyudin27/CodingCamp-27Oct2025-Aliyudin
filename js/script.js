console.log("Hello, World!");

// Array to store todo items
let todos = [];

function validateForm(todo, date) {
    if (todo.trim() === "" || date === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (!validateForm(todoInput, dateInput)) {
        alert('Form validation failed. Please fill in all fields.');
    } else {
        todos.push({ task: todoInput, dueDate: dateInput });
        
        }
    renderTodos();
    // Proceed with adding the todo
}

function deleteTodo() {
   
}

function filterTodo() {

}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li> 
        <span>${todo.task} - ${todo.dueDate}</span>
        <button onclick="deleteTodo(${index})">Delete</button>
        </li>`;
    });
}
