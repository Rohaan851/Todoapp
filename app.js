var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        addTask()
    }
})

function addTask() {
    if (inputBox.value == ""){
        alert("You must write something!!!");
    }else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        var span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value= "";
    saveDate()
}

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked")
        saveDate()
    }else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveDate() // added missing parentheses
    }
})

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();