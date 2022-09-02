import { monthDiff } from "../Utils/utils";
import TaskRows from "./taskRows";
import TimeLine from "./timeline";
import GanttChart from "../ganttChart";
import { Task } from "../classes/task";
import { TaskDuration } from "../classes/taskDuration";
import TaskDraw from "./taskDraw";

export default class Grid {
  timeLine: TimeLine;
  fromSelectYear: HTMLSelectElement;
  fromSelectMonth: HTMLSelectElement;
  toSelectMonth: HTMLSelectElement;
  toSelectYear: HTMLSelectElement;
  containerTasks: HTMLElement;
  containerTimePeriods: HTMLElement;
  tasks: Task[];
  taskDurations: TaskDuration[];
  taskRows: TaskRows;
  taskDraw: TaskDraw;
  ganttChart: GanttChart;

  constructor(ganttChart: GanttChart) {
    this.ganttChart = ganttChart;
    this.timeLine = new TimeLine(ganttChart);
    this.fromSelectYear = this.ganttChart.fromSelectYear;
    this.fromSelectMonth = this.ganttChart.fromSelectMonth;
    this.toSelectYear = this.ganttChart.toSelectYear;
    this.toSelectMonth = this.ganttChart.toSelectMonth;
    this.containerTasks = this.ganttChart.containerTasks;
    this.containerTimePeriods = this.ganttChart.containerTimePeriods;
    this.tasks = this.ganttChart.tasks;
    this.taskDurations = this.ganttChart.taskDurations;
    this.taskRows = new TaskRows(this.ganttChart);
    this.taskDraw = new TaskDraw(this.ganttChart);
  }

  createGrid() {
    const startMonth = new Date(
      parseInt(this.fromSelectYear.value, 0),
      parseInt(this.fromSelectMonth.value, 0)
    );
    const endMonth = new Date(
      parseInt(this.toSelectYear.value, 0),
      parseInt(this.toSelectMonth.value, 0)
    );
    const numMonths = monthDiff(startMonth, endMonth) + 1;

    // clear first each time it is changed
    this.containerTasks.innerHTML = "";
    this.containerTimePeriods.innerHTML = "";

    this.taskRows.createTaskRows();
    this.timeLine.createMonthsRow(startMonth, numMonths);
    this.timeLine.createDaysRow(startMonth, numMonths);
    this.timeLine.createDaysOfTheWeekRow(startMonth, numMonths);
    this.timeLine.createTaskRowsTimePeriods(startMonth, numMonths);
    this.taskDraw.addTaskDurations();
    // TODO: add functions below
    // createTaskRowsTimePeriods(startMonth, numMonths);
    // addTaskDurations();
  }
}
