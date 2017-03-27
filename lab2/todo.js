const uID = require("node-uuid");
module.exports = {
    createTask: function (title, description) {
        if(title == undefined || title == null || !(typeof title === 'string'))
        {
            throw "Enter a valid title!"
        }
        if(description == undefined || title == null || !(typeof description === 'string'))
        {
            throw "Enter a valid description!"
        }
        const todoList = {
            id: uID.v4(),
            title: title,
            description: description,
            completed: false,
            timeCompleted: null
        };
        return todoList;
    },
    completeTask: (task) => {
        if(task != undefined && task != null)
        {
            task.completed = true;
            task.timeCompleted = new Date().toString();
        }
        else
        {
            throw "Enter a valid task!";
        }
    }
};
