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

    const taskText = document.createTextNode(element);

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "OK";
    checkBtn.classList.add("check-button");
    checkBtn.setAttribute("onclick", "checkBtn(event)");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("delete-button");
    removeBtn.setAttribute("onclick", "removeFromList(event)");

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
