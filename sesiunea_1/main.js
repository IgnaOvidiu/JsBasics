const firstName = 'John';
const lastName = 'Doe';
const age = 29;
const hobby = 'Motorcycles'

console.log(firstName + ' ' + lastName + 'is' + ' ' +age + ' ' + 'and he likes' + ' ' +hobby)


const submitButton = document.getElementById('btnSubmit');
const tasks = document.getElementById('tasks');
const clearList = document.getElementById('btnClear')
const messageElement = document.getElementById('message')

submitButton.addEventListener('click', addTask);
clearList.addEventListener('click', clearTask)
tasks.addEventListener('click', taskClick)

function addTask(){
    const newTask = document.getElementById('newTask');
    if(inputIsValid(newTask.value)){
        tasks.innerHTML += '<li class="list-group-item">' + newTask.value + '</li>';
        newTask.value="";
        displayMessage("")
    }
    else{
        displayMessage("Please enter a new task")
    }

}

function displayMessage(message){
    messageElement.innerText = message;
}

function inputIsValid(input){
    if(input){
        return true;
    }
    return false;
}


function taskClick(event){
    const style = event.target.style;
    if(!style.textDecoration){
        style.textDecoration = "line-through";
    }
    else{
        style.textDecoration = "";
    }
}

function clearTask(){
    const taskList = tasks.getElementsByClassName("list-group-item")
    while(taskList.length > 0){
            taskList[0].parentNode.removeChild(taskList[0]);        
    }
}