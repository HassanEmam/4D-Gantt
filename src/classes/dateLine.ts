import { options } from "./options";
import { data } from "./data";
import { minmax } from "../utils/helper";
import { scaleX } from "../utils/scales";

export class DateLine {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;
  dateLine: Date;
  xpos: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    options: options,
    date: Date
  ) {
    this.options = options;
    this.dateLine = date;
    this.canvas = canvas;
    this.ctx = ctx;

    let maxmin = minmax(this.options.data);
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.xpos = scaleX(
      this.dateLine,
      this.minDate,
      this.maxDate,
      this.canvas.width
    );
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(this.xpos + +this.options.timeLineColumnWidth / 2, 0);
    this.ctx.lineTo(
      this.xpos + this.options.timeLineColumnWidth / 2,
      this.canvas.height
    );
    this.ctx.stroke();
  }

  update(date: Date) {
    this.dateLine = date;
    this.xpos = scaleX(
      this.dateLine,
      this.minDate,
      this.maxDate,
      this.canvas.width
    );
    this.draw();
  }
  collision(x: number, y: number) {
    if (
      this.xpos + this.options.timeLineColumnWidth / 2 - 5 <= x &&
      this.xpos + this.options.timeLineColumnWidth / 2 + 5 >= x
    ) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "red";
      this.ctx.lineWidth = 3;
      this.ctx.moveTo(this.xpos + this.options.timeLineColumnWidth / 2, 0);
      this.ctx.lineTo(
        this.xpos + this.options.timeLineColumnWidth / 2,
        this.canvas.height
      );
      this.ctx.stroke();
    } else {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "blue";
      this.ctx.lineWidth = 3;
      this.ctx.moveTo(this.xpos + this.options.timeLineColumnWidth / 2, 0);
      this.ctx.lineTo(
        this.xpos + this.options.timeLineColumnWidth / 2,
        this.canvas.height
      );
      this.ctx.stroke();
    }
  }
}
