const btnCreateTask = document.getElementById("btnTask");
let contTask = 0;

btnCreateTask.addEventListener("click", function () {
  const areaTasks = document.getElementById("taskArea");
  let inputTask = document.getElementById("inputTask");

  const taskLine = document.createElement("div");
  const task = document.createElement("p");
  const btnArea = document.createElement("div");
  const btnEdit = document.createElement("button");
  const iconEdit = document.createElement("i");
  const btnDelete = document.createElement("button");
  const iconDelete = document.createElement("i");

  taskLine.classList.add("task");
  taskLine.id = `task-${contTask}`;
  task.innerText = `${inputTask.value}`;
  btnArea.classList.add("btnArea");
  btnEdit.classList.add("btn", "btn-outline-warning");
  btnEdit.id = `editTask-${contTask}`;
  iconEdit.classList.add("bi", "bi-pencil");
  btnDelete.classList.add("btn", "btn-outline-danger");
  btnDelete.id = `deleteTask-${contTask}`;
  iconDelete.classList.add("bi", "bi-trash");

  btnEdit.appendChild(iconEdit);
  btnDelete.appendChild(iconDelete);
  btnArea.appendChild(btnEdit);
  btnArea.appendChild(btnDelete);
  taskLine.append(task, btnArea);
  areaTasks.appendChild(taskLine);

  contTask++;
  inputTask.value = "";
});
