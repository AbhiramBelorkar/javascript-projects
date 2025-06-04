const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const taskInput =  document.getElementById('taskInput')


console.log(taskInput.innerHTML);


addTaskBtn.addEventListener('click', () => {
    console.log(taskInput.value);

    const task = document.createElement('li')
    task.innerText = taskInput.value

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'DELETE'
    deleteBtn.classList.add('delete-btn')
    task.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        task.remove();
    })

    taskList.appendChild(task)
    taskInput.focus();
    taskInput.value = ''
})

