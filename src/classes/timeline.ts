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

export class TimeLine {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    options: options
  ) {
    this.options = options;
    this.canvas = canvas;
    this.ctx = ctx;

    let maxmin = minmax(this.options.data);
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
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
        this.canvas.width - 2 * this.options.padding - this.options.tableWidth
      );
      let date = addDays(this.minDate, i);
      let dayName = getDayOfWeek(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
      );

      drawBar(
        this.ctx,
        scaledX + this.options.padding + this.options.tableWidth,
        this.options.padding + (this.options.timeLineHeight * 3) / 4,
        this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        date.getDate().toString()
      );

      drawBar(
        this.ctx,
        scaledX + this.options.padding + this.options.tableWidth,
        this.options.padding + (this.options.timeLineHeight * 2) / 4,
        this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        dayName
      );
      //   this.ctx.fillText(dayName, scaledX + this.options.padding, 85);

      // line seperator between days
      drawLine(
        this.ctx,
        scaledX + this.options.padding + this.options.tableWidth,
        this.options.padding + (this.options.timeLineHeight * 2) / 4,
        scaledX + this.options.padding + this.options.tableWidth,
        this.canvas.height + this.options.padding,
        "lightgray"
      );
    }

    drawLine(
      this.ctx,
      this.options.padding + this.options.tableWidth,
      this.options.padding + (this.options.timeLineHeight * 2) / 4,
      this.canvas.width -
        this.options.padding +
        this.options.timeLineColumnWidth,
      this.options.padding + (this.options.timeLineHeight * 2) / 4,
      "black"
    );

    let offset = (this.options.timeLineHeight * 3) / 4;
    drawLine(
      this.ctx,
      this.options.padding + this.options.tableWidth,
      this.options.padding + offset,
      this.canvas.width -
        this.options.padding +
        this.options.timeLineColumnWidth,
      this.options.padding + offset,
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
        this.canvas.width - 2 * this.options.padding - this.options.tableWidth
      );
      let maxScale = scaleX(
        new Date(year, mnth + 1, 0),
        this.minDate,
        this.maxDate,
        this.canvas.width - 2 * this.options.padding - this.options.tableWidth
      );
      let scaledX = (minScale + maxScale) / 2.0;
      drawBar(
        this.ctx,
        minScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding + this.options.timeLineHeight / 4,
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
        minScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding + this.options.timeLineHeight / 4,
        minScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.canvas.height - this.options.padding + this.options.timeLineHeight,
        "black"
      );
      drawLine(
        this.ctx,
        maxScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding + this.options.timeLineHeight / 4,
        maxScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.canvas.height - this.options.padding + this.options.timeLineHeight,
        "black"
      );
    }

    //topline above month names
    drawLine(
      this.ctx,
      this.options.padding + this.options.tableWidth,
      this.options.padding,
      this.canvas.width -
        this.options.padding +
        this.options.timeLineColumnWidth,
      // this.options.tableWidth,
      this.options.padding,
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
        this.canvas.width - 2 * this.options.padding - this.options.tableWidth
      );
      let maxScale = scaleX(
        lDayOfYear,
        this.minDate,
        this.maxDate,
        this.canvas.width - 2 * this.options.padding - this.options.tableWidth
      );
      drawBar(
        this.ctx,
        minScale + this.options.padding + this.options.tableWidth,
        this.options.padding,
        maxScale - minScale + this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        fDayOfYear.getFullYear().toString()
      );
      //line under the year
      drawLine(
        this.ctx,
        minScale + this.options.padding + this.options.tableWidth,
        this.options.padding + this.options.timeLineHeight / 4,
        maxScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding + this.options.timeLineHeight / 4,
        "black"
      );
      // line to the left of the year
      drawLine(
        this.ctx,
        minScale + this.options.padding + this.options.tableWidth,
        this.options.padding,
        minScale + this.options.padding + this.options.tableWidth,
        this.canvas.height + this.options.padding,
        "black"
      );
      drawLine(
        this.ctx,
        maxScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding,
        maxScale +
          this.options.padding +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.canvas.height + this.options.padding,
        "black"
      );
    }
  }

  update(date: Date) {}
}
