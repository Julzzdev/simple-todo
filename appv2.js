const app = {
  todos: [
    {
      id: crypto.randomUUID(),
      todo: "Clean Room",
      category: "House Chore",
      complete: true,
    },
  ],
  listElement: document.querySelector("#list"),
  buttonElement: document.querySelector("#addButton"),
  addNewTodo(event) {
    event.preventDefault();
    console.log("CLICKY PRROU!!");
    const todoValue = document.querySelector("#todo").value;
    const categoryValue = document.querySelector("#category").value;

    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoValue,
      category: categoryValue,
      complete: false,
    };

    this.todos.unshift(newTodo);
    this.renderTodos();
  },
  addLiClickEvent() {
    const liElements = document.querySelectorAll("li");
    for (const liElement of liElements) {
      liElement.addEventListener("click", () => {
        const foundTodoIndex = this.todos.findIndex(
          (todo) => todo.id === liElement.getAttribute("id")
        );
        this.todos[foundTodoIndex].complete =
          !this.todos[foundTodoIndex].complete;
        console.log(this.todos);
        this.renderTodos();
      });
    }
  },
  renderTodos() {
    if (this.todos && this.todos.length > 0) {
      this.listElement.innerHTML = "";
      for (const todo of this.todos) {
        const liElement = document.createElement("li");
        liElement.textContent = `${todo.todo} - ${todo.category}`;
        liElement.setAttribute("id", todo.id);

        todo.complete
          ? liElement.classList.add("italic", "line-through")
          : liElement.classList.remove("italic", "line-through");

        this.listElement.append(liElement);
      }
      this.addLiClickEvent();
    }
  },
  startApp() {
    this.buttonElement.addEventListener("click", (event) =>
      this.addNewTodo(event)
    );
    this.renderTodos();
  },
};

app.startApp();
