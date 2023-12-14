const form = document.querySelector("form");
let todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const deleteBtn = document.querySelectorAll("#delete-btn");

todoList.addEventListener("click", (e) => {
  if (e.target.id === "delete-btn") {
    let li = e.target.parentNode;

    li.parentNode.removeChild(li);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoText = todoInput.value;

  if (todoText !== "") {
    todoList.innerHTML += `
            <li
            class="flex justify-between items-center bg-yellow-500 px-2 py-2 rounded-lg mb-2"
          >
            <span>${todoText}</span>
            <button class="px-3 py-2 bg-blue-700 rounded-lg delete" id="delete-btn">Delete</button>
          </li>
        
        `;
    todoText = "";
  } else {
    alert("Please enter a todo");
  }
});
