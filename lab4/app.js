const todoList = require("./todo");

//let addLunch = todoList.createTask("Lunch", "Go and eat lunch");


/*
addLunch.then((data) => {
	console.log(data);
});*/

//todoList.createTask("dinner", "yum yum");
//todoList.createTask("breakfast", "egg?");
/*
let me = todoList.getTask('fe4395da-e5bb-4a54-928c-a2724366f42d');


let updateMe = me.then((task) => {
	console.log(task);

	task.completed = true;

	return todoList.updateTask(task);
});


updateMe.then((duh) => {
	console.log(duh);
});*/


let getAllTasks = todoList.getAllTasks();

getAllTasks.then((data) => {
	console.log(data);
	todoList.removeTask('fe4395da-e5bb-4a54-928c-a2724366f42d').then(() => {
		todoList.getAllTasks().then((data) => {
			console.log(data);
		});
	}).catch((err) => {
		console.log(err);
	});
});

todoList.drop();

