const localStorageChaves = 'todo-list-store'


function validateTaskExists(){
    let values = JSON.parse(localStorage.getItem(localStorageChaves) || "[]")
    let inputValue = document.getElementById('input-new-task').value;

    let taskExists =  values.find(value => value.name == inputValue) 
    return !taskExists ? false : true
}

function newTask(){
    let input = document.getElementById('input-new-task');
    input.style.border = ''


    if(!input.value){
        input.style.border = '2px solid #ebb93b'
        alert('Digite algo')
    }else if(validateTaskExists()){
        alert('Almost exists new task')
    }else{
        let values = JSON.parse(localStorage.getItem(localStorageChaves) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageChaves,JSON.stringify(values))
        showValues()
        input.value = ''
    }
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageChaves) || "[]")
    let list = document.getElementById('todo-list')
    list.innerHTML = ''

    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-done" onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg></button></li>`
    }
}

function removeItem(data){
    
    let values = JSON.parse(localStorage.getItem(localStorageChaves) || "[]")
    let index = values.findIndex(value => value.name == data)

    values.splice(index, 1)
    localStorage.setItem(localStorageChaves,JSON.stringify(values))
    showValues()
}


showValues()