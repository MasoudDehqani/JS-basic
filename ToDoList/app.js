class Task {
  constructor(description, isDone, id) {
    this.description = description;
    this.isDone = isDone;
    this.id = id;
  }
}

class TaskOrganizer {
  constructor() {
    this.tasks = [];
    this.removedIds = [];
    this.doneTasks = [];
  }

  add(taskDescription) {
    const { tasks } = this;
    let newTask = new Task(taskDescription);
    newTask.isDone = false;
    if (tasks.length === 0) {
      newTask.id = 1;
    } else if (this.removedIds.length === 0) {
      newTask.id = tasks[tasks.length - 1].id + 1;
    } else {
      newTask.id = this.removedIds[0];
    }
    tasks.push(newTask);
    return newTask;
  }

  remove(task) {
    const { tasks, doneTasks } = this;
    this.removedIds.push(task.id);
    const taskIndex = tasks.indexOf(task);
    const doneTaskIndex = doneTasks.indexOf(task);
    taskIndex !== -1 && tasks.splice(taskIndex, 1);
    doneTaskIndex !== -1 && doneTasks.splice(doneTaskIndex, 1);
  }

  doneUndone(task) {
    const { doneTasks } = this;
    task.isDone = !task.isDone;
    if (task.isDone) doneTasks.push(task);
    else {
      let newDoneTaskIndex = doneTasks.indexOf(task);
      doneTasks.splice(newDoneTaskIndex, 1);
    }
  }
}

let builder = {
  create: function (tagName) {
    return new TagBuilder(tagName);
  },
};

class TagBuilder {
  constructor(tagName) {
    this.tagName = document.createElement(tagName);
  }

  appendTo(parent) {
    parent.appendChild(this.tagName);
    return this;
  }

  setText(text) {
    this.tagName.textContent = text;
    return this;
  }

  setClass(className) {
    this.tagName.setAttribute("class", className);
    return this;
  }

  setId(id) {
    this.tagName.setAttribute("id", id);
    return this;
  }

  setPlaceholder(placeholder) {
    this.tagName.setAttribute("placeholder", placeholder);
    return this;
  }

  setType(type) {
    this.tagName.type = type;
    return this;
  }

  returnTagElement() {
    return this.tagName;
  }
}

class App {
  constructor(taskContainer, taskInput, addButton) {
    this.task = new TaskOrganizer();
    this.tasksContainer = taskContainer;
    this.taskInput = taskInput;
    this.addButton = addButton;
  }

  init() {
    // destructuring "this" in order to not repeatedly using "this.task" or "this.taskInput" ...
    const { task, taskInput, addButton } = this;

    addButton.addEventListener("click", () => {
      if (taskInput.value !== "") {
        task.add(taskInput.value);
        console.log(task.tasks);
        this.tasksContainer.innerHTML = "";
        this.printTasks();
        taskInput.value = "";
      } else {
        alert("write something");
      }
    });

    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addButton.click();
      }
    });
  }

  printTasks() {
    // destructuring "this" in order to not repeatedly using "this.task" or "this.taskContainer"
    const { task, tasksContainer } = this;

    task.tasks.forEach((t) => {
      const taskItem = builder
        .create("li")
        .setText(t.description)
        .appendTo(tasksContainer)
        .returnTagElement();

      taskItem.onclick = () => {
        taskItem.classList.toggle("checked");
        task.doneUndone(t);
        console.log("tasks: ", task.tasks);
        console.log("doneTasks: ", task.doneTasks);
      };

      builder
        .create("span")
        .setText("\u2717")
        .setClass("close")
        .appendTo(taskItem)
        .returnTagElement()
        .addEventListener("click", (e) => {
          e.stopPropagation();
          task.remove(t);
          console.log(task.tasks);

          tasksContainer.removeChild(taskItem);
        });
    });
  }
}

let app = new App(
  document.querySelector("#myUL"),
  document.querySelector("#myInput"),
  document.querySelectorAll(".addBtn")[0]
);

app.init();
