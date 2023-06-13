const taskValue = document.getElementById("taskInput")
const listContainer = document.getElementById("listContainer")
const dateInput = document.getElementById("dateInput")
const timeInput = document.getElementById("timeInput")

let counter = 0
let allTasks = document.getElementById("allTasks")

let dateValue = dateInput.value
let timeValue = timeInput.value

function AddTask() {
    const todoValue = taskValue.value
    if (taskValue.value === "") {
        alert("You need to enter a task")
    }
    else {
        const content = document.createElement("div")
        content.innerHTML = taskValue.value
        content.classList.add("addTask")
        listContainer.append(content)

        let deadlineDate, deadlineTime;
        let today = new Date();
        let year, month, day, hours, minutes;
        let selectedDate = new Array(dateInput.value.split("-"))
        selectedDate.map((el) => {
            year = el[0]
            month = el[1]
            day = el[2]
            year = Math.abs(today.getFullYear() - year)
            month = Math.abs(today.getMonth() - month)
            day = Math.abs(today.getDate() - day)
            console.log(year, month, day)

            if (year == 0 && month == 0 && day == 1) {
                content.classList.add("active");
            }
        })
        let selectedTime = new Array(timeInput.value.split(":"))
        selectedTime.map((t) => {
            hours = t[0]
            minutes = t[1]
            hours = Math.abs(today.getHours() - hours)
            minutes = Math.abs(today.getMinutes() - minutes)
            if (year == 0 && month == 0 && day == 0 && hours == 0) {
                alert("The deadline for the task will be over soon")
            }
        })
        const date = document.createElement("input")
        date.classList.add("date")
        date.value = year + " y " + month + " m " + day + " d "

        const time = document.createElement("input")
        time.classList.add("time")
        time.value = hours + ' h ' + minutes + ' m';
        if (year == 0 && month == 0 && day == 0 && hours == 0) {
            alert("The deadline for the task will be over soon!")
        }
        const edit = document.createElement("button")
        edit.innerHTML = "Edit"
        edit.classList.add("editTask")
        const del = document.createElement("span")
        del.innerHTML = "Delete"
        del.classList.add("span")
        content.append(date, time, edit, del)
        counter++
        allTasks.innerHTML = counter

        edit.addEventListener("click", function () {
        })
    }
    taskValue.value = ""
}

let checkedTasks = 0
let tasksDone = document.getElementById("tasksDone")

listContainer.addEventListener("click", function (e) {
    let t;
    if (e.target.tagName === "DIV") {
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked")
            checkedTasks--
        }
        else {
            e.target.classList.add("checked");
            checkedTasks++
        }
        tasksDone.innerHTML = checkedTasks
    }
    if (e.target.tagName === "BUTTON") {
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()

        allTasks.innerHTML -= 1;
        if (e.target.parentElement.classList.contains("checked")) {
            tasksDone.innerHTML -= 1
        }
        if (tasksDone.innerHTML < 0) {
            tasksDone.innerHTML = 0
        }
    }
}, false)
