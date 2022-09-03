import { options } from "./options";
import { data } from "./data";
import {
  minmax,
  monthDiff,
  dayDiff,
  addDays,
  getDayOfWeek,
  months,
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
    let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear();
    let noOfMonths = monthDiff(this.minDate, this.maxDate);
    let noOfDays = dayDiff(this.minDate, this.maxDate);

    console.log(noOfYears, noOfMonths, noOfDays, this.canvas.width);
    for (let i = 0; i < noOfDays; i++) {
      let scaledX = scaleX(
        addDays(this.minDate, i),
        this.minDate,
        this.maxDate,
        this.canvas.width - 2 * this.options.padding
      );
      let date = addDays(this.minDate, i);
      let dayName = getDayOfWeek(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
      );
      console.log(
        getDayOfWeek(date.getFullYear(), date.getMonth(), date.getDate() - 1),
        date,
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
        "\n Date Entered " + new Date(2022, 0, 30).getDay(),
        getDayOfWeek(2022, 0, 30)
      );
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      let fontSize = Math.min(12);
      this.ctx.font = `${fontSize}px Arial`;
      this.ctx.fillStyle = "black";
      this.ctx.fillText(
        date.getDate().toString(),
        scaledX + this.options.padding,
        50
      );
      this.ctx.fillText(dayName, scaledX + this.options.padding, 85);

      // line seperator between days
      drawLine(
        this.ctx,
        scaledX + this.options.padding + 15,
        40,
        scaledX + this.options.padding + 15,
        this.canvas.height - this.options.padding,
        "lightgray"
      );
    }

    drawLine(
      this.ctx,
      this.options.padding - 15,
      40,
      this.canvas.width - this.options.padding + 15,
      40,
      "black"
    );
    drawLine(
      this.ctx,
      this.options.padding - 15,
      70,
      this.canvas.width - this.options.padding + 15,
      70,
      "black"
    );
    let date = this.minDate;
    while (date <= this.maxDate) {
      let mnth = date.getMonth();
      let year = date.getFullYear();
      let day = date.getDate();
      let monthName = months[mnth];
      let minScale = scaleX(
        new Date(year, mnth, 0),
        this.minDate,
        this.maxDate,
        this.canvas.width - 2 * this.options.padding
      );
      let maxScale = scaleX(
        new Date(year, mnth + 1, 0),
        this.minDate,
        this.maxDate,
        this.canvas.width - 2 * this.options.padding
      );
      let scaledX = (minScale + maxScale) / 2.0;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      let fontSize = Math.min(18);
      this.ctx.font = `${fontSize}px Arial`;
      this.ctx.fillStyle = "black";
      this.ctx.fillText(monthName, scaledX + this.options.padding, 30);
      mnth += 1;
      console.log(monthName);
      date = new Date(year, mnth, day);
      drawLine(
        this.ctx,
        minScale + this.options.padding + 15,
        15,
        minScale + this.options.padding + 15,
        this.canvas.height - this.options.padding,
        "black"
      );
      //   drawLine(
      //     this.ctx,
      //     maxScale + this.options.padding + 15,
      //     15,
      //     maxScale + this.options.padding + 15,
      //     this.canvas.height - this.options.padding,
      //     "black"
      //   );
    }

    //topline above month names
    drawLine(
      this.ctx,
      this.options.padding - 15,
      15,
      this.canvas.width - this.options.padding + 15,
      15,
      "black"
    );
  }

  update(date: Date) {}
}
