//Inputs
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");

//Buttons
const addButton = document.getElementById("addButton");

//Outputs
const message = document.getElementById("message");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function(){
    let text = taskInput.value;
    text = text.trim();

    if (text === ""){
        message.textContent = "Please enter a task before clicking Add Task!"
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = text;
    
    newTask.classList.add("task-item");
    newTask.classList.add("task-text");
    newTask.classList.add("task-priority");

    if (priorityInput.value === "low"){
        newTask.classList.add("priority-low");
    } else if (priorityInput.value === "medium") {
        newTask.classList.add("priority-medium");
    } else if (priorityInput.value === "high") {
        newTask.classList.add("priority-high");
    };

    const completeButton = document.createElement("button");
    completeButton.classList.add ("complete-button");
    completeButton.classList.add ("complete-button:hover");

    completeButton.addEventListener("click", function(){
        newTask.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add ("delete-button");
    deleteButton.classList.add ("delete-button:hover");

    deleteButton.addEventListener("click", function(){
        newTask.remove();
        completeButton.remove();
        deleteButton.remove();
    });

    taskList.appendChild(newTask);
    taskList.appendChild(completeButton);
    taskList.appendChild(deleteButton);
});