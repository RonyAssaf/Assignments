class TaskHandler {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        this.tasks.push({ id: this.currentId++, name, status: 'Pending' });
    }

    completeTask(id: number): void {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, status: 'Completed' } : task
        );
    }

    displayTasks(): void {
        this.tasks.forEach(task => {
            this.tasks.map(task => console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`));
        });
    }
}


const taskHandler = new TaskHandler();
taskHandler.addTask("Learn TypeScript");
taskHandler.completeTask(1);
taskHandler.displayTasks();
taskHandler.addTask("Learn Angular");
taskHandler.displayTasks();
taskHandler.completeTask(2);
