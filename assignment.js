var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TaskHandler = /** @class */ (function () {
    function TaskHandler() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskHandler.prototype.addTask = function (name) {
        this.tasks.push({ id: this.currentId++, name: name, status: 'Pending' });
    };
    TaskHandler.prototype.completeTask = function (id) {
        this.tasks = this.tasks.map(function (task) {
            return task.id === id ? __assign(__assign({}, task), { status: 'Completed' }) : task;
        });
    };
    TaskHandler.prototype.displayTasks = function () {
        var _this = this;
        this.tasks.forEach(function (task) {
            _this.tasks.map(function (task) { return console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status)); });
        });
    };
    return TaskHandler;
}());
var taskHandler = new TaskHandler();
taskHandler.addTask("Learn TypeScript");
taskHandler.completeTask(1);
taskHandler.displayTasks();
taskHandler.addTask("Learn Angular");
taskHandler.displayTasks();
taskHandler.completeTask(2);
