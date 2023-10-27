
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");
    const filterAllButton = document.getElementById("filter-all");
    const filterActiveButton = document.getElementById("filter-active");
    const filterCompletedButton = document.getElementById("filter-completed");
    const clearCompletedButton = document.getElementById("clear-completed");



    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", handleTaskAction);
    filterAllButton.addEventListener("click", filterTasks);
    filterActiveButton.addEventListener("click", filterTasks);
    filterCompletedButton.addEventListener("click", filterTasks);
    clearCompletedButton.addEventListener("click", clearCompletedTasks);

    function addTask()
    {
        const taskText=taskInput.value.trim();
        if(taskText !=="")
        {
            const taskItem=createTaskItem(taskText);
            taskList.append(taskItem);
            taskInput.value="";
        }
    }
    function createTaskItem(text)
    {
        const li=document.createElement("li");
        li.innerHTML=`
        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_1280.png" alt="done" class="done" height="30px" width="30px"></img>
        <span>${text}</span>
        <img src="https://dev.joinposter.com/public/apps/delete-receipt/icon.png" alt="delete" class="delete" height="30px" width="30px"></img>
        `;
        return li;
    }
    function handleTaskAction(e) 
    {
        const target=e.target;
        console.log(e.target);
        if(target.classList.contains("done"))
        {
            target.parentElement.classList.toggle("completed");
        }
        else if(target.classList.contains("delete"))
        {
            target.parentElement.remove();
        }
    }
    function filterTasks(e) {
        const filter = e.target.id.replace("filter-", "");
        console.log(filter);
        const taskItems = taskList.getElementsByTagName("li");
        for (const taskItem of taskItems) {
            if (filter === "all" || (filter === "active" && !taskItem.classList.contains("completed")) || (filter === "completed" && taskItem.classList.contains("completed"))) {
                taskItem.style.display = "flex";
            } else {
                taskItem.style.display = "none";
            }
        }
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll(".completed");
        for (const completedTask of completedTasks) {
            completedTask.remove();
        }
    }

});
