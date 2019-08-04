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

const handlers = {
  displayTodos() {
    todoList.displayTodos();
  },
  addTodo() {
    const addTodoTextInput = document.getElementById('add-todo-text-input');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo() {
    const changeTodoIndexInput = document.getElementById('change-todo-index-input');
    const changeTodoTextInput = document.getElementById('change-todo-text-input');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo() {
    const deleteTodoIndexInput = document.getElementById('delete-todo-index-input');
    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
    deleteTodoIndexInput.value = '';
  },
  toggleCompleted() {
    const toggleCompletedIndexInput = document.getElementById('toggle-completed-index-input');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
  },
  toggleAll() {
    todoList.toggleAll();
  },
};
