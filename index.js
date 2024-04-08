const addTaskButton = document.querySelector(".add-task button");
const taskInput = document.querySelector(".add-task input");
const taskList = document.getElementById("taskList");

// Function to display a message
function showDoneMessage() {
  const messageElement = document.createElement("div");
  messageElement.textContent = "You're task is done!";
  messageElement.classList.add("done-message"); // Add a class for styling
  messageElement.style.display = "none"; // Initially hide the message

  document.body.appendChild(messageElement);

  // Show the message for a brief period  and then fade it out
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.opacity = 0;
    setTimeout(() => messageElement.remove(), 500); // Remove after fade-out
  }, 1000); // Show for 1 second before fade-out
}

// Event listener for adding tasks
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value;

  const newListItem = document.createElement("li");
  newListItem.textContent = taskText;

  taskList.appendChild(newListItem);

  taskInput.value = "";

  
  // Add "Remove" and "Done" buttons to the new task
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-task"); // Class for removal functionality
  newListItem.appendChild(removeButton);

  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  newListItem.appendChild(doneButton);

  // Event listener for removing tasks (attached to the newly created button)
  removeButton.addEventListener("click", function() {
    taskList.removeChild(this.parentNode);
  });

  // Event listener for marking tasks as done
  doneButton.addEventListener("click", function() {
    const listItem = this.parentNode;
    listItem.classList.toggle("done");
    showDoneMessage(); // Call function to display message
  });
});

// Event listener for marking tasks as done (applied to all existing "Done" buttons)
const doneButtons = document.querySelectorAll(".mark-done"); // Modify selector if needed
doneButtons.forEach(button => {
  button.addEventListener("click", function() {
    const listItem = this.parentNode;
    listItem.classList.toggle("done");
    showDoneMessage(); // Call function to display message
  });
});