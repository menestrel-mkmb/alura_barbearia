let list = document.querySelector(".list");
let listInput = document.querySelector(".form-input").value;

let listObject = [];

const clearListnInput = () => {
  list.innerHTML = "";
  document.querySelector(".form-input").value = "";
};

const updateInputValue = () => {
  listInput = document.querySelector(".form-input").value;
};

const appendOnList = () => {
  listObject.forEach((element, index) => {
    //criando elementos
    const node = document.createElement("li");
    const taskNumberString = `task-${index}`;
    node.classList.add("task", taskNumberString);

    const taskText = document.createElement("p");
    taskText.setAttribute("data-task", `task-${index}`);
    taskText.innerText = element;

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "OK";
    checkBtn.classList.add("check-button");
    checkBtn.setAttribute("data-btn", `task-${index}`);
    checkBtn.addEventListener("click", checkTask);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("delete-button");
    removeBtn.addEventListener("click", removeFromList);

    //juntando elementos
    node.appendChild(taskText);
    node.appendChild(checkBtn);
    node.appendChild(removeBtn);

    list.appendChild(node);
  });
};

const insertOnList = (event) => {
  event.preventDefault();

  //logic to add
  updateInputValue();
  listObject.push(listInput);

  clearListnInput();
  appendOnList();
};

const removeFromList = (event) => {
  //logic to remove
  const taskRegex = RegExp(/task-\d*/g);

  const taskToDelete = document.querySelector(``).value;
  listObject.filter((value) => {
    return value !== taskToDelete;
  });

  clearListnInput();
  appendOnList();
};

const checkTask = (event) => {
  const btn = event.target;
  const taskIndex = btn.dataset.btn;
  const task = document.querySelector(`[data-task="${taskIndex}"]`);

  task.style.setProperty("text-decoration", "line-through");
};
