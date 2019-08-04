const todoList = {
  todos: [],
  displayTodos() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty.');
    } else {
      console.log(`My todos:`);
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log(`(x) ${this.todos[i].todoText}`);
        } else {
          console.log(`( ) ${this.todos[i].todoText}`);
        }
      }
    }
  },
  addTodo(todoText) {
    this.todos.push({
      todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted(index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll() {
    const totalTodos = this.todos.length;
    let completedTodos = 0;
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
};

const displayTodosBtn = document.querySelector('#display-todos-btn');
const toggleAllBtn = document.querySelector('#toggle-all-btn');

displayTodosBtn.addEventListener('click', () => {
  todoList.displayTodos();
});

toggleAllBtn.addEventListener('click', () => {
  todoList.toggleAll();
});
