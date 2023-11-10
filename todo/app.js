const form = document.querySelector("form");
let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input");
  let currTodo = {
    msg: input.value,
    done: false,
    id: (Math.random() * 100000).toFixed(0),
    timestamp: Date.now(),
  };
  todos.push(currTodo);
  form.reset();
  mapTodos();
});

function mapTodos() {
  let todosHTML = todos.map(
    (todo) =>
      `<div class="todo">
       <input id=${todo.id} class="checkbox" ${
        todo.done && "checked"
      } type="checkbox"/>
       <p class="${todo.done && "done"}">${todo.msg}</p>
       <button id=${todo.id} class="delete">Del</button>
    </div>`
  );

  const parent = document.querySelector(".todos");
  parent.innerHTML = todosHTML.join("");

  const inputs = document.querySelectorAll(".checkbox");
  inputs.forEach((item) => {
    item.addEventListener("change", (e) => {
      markAsDone(e.target.id);
    });
  });

  const delete_btns = document.querySelectorAll(".delete");
  delete_btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      deleteTodo(e.target.id);
    });
  });
}

function markAsDone(id) {
  todos.map((todo) => {
    if (todo.id === id) {
      if (todo.done) todo.done = false;
      else todo.done = true;
    }
  });
  mapTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  mapTodos();
}
