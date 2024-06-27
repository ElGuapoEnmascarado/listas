document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-task-btn').addEventListener('click', addTask);

    function addTask() {
        const taskInput = document.getElementById('new-task-input');
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Por favor ingrese una tarea.');
            return;
        }

        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.className = 'box';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completar';
        completeBtn.className = 'button is-small is-success is-light';
        completeBtn.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.className = 'button is-small is-danger is-light';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});
