let addTaskBtn = document.querySelector(".add-task");
let taskList = document.querySelector(".task-list");
let taskInput = document.querySelector("#task-input");
//let editTask = document.querySelector(".edit-task");


function addTask() {
    let taskItem = taskInput.value;
    if (taskItem !== null || taskItem !== undefined) {
        const li = document.createElement("li");
        li.textContent = taskItem;
        li.classList.add("task-item");


        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit Task";
        editBtn.addEventListener("click", editTask);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        deleteBtn.addEventListener("click", deleteTask);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);


        taskList.appendChild(li);
    }

    taskInput.value = "";
}


function editTask(e) {
    let task = e.target.parentElement;
    let newTask = prompt("Edit Task: ", task.childNodes[0].textContent.trim());

    if (newTask !== null || newTask.trim() !== "" || newTask !== undefined) {
        task.childNodes[0].textContent = newTask.trim();
    }
}

function deleteTask(e) {
    let task = e.target.parentElement;
    taskList.removeChild(task);
}




addTaskBtn.addEventListener("click", addTask);