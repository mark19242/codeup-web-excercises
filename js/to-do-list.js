// to-do-list.js

const toDoForm = document.getElementById("to-do-form");
const toDoList = document.getElementById("to-do-list");

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const toDoInput = document.getElementById("to-do");
    const toDoText = toDoInput.value;

    if (toDoText.trim() !== "") {
        const newToDoItem = document.createElement("li");
        newToDoItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");

        newToDoItem.innerHTML = `
            <p class="m-0">${toDoText}</p>
            <button class="btn btn-danger">Done</button>
        `;

        toDoList.appendChild(newToDoItem);
        toDoInput.value = "";
    }
});

toDoList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName.toLowerCase() === "button" && target.classList.contains("btn-danger")) {
        const toDoItem = target.closest(".to-do-item");
        toDoList.removeChild(toDoItem);
    }
});
