let form = document.querySelector('#form');
let add = document.querySelector('.btn-add');
let inputTask = document.querySelector('.text-input');
let taskCheck = document.querySelectorAll('input[type=checkbox]');
let task = document.querySelector('.task-parent')
let taskDetaile;

// let taskDetaile = window.onload = document.getElementById('taskDetail')
let data = []



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    formValidation()
})

let formValidation = () =>{
    if(inputTask.value === ''){
        console.log('failure')
    }else{
        console.log('success')
        acceptData()
    }
}

let acceptData = () =>{
    data.push({
        text: inputTask.value,
        status: 'On Progress'
    })
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data)

    createTask()
}

let createTask = () =>{
    task.innerHTML = '';
    data.map((x,y) =>{
        return (task.innerHTML += `
        <tr>
            <td class='taskStatus'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </td>
            <td>
                <input type="text" class="form-input" id="taskDetail" name="taskDetails" placeholder="edit your task here" value="${x.text}">
                <div class="pt-2 task-actions" id="taskBtn">
                    <button onClick='editTask(this)' class="btn btn-danger" type="submit"><i class="fa-solid fa-check"></i></button>
                </div>
            </td>
            <td>
                <button onClick='deleteTask(this)' class="btn btn-warning"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `)
    });
    resetForm()
}

let resetForm = () =>{
    inputTask.value = ''
}

window.onload = taskBtn = ()=>{
    taskDetaile = document.getElementById('taskDetail')
    taskStatus = document.querySelector('.taskStatus')
    return 
}

let deleteTask = (e) =>{
    e.parentElement.parentElement.remove()
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem('data', JSON.stringify(data))
    console.log(data)
}

let editTask = (e) =>{    
    let selectedTask = e.parentElement.parentElement;
    // console.log(selectedTask.children[0].value)
    // taskDetaile.value = selectedTask.children[0].innerHTML;
    data.push({
        text: selectedTask.children[0].value
    })
    localStorage.setItem('data', JSON.stringify(data));
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem('data', JSON.stringify(data))
    console.log(data)
    
}

let saveChecklist = () =>{
    for (let i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
}

let loadCheclist = ()=>{
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true'?true:false;
        
    }
}


(()=>{
    data = JSON.parse(localStorage.getItem('data')) || []
    console.log(data)
    createTask()
})();

// let showBtn = () =>{
//     btnAct = document.getElementById('taskBtn').style.visibility ='visible'
// }
// let hideBtn = () =>{
//     document.getElementById('taskBtn').style.visibility ='hidden'
// }