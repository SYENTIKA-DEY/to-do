function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (input.value.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="li-content">
            <span class="task-text">${input.value}</span>
            <div class="btn-group">
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="removeTask(this)">Remove</button>
            </div>
        </div>
    `;

    taskList.appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.closest('li').remove();
}

function editTask(button) {
    const liContent = button.closest('.li-content');
    const textSpan = liContent.querySelector('.task-text');
    
    if (button.innerText === "Edit") {
        // Switch to Edit Mode
        const currentText = textSpan.innerText;
        textSpan.innerHTML = `<input type="text" value="${currentText}" class="edit-input">`;
        button.innerText = "Save";
        button.style.backgroundColor = "#28a745";
        button.style.color = "white";
    } else {
        // Save the changes
        const editInput = textSpan.querySelector('.edit-input');
        const updatedText = editInput.value.trim();
        
        if (updatedText !== "") {
            textSpan.innerText = updatedText;
            button.innerText = "Edit";
            button.style.backgroundColor = "#ffc107";
            button.style.color = "#000";
        }
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") addTask();
}