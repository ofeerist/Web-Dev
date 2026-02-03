const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = "";
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});