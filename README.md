<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Tracker Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Dashboard -->
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Task Tracker Dashboard</h1>
        </header>
        <div class="dashboard-content">
            <button class="dashboard-btn add-task-btn" onclick="openModal('addTaskModal')">
                <div class="btn-icon">➕</div>
                <div class="btn-label">Add Task</div>
            </button>
            <button class="dashboard-btn pending-btn" onclick="openModal('pendingWorkModal')">
                <div class="btn-icon">📋</div>
                <div class="btn-label">Pending Work</div>
            </button>
            <button class="dashboard-btn under-process-btn" onclick="openModal('underProcessModal')">
                <div class="btn-icon">⚙️</div>
                <div class="btn-label">Under Process</div>
            </button>
            <button class="dashboard-btn printing-btn" onclick="openModal('printingModal')">
                <div class="btn-icon">🖨️</div>
                <div class="btn-label">Printing</div>
            </button>
        </div>
    </div>

    <!-- Add Task Modal -->
<!-- Add Task Modal -->
<div id="addTaskModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('addTaskModal')">&times;</span>
        <h2>Add Task</h2>
        <form id="taskForm">
            <div class="form-group">
                <label for="dateReceived">Date Received:</label>
                <input type="date" id="dateReceived" name="dateReceived" required>
            </div>
            <div class="form-group">
                <label for="customerName">Customer Name:</label>
                <input type="text" id="customerName" name="customerName" placeholder="Enter customer name" required>
            </div>
            <div class="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" required>
            </div>
            <div class="form-group">
                <label for="workType">Work Type:</label>
                <select id="workType" name="workType" onchange="showSizeInput()" required>
                    <option value="" disabled selected>Select work type</option>
                    <option value="Flex">Flex</option>
                    <option value="Frame">Frame</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div class="form-group size-box hidden" id="sizeBox">
                <label for="size">Size:</label>
                <input type="text" id="size" name="size" placeholder="Enter size (e.g., 5x7)">
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" placeholder="Enter details about the task"></textarea>
            </div>
            <!-- Upload Image Button -->
            <div class="form-group upload-box">
                <label for="imageUpload">Upload Image:</label>
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
                <button type="button" class="btn upload-btn" onclick="uploadImage()">Upload</button>
            </div>
            <div class="form-group">
                <label for="designer">Designer:</label>
                <input type="text" id="designer" name="designer" placeholder="Enter designer's name">
            </div>
            <div class="form-group">
                <label for="deliveryDate">Delivery Date:</label>
                <input type="date" id="deliveryDate" name="deliveryDate" required>
            </div>
            <button type="submit" class="btn">Add Task</button>
        </form>
    </div>
</div>

    <!-- Pending Work Modal -->
    <div id="pendingWorkModal" class="modal hidden">
        <div class="modal-content">
            <span class="close" onclick="closeModal('pendingWorkModal')">&times;</span>
            <h2>Pending Work</h2>
            <table id="pendingWorkTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Received</th>
                        <th>Customer Name</th>
                        <th>Mobile Number</th>
                        <th>Work Type</th>
                        <th>Size</th>
                        <th>Description</th>
                        <th>Designer</th>
                        <th>Delivery Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <!-- Other Modals for Under Process and Printing are identical -->
    <script src="script.js"></script>
</body>
</html>
<!-- Printing Task Modal -->
<div id="printingTaskModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('printingTaskModal')">&times;</span>
        <h2>Printing Task</h2>
        <div class="task-details">
            <p><strong>Date Received:</strong> <span id="printingDateReceived"></span></p>
            <p><strong>Customer Name:</strong> <span id="printingCustomerName"></span></p>
            <p><strong>Work Type:</strong> <span id="printingWorkType"></span></p>
            <p><strong>Size:</strong> <span id="printingSize"></span></p>
            <p><strong>Description:</strong> <span id="printingDescription"></span></p>
            <p><strong>Designer:</strong> <span id="printingDesigner"></span></p>
            <p><strong>Delivery Date:</strong> <span id="printingDeliveryDate"></span></p>
        </div>
        <button class="btn" onclick="confirmComplete()">Complete</button>
        <button class="btn" onclick="closeModal('printingTaskModal')">Close</button>
    </div>
</div>
<!-- Add Task Modal -->
<div id="addTaskModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('addTaskModal')">&times;</span>
        <h2>Add Task</h2>
        <form id="taskForm">
            <div class="form-group">
                <label for="dateReceived">Date Received:</label>
                <input type="date" id="dateReceived" name="dateReceived" required>
            </div>
            <div class="form-group">
                <label for="customerName">Customer Name:</label>
                <input type="text" id="customerName" name="customerName" placeholder="Enter customer name" required>
            </div>
            <div class="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" required>
            </div>
            <div class="form-group">
                <label for="workType">Work Type:</label>
                <select id="workType" name="workType" onchange="handleWorkTypeChange()" required>
                    <option value="" disabled selected>Select work type</option>
                    <option value="Flex">Flex</option>
                    <option value="Frame">Frame</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div class="form-group flex-options hidden" id="flexOptions">
                <p>Select Flex Type:</p>
                <button type="button" class="btn" onclick="selectFlexType('Normal')">Normal</button>
                <button type="button" class="btn" onclick="selectFlexType('STAR')">STAR</button>
                <button type="button" class="btn" onclick="selectFlexType('Black Back')">Black Back</button>
                <button type="button" class="btn" onclick="selectFlexType('Light Board')">Light Board</button>
                <input type="hidden" id="selectedFlexType" name="selectedFlexType">
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" placeholder="Enter details about the task"></textarea>
            </div>
            <div class="form-group">
                <label for="designer">Designer:</label>
                <input type="text" id="designer" name="designer" placeholder="Enter designer's name">
            </div>
            <div class="form-group">
                <label for="deliveryDate">Delivery Date:</label>
                <input type="date" id="deliveryDate" name="deliveryDate" required>
            </div>
            <button type="submit" class="btn">Add Task</button>
        </form>
    </div>
</div>
<!-- Under Process Modal -->
<div id="underProcessModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('underProcessModal')">&times;</span>
        <h2>Under Process</h2>
        <div id="underProcessTasks">
            <!-- Example task -->
            <div class="task-item">
                <p><strong>Customer Name:</strong> John Doe</p>
                <p><strong>Work Type:</strong> Frame</p>
                <p><strong>Description:</strong> Wedding Frame Design</p>
                <button class="btn delete-btn" onclick="promptPassword('John Doe')">Delete</button>
            </div>
        </div>
        <button class="btn" onclick="closeModal('underProcessModal')">Close</button>
    </div>
</div>

<!-- Password Prompt Modal -->
<div id="passwordPromptModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('passwordPromptModal')">&times;</span>
        <h2>Enter Password</h2>
        <p id="deleteTaskName"></p>
        <input type="password" id="deletePassword" placeholder="Enter Password">
        <button class="btn" onclick="verifyPassword()">Submit</button>
        <button class="btn" onclick="closeModal('passwordPromptModal')">Cancel</button>
    </div>
</div>
<!-- Printing Section -->
<div id="printingModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('printingModal')">&times;</span>
        <h2>Printing</h2>
        <div id="printingTasks">
            <!-- Example task -->
            <div class="task-item">
                <p><strong>Customer Name:</strong> Jane Doe</p>
                <p><strong>Work Type:</strong> Flex</p>
                <p><strong>Description:</strong> Banner Design</p>
                <button class="btn complete-btn" onclick="completePrintingTask('Jane Doe')">Complete</button>
            </div>
        </div>
        <button class="btn" onclick="closeModal('printingModal')">Close</button>
    </div>
</div>

<!-- Complete Work Section -->
<div id="completeWorkModal" class="modal hidden">
    <div class="modal-content">
        <span class="close" onclick="closeModal('completeWorkModal')">&times;</span>
        <h2>Complete Work</h2>
        <div id="completeWorkTasks">
            <!-- Dynamically added tasks will appear here -->
        </div>
        <button class="btn" onclick="closeModal('completeWorkModal')">Close</button>
    </div>
</div>
/* General Styling */
body {
    font-family: 'Arial', sans-serif;
    background: #f1f5f8;
    color: #333;
    margin: 0;
    padding: 0;
}

.dashboard {
    text-align: center;
    padding: 20px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    color: white;
}

.dashboard-header h1 {
    margin: 0;
    font-size: 2rem;
    padding-bottom: 15px;
    font-weight: bold;
}

.dashboard-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.dashboard-btn {
    background: #fff;
    color: #2575fc;
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
}

.dashboard-btn:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.dashboard-btn .btn-icon {
    font-size: 2rem;
}

.dashboard-btn .btn-label {
    margin-top: 10px;
    font-weight: bold;
}

.add-task-btn {
    background: #6a11cb;
    color: #fff;
}

.pending-btn {
    background: #ff9f00;
    color: #fff;
}

.under-process-btn {
    background: #00c2a7;
    color: #fff;
}

.printing-btn {
    background: #f44336;
    color: #fff;
}

/* Modal Styling */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
}

.modal .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

/* Colorful themes for modal content */
#addTaskModal .modal-content {
    border-left: 5px solid #6a11cb;
}

#pendingWorkModal .modal-content {
    border-left: 5px solid #ff9f00;
}

#underProcessModal .modal-content {
    border-left: 5px solid #00c2a7;
}

#printingModal .modal-content {
    border-left: 5px solid #f44336;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Hidden class for modal */
.hidden {
    display: none;
}

/* Form Input Styling */
input, select, textarea {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

textarea {
    resize: vertical;
}

button {
    background-color: #2575fc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #6a11cb;
}

form {
    margin-top: 20px;
}

/* Table Styling for Pending Work */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
}

th {
    background-color: #f1f5f8;
}

/* Responsive Design */
@media (max-width: 768px) {
    .dashboard-content {
        flex-direction: column;
    }

    .dashboard-btn {
        width: 140px;
        height: 140px;
    }

    .modal-content {
        width: 95%;
    }
}
/* View Task Modal Styling */
#viewTaskModal .task-details p {
    font-size: 1.1rem;
    margin-bottom: 10px;
}

#viewTaskModal .task-details img {
    margin-top: 10px;
}

/* Close button styling */
#viewTaskModal .btn {
    background-color: #2575fc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

#viewTaskModal .btn:hover {
    background-color: #6a11cb;
}
/* View Task Modal Styling */
#viewTaskModal .task-details p {
    font-size: 1.1rem;
    margin-bottom: 10px;
}

#viewTaskModal .task-details img {
    margin-top: 10px;
}

/* Close button styling */
#viewTaskModal .btn {
    background-color: #2575fc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

#viewTaskModal .btn:hover {
    background-color: #6a11cb;
}
/* Delivery Section Styling */
#deliverySection {
    margin-top: 20px;
}

#deliverySection .task-item {
    background-color: #f1f5f8;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

#deliverySection .task-item button {
    background-color: #6a11cb;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
}

#deliverySection .task-item button:hover {
    background-color: #2575fc;
}
/* Hide elements by default */
.hidden {
    display: none;
}

/* Flex options button styling */
.flex-options button {
    margin: 5px;
    background-color: #2575fc;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.flex-options button:hover {
    background-color: #6a11cb;
}
/* Modal styling */
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 400px;
}

.modal-content {
    text-align: center;
}

.modal .btn {
    margin: 10px 5px;
    padding: 10px 15px;
    border: none;
    background-color: #6a11cb;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.modal .btn:hover {
    background-color: #2575fc;
}

/* Hide modal by default */
.hidden {
    display: none;
}
/* Buttons */
.complete-btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.complete-btn:hover {
    background-color: #218838;
}

/* Complete Work Section */
#completeWorkTasks .task-item {
    background-color: #f8f9fa;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
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


