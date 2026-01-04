const todos = [{ id: 1, todo: "Buy Milk", category: "buy", complete: true }];
const listElement = document.querySelector("#list");
const addButtonElement = document.querySelector("#addButton");

addButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
  const todoValue = document.querySelector("#todo").value;
  const categoryValue = document.querySelector("#category").value;

  const newTodo = {
    id: Math.floor(Math.random() * 100000),
    todo: todoValue,
    category: categoryValue,
    complete: false,
  };

  todos.unshift(newTodo);

  renderTodos();
});

function renderTodos() {
  listElement.innerHTML = "";
  for (const todo of todos) {
    const liElement = document.createElement("li");
    liElement.textContent = `${todo.todo} - ${todo.category}`;
    liElement.setAttribute("id", todo.id);

    todo.complete
      ? liElement.classList.add("italic", "line-through")
      : liElement.classList.remove("italic", "line-through");

    listElement.append(liElement);
  }
  addClickEventToLiElements();
}

function addClickEventToLiElements() {
  const liElements = document.querySelectorAll("li");
  for (const liElement of liElements) {
    liElement.addEventListener("click", function () {
      const foundElementIndex = todos.findIndex(
        (todo) => todo.id === +this.getAttribute("id")
      );
      todos[foundElementIndex].complete = !todos[foundElementIndex].complete;
      console.log("TODOS", todos);
      renderTodos();
    });
  }
}

function startApp() {
  renderTodos();
}

startApp();
