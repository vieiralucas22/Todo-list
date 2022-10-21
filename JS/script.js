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
    checkboxTask.classList.add("checkbox");
    btnArea.classList.add("btnArea");
    btnDelete.classList.add("btn", "btn-outline-danger", "btnDelete");
    btnDelete.id = `deleteTask-${contTask}`;
    iconDelete.classList.add("bi", "bi-trash");

    divCheckTask.appendChild(checkboxTask);
    divCheckTask.appendChild(task);
    btnDelete.appendChild(iconDelete);
    btnArea.appendChild(btnDelete);
    taskLine.append(divCheckTask, btnArea);
    areaTasks.appendChild(taskLine);

    document
      .getElementById(`deleteTask-${contTask}`)
      .addEventListener("click", function () {
        taskLine.remove();
      });

    document.querySelectorAll(".checkbox").forEach((e) => {
      e.addEventListener("change", function () {
        if (e.checked) {
          task.classList.add("taskSuccess");
        } else {
          task.classList.remove("taskSuccess");
        }
      });
    });

    if (`check-${contTask}:checked`) {
    }

    contTask++;
    inputTask.value = "";
  } else {
  }
}

inputTask.addEventListener("keydown", function (x) {
  if (x.key == "Enter") {
    crateTask();
  }
});

btnCreateTask.addEventListener("click", crateTask);
