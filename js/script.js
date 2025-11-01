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
        
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
        }
    renderTodos();
    // Proceed with adding the todo
}

function deleteTodo(index) {
   //hapus item dari todos array berdasarkan index
   todos.splice(index, 1);

   //render ulang daftar todo
   renderTodos();
}

function toggleFilterVisibility() {
    const filterContainer = document.getElementById('filter-container');

    if (filterContainer.style.display === 'none') {
        filterContainer.style.display = 'block';
    } else {   
        filterContainer.style.display = 'none';
        document.getElementById('filter-input').value = '';
        renderTodos();
    }
}



function filterTodo() {
    const filtertext = document.getElementById('filter-input').value;
    renderTodos(filtertext);
}

function renderTodos(filtertext = '') {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    const filter = filterText.toLowerCase();
    let itemRendered = 0;

    todos.forEach((todo, index) => {
        const tasktext = '${todo.task} ${todo.dueDate}'.toLowerCase()};

        if (tasktext.includes(filter)) {

        todoList.innerHTML += `<li> 
        <span>${todo.task} - ${todo.dueDate}</span>
        <button onclick="deleteTodo(${index})">Delete</button>
        </li>`;
        itemrendered++;
    });

    if(todos.length === 0 || itemrendered === 0 && filtertext.length > 0) {
        todoList.innerHTML = '<li>No tasks found.</li>';
}
}

