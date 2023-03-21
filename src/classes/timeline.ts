import { options } from "./options";
import {
  monthDiff,
  dayDiff,
  addDays,
  getDayOfWeek,
  months,
  getDaysInMonth,
} from "../utils/helper";
import { GanttChart } from "./ganttChart";

export class TimeLine {
  container: HTMLElement;
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;
  gantt: GanttChart;
  grid: HTMLElement;
  yearEl: HTMLElement;

  constructor(container: HTMLElement, options: options, gantt: GanttChart) {
    this.options = options;
    this.container = container;
    this.gantt = gantt;
    this.minDate = this.gantt.minDate;
    this.maxDate = this.gantt.maxDate;
    this.maxValue = this.gantt.maxValue;
    this.minValue = this.gantt.minValue;
    this.grid = document.createElement("div");
    this.yearEl = document.createElement("div");
    this.yearEl.className = "gantt__chart__timeline_container_year_container";
    this.container.appendChild(this.yearEl);
    this.grid.className = "gantt__chart__timeline_container";
    this.container.appendChild(this.grid);
  }

  draw() {
    let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear() + 1;
    let noOfMonths = monthDiff(this.minDate, this.maxDate);
    let noOfDays = dayDiff(this.minDate, this.maxDate) + 1;
    let month = new Date(
      this.minDate.getFullYear(),
      this.minDate.getMonth(),
      1
    );
    // let month = new Date(this.minDate);
    this.yearEl.style.gridTemplateColumns = `repeat(${noOfYears}, 1fr)`;
    this.grid.style.gridTemplateColumns = `repeat(${noOfMonths}, 1fr)`;
    for (let y = 0; y < noOfYears; y++) {
      let yearEl = document.createElement("div");
      yearEl.className = "gantt__chart__timeline_container_year";
      let yearSpan = document.createElement("span");
      yearSpan.style.height = "100%";
      yearSpan.style.width = "100%";
      yearSpan.style.display = "flex";
      yearSpan.style.justifyContent = "center";
      yearSpan.style.alignItems = "center";
      yearSpan.innerHTML = month.getFullYear().toString();
      yearEl.append(yearSpan);
      this.yearEl.append(yearEl);
      month.setFullYear(month.getFullYear() + 1);
    }
    month = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1);
    for (let m = 0; m < noOfMonths; m++) {
      let monthEl = document.createElement("div");
      monthEl.className = "gantt__chart__timeline_container_month";
      let monthSpan = document.createElement("span");
      monthSpan.style.height = "100%";
      monthSpan.style.width = "100%";
      monthSpan.style.display = "flex";
      monthSpan.style.justifyContent = "center";
      monthSpan.style.alignItems = "center";

      monthSpan.innerHTML = months[month.getMonth()];
      monthEl.append(monthSpan);
      this.grid.append(monthEl);
      month.setMonth(month.getMonth() + 1);
    }
    month = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1);
    for (let m = 0; m < noOfMonths; m++) {
      let monthEl = document.createElement("div");
      monthEl.className = "gantt__chart__timeline_container_month";

      this.grid.append(monthEl);
      let numDays = getDaysInMonth(month.getFullYear(), month.getMonth() + 1);
      console.log("no of Month", month, "days in month", numDays);

      for (let i = 0; i < numDays; i++) {
        let day = document.createElement("span");
        let dayoftheMonth;

        dayoftheMonth = addDays(month, i);
        let dayVal = dayoftheMonth.getDate();
        day.className = "gantt__chart__timeline_container_day";
        console.log("day", dayVal, dayoftheMonth);
        day.innerHTML = dayVal.toString();
        monthEl.append(day);
      }
      month.setMonth(month.getMonth() + 1);
    }
  }

  update(date: Date) {}
}
