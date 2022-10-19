const btnCreateTask = document.getElementById("btnTask");
let delets = document.querySelectorAll(".btnDelete");
let inputTask = document.getElementById("inputTask");
let contTask = 0;

function crateTask() {
  const areaTasks = document.getElementById("taskArea");

  const taskLine = document.createElement("div");
  const checkboxTask = document.createElement("input");
  const task = document.createElement("p");
  const btnArea = document.createElement("div");
  const btnEdit = document.createElement("button");
  const iconEdit = document.createElement("i");
  const btnDelete = document.createElement("button");
  const iconDelete = document.createElement("i");
  const divCheckTask = document.createElement("div");

  if (inputTask.value) {
    taskLine.classList.add("task");
    taskLine.id = `task-${contTask}`;
    divCheckTask.classList.add("taskCheck");
    task.innerText = `${inputTask.value}`;
    task.id = `task-${contTask}`;
    checkboxTask.type = "checkbox";
    checkboxTask.id = `check-${contTask}`;
    btnArea.classList.add("btnArea");
    btnEdit.classList.add("btn", "btn-outline-warning", "btnEdit");
    btnEdit.id = `editTask-${contTask}`;
    iconEdit.classList.add("bi", "bi-pencil");
    btnDelete.classList.add("btn", "btn-outline-danger", "btnDelete");
    btnDelete.id = `deleteTask-${contTask}`;
    iconDelete.classList.add("bi", "bi-trash");

    divCheckTask.appendChild(checkboxTask);
    divCheckTask.appendChild(task);
    btnEdit.appendChild(iconEdit);
    btnDelete.appendChild(iconDelete);
    btnArea.appendChild(btnEdit);
    btnArea.appendChild(btnDelete);
    taskLine.append(divCheckTask, btnArea);
    areaTasks.appendChild(taskLine);

    document
      .getElementById(`deleteTask-${contTask}`)
      .addEventListener("click", function () {
        taskLine.remove();
      });

    // document
    //   .getElementById(`editTask-${contTask}`)
    //   .addEventListener("click", function () {});

    if (`check-${contTask}:checked`) {
    }

    contTask++;
    inputTask.value = "";
  } else {
    alert("Digite uma task!!!");
  }
}

inputTask.addEventListener("keydown", function (x) {
  if (x.key == "Enter") {
    crateTask();
  }
});

btnCreateTask.addEventListener("click", crateTask);
