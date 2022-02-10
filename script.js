
const taskList = document.querySelector('#task-list')
const deleteBtns = document.querySelectorAll('#task-list .delete')


// add tasks
const addTask = document.forms['add-task']

addTask.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const value = addTask.querySelector("input[type='text']").value;

    // create elements
    const li = document.createElement('li')
    const taskName = document.createElement('span')
    const deleteBtn = document.createElement('button')

    // add content
    deleteBtn.textContent = 'delete'
    taskName.textContent = value;

    taskName.classList.add('taskName')
    deleteBtn.classList.add('delete')

    // append to document
    li.appendChild(taskName)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)
    // console.log(deleteBtns);

    document.querySelector('.input-bar').value='';
})

// clear list
const clearAll = document.getElementById('clear-all')

clearAll.addEventListener('click', function (e) {
    e.preventDefault();
    taskList.innerHTML = '';
})

// delete tasks from list
taskList.addEventListener('click', function (e) {
   
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        
        li.parentNode.removeChild(li)
    }
    
});


// strikeout elements from list (when they're done)
taskList.addEventListener('click', function (e) {
   
    if (e.target.className === 'taskName') {
        const li = e.target.parentElement;
        console.log(li)
        li.classList.toggle('strike');

    }
});






