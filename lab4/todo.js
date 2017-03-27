const uID = require("node-uuid");
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
module.exports = {

    getAllTasks: function() {
        return todoItems().then((taskCollection) =>
        {
            return taskCollection.find({}).toArray();
        });
    },
    createTask: function (title, description) {
        return todoItems().then((taskCollection) => {
            if(title == undefined || title == null || !(typeof title === 'string'))
            {
                throw("Enter a valid title!");
            }
            if(description == undefined || title == null || !(typeof description === 'string'))
            {
                throw("Enter a valid description!");
            }
            let todoList = {
                _id: uID.v4(),
                title: title,
                description: description,
                completed: false,
                timeCompleted: null
            };

            return taskCollection.insertOne(todoList).then((newInsertInfo) => {
		//console.log(newInsertInfo);
                return newInsertInfo.insertedId;
            }).then((newId) => {
		//console.log("newId " + newId);
                return this.getTask(newId);
            });
        });
    },
    getTask: function (id) {
        return todoItems().then((taskCollection) => {
            if(id == undefined || id == null || !(typeof id === 'string'))
            {
                throw("enter a valid id");
            }
            return taskCollection.findOne({_id: id});
        });
    },
    removeTask: function (id) {
        return todoItems().then((taskCollection) => {
            if(id == undefined || id == null || !(typeof id === 'string'))
            {
                throw("Enter a valid id");
            }
            return taskCollection.removeOne({_id: id}).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw ("Could not delete task with id of " + id);
                }
            });
        });
    },
    /*
    updateTask: (updatedTask) => {
        getTask(updatedTask.id).then((task) => {
            return todoItems().then(taskCollection) => {
                return taskCollection.updateOne({_id: task.id }, updatedTask).then(() => {
                    return this.getTask(id);
                    });
            });
        }).catch((err) => {
            throw("task not found");
        });

    });*/
    updateTask: function (updatedTask)  {
        return todoItems().then((taskCol) => {
            let updatedTaskData = {};

            if(updatedTask.title) {
                updatedTaskData.title = updatedTask.title;
            }

            if(updatedTask.description) {
                updatedTaskData.description = updatedTask.description;
            }

            if(updatedTask.completed)
            {
                updatedTaskData.completed = updatedTask.completed;
            }

            if(updatedTask.timeCompleted)
            {
                updatedTaskData.timeCompleted = updatedTask.timeCompleted;
            }

            let updateCommand = {
                $set: updatedTaskData
            }

            return taskCol.updateOne({_id: updatedTask._id}, updateCommand).then((result) => {
                return this.getTask(updatedTask._id);
            });
        });
    }

        
};
