class TodoApp {
    constructor() {
        this.todos = this.loadTodos();
    }

    loadTodos() {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(todo) {
        this.todos.push({ text: todo, completed: false });
        this.saveTodos();
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
    }

    toggleTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
        this.saveTodos();
    }

    filterTodos(filter) {
        switch (filter) {
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            default:
                return this.todos;
        }
    }

    getStatistics() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const active = total - completed;
        return { total, completed, active };
    }
}