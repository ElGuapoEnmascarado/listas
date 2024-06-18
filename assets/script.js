// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Evento para agregar una tarea
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Evento para manejar los clics en los botones de la lista de tareas
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove(); // Eliminar la tarea
        } else if (e.target.classList.contains('complete-btn')) {
            e.target.parentElement.classList.toggle('completed'); // Marcar como completada
        }
    });

    // Función para agregar una tarea a la lista
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = 'task-item';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completar';
        completeBtn.className = 'complete-btn';
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
});
