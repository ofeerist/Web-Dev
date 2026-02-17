const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
    `;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
        </svg>
    `;

    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed', checkbox.checked);
    });

    changeBtn.addEventListener('click', () => {
        if (li.classList.contains('editing')) return;

        li.classList.add('editing');
        
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = span.textContent;

        const originalContent = [checkbox, span, changeBtn, delBtn];
        originalContent.forEach(el => el.style.display = 'none');
        li.prepend(editInput);
        editInput.focus();

        const saveChanges = () => {
            const newText = editInput.value.trim();
            if (newText !== "") {
                span.textContent = newText;
            }
            editInput.remove();
            originalContent.forEach(el => el.style.display = '');
            li.classList.remove('editing');
        };

        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveChanges();
        });

        editInput.addEventListener('blur', saveChanges);
    });

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(changeBtn);
    li.appendChild(delBtn);

    todoList.appendChild(li);
    input.value = "";
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});