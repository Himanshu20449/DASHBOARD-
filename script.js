const taskForm = document.getElementById("taskForm");
const pendingWorkTable = document.querySelector("#pendingWorkTable tbody");
const underProcessTable = document.querySelector("#underProcessTable tbody");
const printingTable = document.querySelector("#printingTable tbody");

let taskCount = 0;

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const dateReceived = document.getElementById("dateReceived").value;
    const customerName = document.getElementById("customerName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const workType = document.getElementById("workType").value;
    const size = document.getElementById("size").value || "-";
    const description = document.getElementById("description").value;
    const designer = document.getElementById("designer").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Increment task count
    taskCount++;

    // Add task to Pending Work table
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${taskCount}</td>
        <td>${dateReceived}</td>
        <td>${customerName}</td>
        <td>${mobileNumber}</td>
        <td>${workType}</td>
        <td>${size}</td>
        <td>${description}</td>
        <td>${designer}</td>
        <td>${deliveryDate}</td>
        <td>
            <button class="action-btn under-process" onclick="confirmUnderProcess(this)">Under Process</button>
            <button class="action-btn complete" onclick="confirmComplete(this)">Complete</button>
        </td>
    `;
    pendingWorkTable.appendChild(row);

    // Reset form and close modal
    taskForm.reset();
    closeModal("addTaskModal");
});

function confirmUnderProcess(button) {
    if (confirm("Move this task to Under Process?")) {
        moveToUnderProcess(button);
    }
}

function confirmComplete(button) {
    if (confirm("Send this task to Printing?")) {
        moveToTable(button, printingTable);
    }
}

function moveToUnderProcess(button) {
    const row = button.closest("tr");
    const newRow = document.createElement("tr");

    // Clone row content and add "Sent to Print" button
    newRow.innerHTML = `
        ${row.innerHTML.replace(
            /<button.*?<\/button>/g,
            '<button class="action-btn sent-to-print" onclick="confirmSentToPrint(this)">Sent to Print</button>'
        )}
    `;
    underProcessTable.appendChild(newRow);

    // Remove the original row
    row.remove();
}

function confirmSentToPrint(button) {
    if (confirm("Send this task to Printing?")) {
        moveToTable(button, printingTable);
    }
}

function moveToTable(button, targetTable) {
    const row = button.closest("tr");
    const newRow = row.cloneNode(true);

    // Remove action buttons from new row
    const actionCell = newRow.querySelector("td:last-child");
    if (actionCell) actionCell.remove();

    // Append to target table
    targetTable.appendChild(newRow);

    // Remove from current table
    row.remove();
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function showSizeInput() {
    const workType = document.getElementById("workType").value;
    const sizeBox = document.getElementById("sizeBox");
    if (["Flex", "Frame", "Card"].includes(workType)) {
        sizeBox.classList.remove("hidden");
    } else {
        sizeBox.classList.add("hidden");
    }
}
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.add("hidden"));

    // Show the selected section
    document.getElementById(sectionId).classList.remove("hidden");
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("hidden");
    modal.style.display = "flex";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}
// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Upload Image function
function uploadImage() {
    const imageInput = document.getElementById('imageUpload');
    const file = imageInput.files[0];
    if (file) {
        alert('Image "' + file.name + '" uploaded successfully!');
    } else {
        alert('Please select an image to upload.');
    }
}

// Function to handle Add Task form submission
document.getElementById('taskForm').onsubmit = function(event) {
    event.preventDefault();

    // Get form data
    const dateReceived = document.getElementById('dateReceived').value;
    const customerName = document.getElementById('customerName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const workType = document.getElementById('workType').value;
    const size = document.getElementById('size').value;
    const description = document.getElementById('description').value;
    const designer = document.getElementById('designer').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const imageUpload = document.getElementById('imageUpload').files[0] ? document.getElementById('imageUpload').files[0].name : "No image uploaded";

    // Store the task in an object (this can be sent to a backend or stored in local storage)
    const task = {
        dateReceived,
        customerName,
        mobileNumber,
        workType,
        size,
        description,
        designer,
        deliveryDate,
        imageUpload
    };

    // Populate the View Modal with the task data
    document.getElementById('viewDateReceived').textContent = task.dateReceived;
    document.getElementById('viewCustomerName').textContent = task.customerName;
    document.getElementById('viewMobileNumber').textContent = task.mobileNumber;
    document.getElementById('viewWorkType').textContent = task.workType;
    document.getElementById('viewSize').textContent = task.size;
    document.getElementById('viewDescription').textContent = task.description;
    document.getElementById('viewDesigner').textContent = task.designer;
    document.getElementById('viewDeliveryDate').textContent = task.deliveryDate;
    document.getElementById('viewImage').src = imageUpload;

    // Open the View Task Modal
    openModal('viewTaskModal');
};
// Function to confirm task completion
function confirmComplete() {
    const confirmation = confirm("Are you sure you want to complete this task?");
    if (confirmation) {
        // Move task to Delivery section
        moveToDelivery();
    }
}

// Function to move the task to Delivery section
function moveToDelivery() {
    // Get task details from the printing modal
    const dateReceived = document.getElementById('printingDateReceived').textContent;
    const customerName = document.getElementById('printingCustomerName').textContent;
    const workType = document.getElementById('printingWorkType').textContent;
    const size = document.getElementById('printingSize').textContent;
    const description = document.getElementById('printingDescription').textContent;
    const designer = document.getElementById('printingDesigner').textContent;
    const deliveryDate = document.getElementById('printingDeliveryDate').textContent;

    // Create a new task object for Delivery
    const deliveryTask = {
        dateReceived,
        customerName,
        workType,
        size,
        description,
        designer,
        deliveryDate
    };

    // Now you can add the deliveryTask to the Delivery section (for example, in an array or display it dynamically in the UI)
    console.log("Task moved to Delivery:", deliveryTask);

    // Optionally, update the Delivery section in the UI (assuming you have a Delivery section container)
    const deliverySection = document.getElementById('deliverySection');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <p><strong>Customer Name:</strong> ${deliveryTask.customerName}</p>
        <p><strong>Work Type:</strong> ${deliveryTask.workType}</p>
        <p><strong>Delivery Date:</strong> ${deliveryTask.deliveryDate}</p>
        <button class="btn" onclick="viewTaskDetails(${JSON.stringify(deliveryTask)})">View</button>
    `;
    deliverySection.appendChild(taskItem);

    // Close the Printing Task Modal
    closeModal('printingTaskModal');
}

// Function to open the view task modal with the task details
function viewTaskDetails(task) {
    // Populate the view modal with task data
    document.getElementById('viewDateReceived').textContent = task.dateReceived;
    document.getElementById('viewCustomerName').textContent = task.customerName;
    document.getElementById('viewWorkType').textContent = task.workType;
    document.getElementById('viewSize').textContent = task.size;
    document.getElementById('viewDescription').textContent = task.description;
    document.getElementById('viewDesigner').textContent = task.designer;
    document.getElementById('viewDeliveryDate').textContent = task.deliveryDate;
    
    // Open the View Task Modal
    openModal('viewTaskModal');
}
// Function to handle work type change
function handleWorkTypeChange() {
    const workType = document.getElementById('workType').value;
    const flexOptions = document.getElementById('flexOptions');

    // Show flex options if Flex is selected
    if (workType === 'Flex') {
        flexOptions.classList.remove('hidden');
    } else {
        flexOptions.classList.add('hidden');
        document.getElementById('selectedFlexType').value = ''; // Clear selected flex type
    }
}

// Function to handle flex type selection
function selectFlexType(type) {
    document.getElementById('selectedFlexType').value = type;
    alert('Selected Flex Type: ' + type);
}
let taskToDelete = null; // Variable to store the task to be deleted

// Function to open the password prompt modal
function promptPassword(taskName) {
    taskToDelete = taskName;
    document.getElementById('deleteTaskName').textContent = `Are you sure you want to delete the task for ${taskName}?`;
    openModal('passwordPromptModal');
}

// Function to verify the password and delete the task
function verifyPassword() {
    const enteredPassword = document.getElementById('deletePassword').value;
    const correctPassword = "Chandrakant";

    if (enteredPassword === correctPassword) {
        alert(`Task for ${taskToDelete} has been deleted.`);
        deleteTask(taskToDelete);
        closeModal('passwordPromptModal');
    } else {
        alert("Incorrect Password. Task was not deleted.");
    }
}

// Function to delete the task from the UI
function deleteTask(taskName) {
    const tasks = document.querySelectorAll('#underProcessTasks .task-item');
    tasks.forEach(task => {
        if (task.textContent.includes(taskName)) {
            task.remove(); // Remove the task from the UI
        }
    });
}
// Function to mark a printing task as complete
function completePrintingTask(customerName) {
    const confirmation = confirm(`Are you sure you want to mark the task for ${customerName} as complete?`);
    if (confirmation) {
        moveToCompleteWork(customerName);
    }
}

// Function to move task to the Complete Work section
function moveToCompleteWork(customerName) {
    const printingTasks = document.querySelectorAll('#printingTasks .task-item');
    let taskToMove = null;

    // Find the task to move
    printingTasks.forEach(task => {
        if (task.textContent.includes(customerName)) {
            taskToMove = task;
        }
    });

    if (taskToMove) {
        // Clone the task and move it to Complete Work
        const clonedTask = taskToMove.cloneNode(true);
        const completeWorkSection = document.getElementById('completeWorkTasks');

        // Remove the "Complete" button from the cloned task
        clonedTask.querySelector('.complete-btn').remove();
        completeWorkSection.appendChild(clonedTask);

        // Remove the task from the Printing section
        taskToMove.remove();

        alert(`Task for ${customerName} has been moved to Complete Work.`);
    } else {
        alert('Task not found.');
    }
}
const socket = new WebSocket('wss://your-backend-url.com');

socket.onmessage = (event) => {
    const updatedTask = JSON.parse(event.data);
    updateTaskInUI(updatedTask);
};
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

const db = getFirestore();
const tasksCollection = collection(db, "tasks");

onSnapshot(tasksCollection, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New task: ", change.doc.data());
        }
    });
});
