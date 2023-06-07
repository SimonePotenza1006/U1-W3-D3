//text decoration


let taskForm = document.getElementById("form")
taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskInputField = document.getElementById("tasks")
    const savedTasks = taskInputField.value
    let newTask = document.createElement('div')
    newTask.classList.add("singleTask")
    newTask.innerHTML = `
    <p class="doneTask">${savedTasks}</p>
    <button>ELIMINA</button>
    `
    const savedTasksDiv = document.getElementById("saved-tasks")
    savedTasksDiv.appendChild(newTask)

    const allTheDeleteButtons = document.querySelectorAll(".singleTask button")
    allTheDeleteButtons.forEach((button) =>{
        button.addEventListener("click", function(e) {
            let buttonIJustClicked = e.target
            let taskToRemove = buttonIJustClicked.parentElement
            taskToRemove.remove()

        })
    })
    taskInputField.value =""

})