import { createHtmlContentFragment } from "./htmlContent";
import { Task } from "./classes/task";

import {
  monthDiff,
  dayDiff,
  getDaysInMonth,
  getDayOfWeek,
  createFormattedDateFromStr,
  createFormattedDateFromDate,
  months,
} from "./Utils/utils";
import { TaskDuration } from "./classes/taskDuration";

import Grid from "./content/grid";

export default class GenttChart {
  tasks: Task[];
  taskDurations: TaskDuration[];
  ganttChartElement: HTMLElement;
  contentFragment: DocumentFragment;
  containerTasks: HTMLElement;
  monthOptionsHTMLStrArr: string[];
  grid: Grid;
  fromSelectMonth: HTMLSelectElement;
  fromSelectYear: HTMLSelectElement;
  containerTimePeriods: HTMLElement;
  addTaskForm: HTMLFormElement;
  addTaskDurationForm: HTMLFormElement;
  taskSelect: HTMLSelectElement;
  toSelectYear: HTMLSelectElement;
  toSelectMonth: HTMLSelectElement;

  constructor(
    ganttChartElement: HTMLElement,
    tasks: Task[],
    taskDurations: TaskDuration[]
  ) {
    this.ganttChartElement = ganttChartElement;
    this.tasks = tasks;
    this.taskDurations = taskDurations;
    this.contentFragment = createHtmlContentFragment();
    this.fromSelectYear =
      this.contentFragment.querySelector("#from-select-year");
    this.fromSelectMonth =
      this.contentFragment.querySelector("#from-select-month");
    this.toSelectYear = this.contentFragment.querySelector("#to-select-year");
    this.toSelectMonth = this.contentFragment.querySelector("#to-select-month");

    this.monthOptionsHTMLStrArr = [];
    for (let i = 0; i < months.length; i++) {
      this.monthOptionsHTMLStrArr.push(
        `<option value="${i}">${months[i]}</option>`
      );
    }

    const years = [];
    for (let i = 2022; i <= 2050; i++) {
      years.push(`<option value="${i}">${i}</option>`);
    }

    // add date selector values
    this.fromSelectMonth.innerHTML = `
  ${this.monthOptionsHTMLStrArr.join("")}`;
    this.fromSelectYear.innerHTML = `${years.join("")}`;
    this.toSelectMonth.innerHTML = `${this.monthOptionsHTMLStrArr.join("")}`;
    this.toSelectYear.innerHTML = `${years.join("")}`;
    // create grid
    this.containerTasks = this.contentFragment.querySelector(
      "#gantt-grid-container__tasks"
    );
    this.containerTimePeriods = this.contentFragment.querySelector(
      "#gantt-grid-container__time"
    );

    this.addTaskForm = this.contentFragment.querySelector("#add-task");
    this.addTaskDurationForm =
      this.contentFragment.querySelector("#add-task-duration");
    this.taskSelect = this.addTaskDurationForm.querySelector("#select-task");
    this.ganttChartElement.appendChild(this.contentFragment);
    this.grid = new Grid(this);
    this.grid.createGrid();
    this.grid.taskRows.on("deleteTask", (attrs: any) => {
      this.containerTimePeriods.innerHTML = "";

      this.grid.tasks = attrs.tasks;
      this.grid.taskDurations = attrs.taskDurations;
      this.grid.taskRows.tasks = attrs.tasks;
      this.grid.taskRows.taskDurations = attrs.taskDurations;
      this.grid.timeLine.tasks = attrs.tasks;
      // this.grid.timeLine.taskDurations = attrs.taskDurations;
      this.grid.createGrid();
    });
  }
}

// functional componenet

// re-create Grid if year / month selection changes
// fromSelectYear.addEventListener("change", createGrid);
// fromSelectMonth.addEventListener("change", createGrid);
// toSelectYear.addEventListener("change", createGrid);
// toSelectMonth.addEventListener("change", createGrid);

// addTaskDurationForm.addEventListener("submit", handleAddTaskDurationForm);
// addTaskForm.addEventListener("submit", handleAddTaskForm);
