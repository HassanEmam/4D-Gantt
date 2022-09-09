import { options } from "./options";
import { data } from "./data";
import {
  minmax,
  monthDiff,
  dayDiff,
  addDays,
  getDayOfWeek,
  months,
  drawBar,
} from "../utils/helper";
import { scaleX } from "../utils/scales";
import { drawLine } from "../utils/helper";
import { GanttChart } from "./ganttChart";

export class TimeLine {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;
  gantt: GanttChart;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    options: options,
    gantt: GanttChart
  ) {
    this.options = options;
    this.canvas = canvas;
    this.ctx = ctx;
    this.gantt = gantt;

    this.minDate = this.gantt.minDate;
    this.maxDate = this.gantt.maxDate;
    this.maxValue = this.gantt.maxValue;
    this.minValue = this.gantt.minValue;
  }

  draw() {
    let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear() + 1;
    let noOfMonths = monthDiff(this.minDate, this.maxDate);
    let noOfDays = dayDiff(this.minDate, this.maxDate);

    for (let i = 0; i < noOfDays; i++) {
      let scaledX = scaleX(
        addDays(this.minDate, i),
        this.minDate,
        this.maxDate,
        this.canvas.width
      );
      let date = addDays(this.minDate, i);
      let dayName = getDayOfWeek(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
      );

      drawBar(
        this.ctx,
        scaledX,
        +(this.options.timeLineHeight * 3) / 4,
        this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        date.getDate().toString()
      );

      drawBar(
        this.ctx,
        scaledX,
        +(this.options.timeLineHeight * 2) / 4,
        this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        dayName
      );
      //   this.ctx.fillText(dayName, scaledX + , 85);

      // line seperator between days
      drawLine(
        this.ctx,
        scaledX,
        +(this.options.timeLineHeight * 2) / 4,
        scaledX,
        this.canvas.height,
        "lightgray"
      );
    }

    drawLine(
      this.ctx,
      0,
      +(this.options.timeLineHeight * 2) / 4,
      this.canvas.width + this.options.timeLineColumnWidth,
      +(this.options.timeLineHeight * 2) / 4,
      "black"
    );

    let offset = (this.options.timeLineHeight * 3) / 4;
    drawLine(
      this.ctx,
      0,
      +offset,
      this.canvas.width + this.options.timeLineColumnWidth,
      +offset,
      "black"
    );
    let date = this.minDate;

    // draw month timeline
    while (date <= this.maxDate) {
      let mnth = date.getMonth();
      let year = date.getFullYear();
      let day = date.getDate();
      let monthName = months[mnth];
      let minScale = scaleX(
        new Date(year, mnth, 0),
        this.minDate,
        this.maxDate,
        this.canvas.width
      );
      let maxScale = scaleX(
        new Date(year, mnth + 1, 0),
        this.minDate,
        this.maxDate,
        this.canvas.width
      );
      let scaledX = (minScale + maxScale) / 2.0;
      drawBar(
        this.ctx,
        minScale + +this.options.timeLineColumnWidth,
        +this.options.timeLineHeight / 4,
        maxScale - minScale,
        30,
        this.options.timeLineBackgroundColor,
        monthName
      );

      mnth += 1;
      date = new Date(year, mnth, day);

      // month seperator
      drawLine(
        this.ctx,
        minScale + +this.options.timeLineColumnWidth,
        +this.options.timeLineHeight / 4,
        minScale + +this.options.timeLineColumnWidth,
        this.canvas.height + this.options.timeLineHeight,
        "black"
      );
      drawLine(
        this.ctx,
        maxScale + +this.options.timeLineColumnWidth,
        +this.options.timeLineHeight / 4,
        maxScale + +this.options.timeLineColumnWidth,
        this.canvas.height + this.options.timeLineHeight,
        "black"
      );
    }

    //topline above month names
    drawLine(
      this.ctx,
      0,
      0,
      this.canvas.width + this.options.timeLineColumnWidth,
      0,
      "black"
    );
    for (let i = 0; i < noOfYears; i++) {
      let fDayOfYear = new Date(this.minDate.getFullYear() + i, 0, 1);
      let lDayOfYear = new Date(this.minDate.getFullYear() + i, 11, 31);
      if (fDayOfYear < this.minDate) {
        fDayOfYear = this.minDate;
      }
      if (lDayOfYear > this.maxDate) {
        lDayOfYear = this.maxDate;
      }
      let minScale = scaleX(
        fDayOfYear,
        this.minDate,
        this.maxDate,
        this.canvas.width
      );
      let maxScale = scaleX(
        lDayOfYear,
        this.minDate,
        this.maxDate,
        this.canvas.width
      );
      drawBar(
        this.ctx,
        minScale,
        0,
        maxScale - minScale + this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        fDayOfYear.getFullYear().toString()
      );
      //line under the year
      drawLine(
        this.ctx,
        minScale,
        +this.options.timeLineHeight / 4,
        maxScale + +this.options.timeLineColumnWidth,
        +this.options.timeLineHeight / 4,
        "black"
      );
      // line to the left of the year
      drawLine(this.ctx, minScale, 0, minScale, this.canvas.height, "black");
      drawLine(
        this.ctx,
        maxScale + +this.options.timeLineColumnWidth,
        0,
        maxScale + +this.options.timeLineColumnWidth,
        this.canvas.height,
        "black"
      );
    }
  }

  update(date: Date) {}
}
