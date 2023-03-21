import { RowCell } from "./rowCell";
import { GanttChart } from "./ganttChart";
import { options } from "./options";
import {
  drawBar,
  drawLine,
  addDays,
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
  createFormattedDateFromStr,
  dayDiff,
  createFormattedDateFromDate,
} from "../utils/helper";
import { scaleX } from "../utils/scales";
import { nestedData } from "./data";
import { Bar } from "./bar";

export class TableRow {
  data: nestedData;
  context: CanvasRenderingContext2D;
  rowCounter: number;
  options: options;
  gantt: GanttChart;
  columns: string[] = [];
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  cells: RowCell[];
  heilighted: boolean;

  constructor(
    ctx: CanvasRenderingContext2D,
    gantt: GanttChart,
    data: nestedData,
    options: options,
    rowIndex: number,
    columns: string[]
  ) {
    this.context = ctx;
    // this.nestedData = data;
    this.x = 0;
    this.cells = [];
    this.options = options;
    this.width = options.table.width;
    this.height = this.options.rowHeight;
    this.rowCounter = rowIndex;
    this.heilighted = false;
    this.y = this.options.rowHeight * this.rowCounter;
    this.gantt = gantt;
    this.data = data;
    this.columns = columns;
    this.color = "rgba(255,255,255,0)";
    this.drawgrid();
    this.drawBar();
  }

  createTaskDurationEl(taskDuration: number, startCell: Element) {
    const dayElContainer = this.gantt.gridDiv.querySelector(
      ".gantt-time-period-cell-container"
    );
    const taskDurationEl = document.createElement("div");
    taskDurationEl.classList.add("taskDuration");
    taskDurationEl.id = this.data.id;

    const days = dayDiff(this.data.start, this.data.end);
    taskDurationEl.style.width = `calc(${days} * 100%)`;

    // append at start pos
    startCell.appendChild(taskDurationEl);

    return days;
  }

  drawBar() {
    const dateStr = createFormattedDateFromDate(this.data.start);
    // find gantt-time-period-cell start position
    const startCell = this.gantt.gridDiv.querySelector(
      `div[data-task="${this.data.id}"][data-date="${dateStr}"]`
    );
    console.log("Drawing bar", this.data, startCell);

    if (startCell) {
      let duration = dayDiff(this.data.start, this.data.end);
      // taskDuration bar is a child of start date position of specific task
      this.createTaskDurationEl(duration, startCell);
    }
  }

  draw() {
    // this.drawBar();
    // this.cells = [];
    // drawBar(this.context, this.x, this.y, this.width, this.height, this.color);
    // if (!this.options.timeLineHeight) {
    //   this.options.timeLineHeight = 120;
    // }
    // if (!this.options.rowHeight) {
    //   this.options.rowHeight = 120;
    // }
    // let y = this.options.rowHeight * this.rowCounter;
    // let hasChilds: boolean = false;
    // if ((this.data.children as nestedData[]).length > 0) {
    //   hasChilds = true;
    // }
    // for (let colidx = 0; colidx < this.columns.length; colidx++) {
    //   let cell = new RowCell(this, colidx, this.data);
    //   this.cells.push(cell);
    // }
    // drawLine(
    //   this.context,
    //   this.x,
    //   this.y,
    //   this.x + this.width,
    //   this.y,
    //   "black"
    // );
  }

  drawgrid() {
    let startMonth = new Date(this.gantt.minDate);
    let numMonths = monthDiff(this.gantt.minDate, this.gantt.maxDate);
    const dayElContainer = document.createElement("div");
    dayElContainer.className = "gantt-time-period-cell-container";
    dayElContainer.style.gridTemplateColumns = `repeat(${numMonths}, 1fr)`;

    this.gantt.gridDiv.appendChild(dayElContainer);
    console.log("Data in TableRow", this.data);
    let task = this.data;
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
        dayEl.dataset.task = task.id;
        dayEl.dataset.date = formattedDate;
        timePeriodEl.appendChild(dayEl);
      }

      month.setMonth(month.getMonth() + 1);
    }
  }

  collision(x: number, y: number) {
    // if (
    //   x >= this.x &&
    //   x <= this.x + this.width &&
    //   y >= this.y &&
    //   y <= this.y + this.height
    // ) {
    //   if (!this.heilighted) {
    //     this.color = "rgba(173,216,230,0.1)";
    //     this.draw();
    //     this.heilighted = true;
    //   }
    //   return true;
    // } else {
    //   this.color = "rgba(255,255,255,1)";
    //   this.draw();
    //   this.heilighted = false;
    //   return false;
    // }
  }

  update() {}
}
