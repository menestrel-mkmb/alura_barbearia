(() => {
  let list = document.querySelector(".list");
  let listInput = document.querySelector(".form-input").value;
  const addBtn = document.querySelector(".add__btn");
  let listObject = [];

  const clearListnInput = () => {
    list.innerHTML = "";
    document.querySelector(".form-input").value = "";
  };

  const updateInputValue = () => {
    listInput = document.querySelector(".form-input").value;
  };

  const createTaskNode = (index) => {
    const node = document.createElement("li");
    const taskNumberString = `task-${index}`;
    node.setAttribute("data-task", `task-${index}`);
    node.classList.add("task", taskNumberString);

    return node;
  };

  const createTaskText = (element, index) => {
    const taskText = document.createElement("p");
    taskText.setAttribute("data-txt", `task-${index}`);
    taskText.innerText = element;
    return taskText;
  };

  const createCheckBtn = (index) => {
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Concluir";
    checkBtn.classList.add("check-button");
    checkBtn.setAttribute("data-btn", `task-${index}`);
    checkBtn.addEventListener("click", checkTask);

    return checkBtn;
  };

  const createRemoveBtn = (index) => {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("delete-button");
    removeBtn.setAttribute("data-btn", `task-${index}`);
    removeBtn.addEventListener("click", removeFromList);

    return removeBtn;
  };

  const appendOnList = () => {
    listObject.forEach((element, index) => {
      //criando elementos
      const node = createTaskNode(index);

      //juntando elementos
      node.appendChild(createTaskText(element, index));
      node.appendChild(createCheckBtn(index));
      node.appendChild(createRemoveBtn(index));

      list.appendChild(node);
    });
  };

  const insertOnList = (event) => {
    event.preventDefault();

    //logic to add
    updateInputValue();
    if (listInput === "") return;
    listObject.push(listInput);

    clearListnInput();
    appendOnList();
  };

  const removeFromList = (event) => {
    event.preventDefault();

    //logic to remove
    const btn = event.target;
    const taskIndex = btn.dataset.btn;
    const text = document.querySelector(`[data-txt="${taskIndex}"]`).innerText;

    listObject = listObject.filter((task) => {
      return task != text;
    });

    clearListnInput();
    appendOnList();
  };

  const checkTask = (event) => {
    const btn = event.target;
    const taskIndex = btn.dataset.btn;
    const task = document.querySelector(`[data-txt="${taskIndex}"]`);

    task.classList.toggle("done");
  };

  addBtn.addEventListener("click", insertOnList);
  appendOnList();
})();
