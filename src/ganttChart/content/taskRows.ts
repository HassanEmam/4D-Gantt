import { Task } from "../classes/task";
import GanttChart from "../ganttChart";
import { TaskDuration } from "../classes/taskDuration";
import Grid from "./grid";
import { EventEmitter } from "../Utils/EventEmitter";

export default class TaskRows extends EventEmitter {
  containerTasks: HTMLElement;
  tasks: Task[];
  taskDurations: TaskDuration[];
  taskSelect: HTMLSelectElement;
  grid: Grid;
  ganttChart: GanttChart;

  constructor(ganttChart: GanttChart) {
    super();
    this.ganttChart = ganttChart;
    this.containerTasks = this.ganttChart.containerTasks;
    this.tasks = this.ganttChart.tasks;
    this.taskDurations = this.ganttChart.taskDurations;
    this.taskSelect = this.ganttChart.taskSelect;
    this.grid = this.ganttChart.grid;
  }

  createTaskRows() {
    const emptyRow = document.createElement("div");
    emptyRow.className = "gantt-task-row";
    // first 3 rows are empty
    for (let i = 0; i < 3; i++) {
      const newEl = emptyRow.cloneNode(true);
      this.containerTasks.appendChild(newEl);
    }

    // add task select values
    let taskOptionsHTMLStrArr: string[] = [];

    this.tasks.forEach((task) => {
      const taskRowEl = document.createElement("div");
      taskRowEl.id = task.id.toString();
      taskRowEl.className = "gantt-task-row";

      const taskRowElInput = document.createElement("input");
      taskRowEl.appendChild(taskRowElInput);
      taskRowElInput.value = task.name;

      // update task name
      taskRowElInput.addEventListener("change", (e) => {
        this.updateTasks(e);
      });

      taskOptionsHTMLStrArr.push(
        `<option value="${task.id}">${task.name}</option>`
      );

      // add delete button
      const taskRowElDelBtn = document.createElement("button");
      taskRowElDelBtn.innerText = "✕";
      taskRowElDelBtn.addEventListener("click", (e) => {
        this.deleteTask(e);
      });
      taskRowEl.appendChild(taskRowElDelBtn);

      this.containerTasks.appendChild(taskRowEl);
    });
    this.taskSelect.innerHTML = `
      ${taskOptionsHTMLStrArr.join("")}
    `;
  }

  updateTasks(e: Event) {
    const target = e.target as HTMLElement;
    const parent = target.parentNode as HTMLElement;
    const idNum = parseInt(parent.id, 0);
    const { value } = parent.firstChild as HTMLInputElement;
    let newTasks = this.tasks.filter((task) => task.id !== idNum);
    newTasks.push({ id: idNum, name: value });

    newTasks = newTasks.sort((a, b) => a.id - b.id);
    // update original / make API request to update data on backend
    this.tasks = newTasks;

    // update tasks select
    let newTaskOptionsHTMLStrArr: string[] = [];
    this.tasks.forEach((task) => {
      newTaskOptionsHTMLStrArr.push(
        `<option value="${task.id}">${task.name}</option>`
      );

      this.taskSelect.innerHTML = `
        ${newTaskOptionsHTMLStrArr.join("")}
      `;
    });
  }

  deleteTask(e: Event) {
    const target = e.target as HTMLElement;
    const parent = target.parentNode as HTMLElement;
    const id = parseInt(parent.id, 0);
    // filter out task to delete
    const newTasks = this.tasks.filter((task) => task.id !== id);
    // update original / make API request to update data on backend
    this.tasks = newTasks;

    // delete any taskDurations associated with the task
    const newTaskDurations = this.taskDurations.filter(
      (taskDuration) => taskDuration.task !== id
    );
    this.taskDurations = newTaskDurations;

    this.trigger("deleteTask", [
      { tasks: newTasks, taskDurations: newTaskDurations },
    ]);
  }
}
