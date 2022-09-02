import GanttChart from "../ganttChart";
import { TaskDuration } from "../classes/taskDuration";
import { dayDiff, createFormattedDateFromDate } from "../Utils/utils";

export default class TaskDraw {
  gantt: GanttChart;
  taskDurations: TaskDuration[];
  containerTimePeriods: HTMLElement;

  constructor(gantt: GanttChart) {
    this.gantt = gantt;
    this.taskDurations = gantt.taskDurations;
    this.containerTimePeriods = gantt.containerTimePeriods;
  }

  addTaskDurations() {
    this.taskDurations.forEach((taskDuration) => {
      const dateStr = createFormattedDateFromDate(taskDuration.start);
      // find gantt-time-period-cell start position
      const startCell: HTMLElement | null =
        this.containerTimePeriods.querySelector(
          `div[data-task="${taskDuration.task.toString()}"][data-date="${dateStr}"]`
        );
      if (startCell) {
        // taskDuration bar is a child of start date position of specific task
        this.createTaskDurationEl(taskDuration, startCell);
      }
    });
  }

  createTaskDurationEl(taskDuration: TaskDuration, startCell: HTMLElement) {
    const dayElContainer = this.containerTimePeriods.querySelector(
      ".gantt-time-period-cell-container"
    );
    const taskDurationEl = document.createElement("div");
    taskDurationEl.classList.add("taskDuration");
    taskDurationEl.id = taskDuration.id;

    const days = dayDiff(taskDuration.start, taskDuration.end);
    taskDurationEl.style.width = `calc(${days} * 100%)`;

    // append at start pos
    startCell.appendChild(taskDurationEl);

    return days;
  }
}
