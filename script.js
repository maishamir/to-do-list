
const taskList = document.querySelector('#task-list')
const deleteBtns = document.querySelectorAll('#task-list .delete')


// add tasks
const addTask = document.forms['add-task']

addTask.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const value = addTask.querySelector("input[type='text']").value;

    // create elements
    const p = document.createElement('p')
    const deleteBtn = document.createElement('button')

    // add content
    deleteBtn.textContent = 'delete'
    p.innerHTML = `<input type="checkbox"> <p>${value}</p>`;


    deleteBtn.classList.add('delete')
    deleteBtn.classList.add('right')
    p.classList.add('item')

    // append to document
    // p.append(deleteBtn)
    taskList.appendChild(p)
    // console.log(deleteBtns);

    document.querySelector('.input-bar').value='';
})

// clear list
// const clearAll = document.getElementById('clear-all')

// clearAll.addEventListener('click', function (e) {
//     e.preventDefault();
//     taskList.innerHTML = '';
// })

// delete tasks from list
taskList.addEventListener('click', function (e) {
   
    if (e.target.classList.contains('delete')) {
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

// today's date
let date = document.getElementById('date')
const dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });

// rest of the date
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
}
const restOfDate = new Date().toLocaleString('en-us', options)

date.innerHTML = restOfDate;











