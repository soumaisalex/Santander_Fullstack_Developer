var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

function increment() {
    currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
}

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
}

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}
