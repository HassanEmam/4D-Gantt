import {
  getDayOfWeek,
  getDaysInMonth,
  months,
  createFormattedDateFromStr,
} from "../Utils/utils";
import GanttChart from "../ganttChart";
import { Task } from "../classes/task";

export default class Timeline {
  gantt: GanttChart;
  containerTimePeriods: HTMLElement;
  tasks: Task[];

  constructor(ganttChart: GanttChart) {
    this.gantt = ganttChart;
    this.containerTimePeriods = ganttChart.containerTimePeriods;
    this.tasks = ganttChart.tasks;
    //   this.createMonthsRow(this.gantt.startDate, this.gantt.numMonths);
  }

  createMonthsRow(startMonth: any, numMonths: any) {
    this.containerTimePeriods.style.gridTemplateColumns = `repeat(${numMonths}, 1fr)`;

    let month = new Date(startMonth);

    for (let i = 0; i < numMonths; i++) {
      const timePeriodEl = document.createElement("div");
      timePeriodEl.className = "gantt-time-period";
      // to center text vertically
      const timePeriodElSpan = document.createElement("span");
      timePeriodElSpan.innerHTML =
        months[month.getMonth()] + " " + month.getFullYear();
      timePeriodEl.appendChild(timePeriodElSpan);
      this.containerTimePeriods.appendChild(timePeriodEl);
      month.setMonth(month.getMonth() + 1);
    }
  }

  createDaysRow(startMonth: any, numMonths: any) {
    let month = new Date(startMonth);

    for (let i = 0; i < numMonths; i++) {
      const timePeriodEl = document.createElement("div");
      timePeriodEl.className = "gantt-time-period";
      this.containerTimePeriods.appendChild(timePeriodEl);

      // add days as children
      const numDays = getDaysInMonth(month.getFullYear(), month.getMonth() + 1);

      for (let i = 1; i <= numDays; i++) {
        let dayEl = document.createElement("div");
        dayEl.className = "gantt-time-period";
        const dayElSpan = document.createElement("span");
        dayElSpan.innerHTML = i.toString();
        dayEl.appendChild(dayElSpan);
        timePeriodEl.appendChild(dayEl);
      }

      month.setMonth(month.getMonth() + 1);
    }
  }

  createDaysOfTheWeekRow(startMonth: any, numMonths: any) {
    let month = new Date(startMonth);

    for (let i = 0; i < numMonths; i++) {
      const timePeriodEl = document.createElement("div");
      timePeriodEl.className = "gantt-time-period day";
      this.containerTimePeriods.appendChild(timePeriodEl);

      // add days of the week as children
      const currYear = month.getFullYear();
      const currMonth = month.getMonth() + 1;
      const numDays = getDaysInMonth(currYear, currMonth);

      for (let i = 1; i <= numDays; i++) {
        let dayEl = document.createElement("div");
        dayEl.className = "gantt-time-period";
        const dayOfTheWeek = getDayOfWeek(currYear, currMonth - 1, i - 1);
        const dayElSpan = document.createElement("span");
        dayElSpan.innerHTML = dayOfTheWeek;
        dayEl.appendChild(dayElSpan);
        timePeriodEl.appendChild(dayEl);
      }

      month.setMonth(month.getMonth() + 1);
    }
  }

  createTaskRowsTimePeriods(startMonth: Date, numMonths: number) {
    const dayElContainer = document.createElement("div");
    dayElContainer.className = "gantt-time-period-cell-container";
    dayElContainer.style.gridTemplateColumns = `repeat(${numMonths}, 1fr)`;

    this.containerTimePeriods.appendChild(dayElContainer);

    this.tasks.forEach((task: Task) => {
      let month = new Date(startMonth);
      for (let i = 0; i < numMonths; i++) {
        const timePeriodEl = document.createElement("div");
        timePeriodEl.className = "gantt-time-period";
        dayElContainer.appendChild(timePeriodEl);

        const currYear = month.getFullYear();
        const currMonth = month.getMonth() + 1;

        const numDays = getDaysInMonth(currYear, currMonth);

        for (let i = 1; i <= numDays; i++) {
          let dayEl = document.createElement("div");
          dayEl.className = "gantt-time-period-cell";

          // color weekend cells differently
          const dayOfTheWeek = getDayOfWeek(currYear, currMonth - 1, i - 1);
          if (dayOfTheWeek === "S") {
            dayEl.style.backgroundColor = "#f7f7f7";
          }

          // add task and date data attributes
          const formattedDate = createFormattedDateFromStr(
            currYear,
            currMonth,
            i
          );
          dayEl.dataset.task = task.id.toString();
          dayEl.dataset.date = formattedDate;
          timePeriodEl.appendChild(dayEl);
        }

        month.setMonth(month.getMonth() + 1);
      }
    });
  }
}
