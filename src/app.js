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

    this.todos.forEach(todo => {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(todo => {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  },
};
const view = {
  displayTodos() {
    const todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach((todo, index) => {
      const todoLi = document.createElement('li');
      let todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = `[x] ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `[ ] ${todo.todoText}`;
      }
      todoLi.id = index;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteBtn());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteBtn: () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    return deleteBtn;
  },
  // Event Delegation
  setupEventListeners: () => {
    const todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', e => {
      const elementClicked = e.target;
      if (elementClicked.className === 'delete-btn') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

const handlers = {
  addTodo: () => {
    const addTodoTextInput = document.getElementById('add-todo-text-input');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: () => {
    const changeTodoIndexInput = document.getElementById('change-todo-index-input');
    const changeTodoTextInput = document.getElementById('change-todo-text-input');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: index => {
    todoList.deleteTodo(index);
    view.displayTodos();
  },
  toggleCompleted: () => {
    const toggleCompletedIndexInput = document.getElementById('toggle-completed-index-input');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  },
};

view.setupEventListeners();
