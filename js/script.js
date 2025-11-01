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
        
        // Perbaikan: Membersihkan input setelah ditambahkan
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
    // Gunakan filterText untuk konsistensi
    const filterText = document.getElementById('filter-input').value;
    renderTodos(filterText);
}

// PERBAIKAN UTAMA DI SINI
function renderTodos(filterText = '') { // 1. Pastikan menerima parameter filterText
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    // 2. Gunakan filterText dari parameter (huruf T besar/kecil harus konsisten)
    const filter = filterText.toLowerCase();
    let itemsRendered = 0; // Gunakan camelCase yang konsisten

    todos.forEach((todo, index) => {
        // 3. Perbaikan Template Literal: Gunakan backtick (`) dan hapus kurung kurawal berlebih
        const taskText = `${todo.task} ${todo.dueDate}`.toLowerCase();

        // Logika Filter
        if (taskText.includes(filter)) {
            todoList.innerHTML += `<li class="flex justify-between items-center bg-white p-3 mb-2 rounded shadow border border-gray-200"> 
                <span>${todo.task} - ${todo.dueDate}</span>
                <button onclick="deleteTodo(${index})">Delete</button>
            </li>`;
            itemsRendered++; // Increment di dalam blok IF
        }
    }); // 4. Tutup forEach loop di sini

    // 5. Perbaikan Logika Kondisi dan Syntax Error
    if(todos.length === 0) {
        todoList.innerHTML = '<li>no todos available</li>';
    } else if (itemsRendered === 0 && filterText.length > 0) {
        todoList.innerHTML = '<li>No tasks found.</li>';
    }
}

// FUNGSI BARU: Menghapus semua tugas
function deleteAllTodos() {
    // Konfirmasi penghapusan (sangat disarankan)
    if (confirm("Are you sure you want to delete all tasks?")) {
        // Reset array 'todos' menjadi array kosong
        todos = [];
        
        // Perbarui tampilan, filter akan otomatis bersih
        renderTodos();
    }
}