const todoList = {
  todos: [],
  addTodo(todoText) {
    this.todos.push({
      todoText,
      completed: false,
    });
  },
  changeTodo(index, todoText) {
    this.todos[index].todoText = todoText;
  },
  deleteTodo(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted(index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
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
  },
};
const view = {
  displayTodos() {
    const todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    for (let i = 0; i < todoList.todos.length; i++) {
      const todoLi = document.createElement('li');
      const todo = todoList.todos[i];
      let todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = `[x] ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `[ ] ${todo.todoText}`;
      }

      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteBtn());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteBtn: () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    return deleteBtn;
  },
};
const handlers = {
  addTodo() {
    const addTodoTextInput = document.getElementById('add-todo-text-input');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo() {
    const changeTodoIndexInput = document.getElementById('change-todo-index-input');
    const changeTodoTextInput = document.getElementById('change-todo-text-input');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo() {
    const deleteTodoIndexInput = document.getElementById('delete-todo-index-input');
    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
    deleteTodoIndexInput.value = '';
    view.displayTodos();
  },
  toggleCompleted() {
    const toggleCompletedIndexInput = document.getElementById('toggle-completed-index-input');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
    view.displayTodos();
  },
  toggleAll() {
    todoList.toggleAll();
    view.displayTodos();
  },
};

const debugFunction = fn => {
  debugger;
  fn();
};
