document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskName = newTaskInput.value.trim();
        if (taskName) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.textContent = taskName;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Completar';
            completeBtn.classList.add('btn', 'btn-success', 'btn-sm');
            completeBtn.addEventListener('click', function() {
                listItem.remove();
                completedTaskList.appendChild(listItem);
                completeBtn.remove();
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
            deleteBtn.addEventListener('click', function() {
                listItem.remove();
            });

            listItem.appendChild(completeBtn);
            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);

            newTaskInput.value = '';
        }
    });
});

