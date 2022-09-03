import { DateLine } from "./dateLine";
import { options } from "./options";
import { data } from "./data";
import { Task } from "./task";
import { drawLine, drawBar, minmax, dayDiff } from "../utils/helper";
import { scaleX } from "../utils/scales";
import { TimeLine } from "./timeline";

export class GanttChart {
  options: options;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  colors: string[];
  titleOptions: string;
  maxValue: number;
  minValue: number;
  minDate: Date;
  maxDate: Date;
  tasks: Task[];
  dateLine: DateLine;
  timeLine: TimeLine;

  constructor(options: options) {
    this.options = options;
    this.canvas = options.canvas;
    this.canvas.height =
      2 * this.options.padding + 50 * this.options.data.length;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.colors = options.colors;
    this.titleOptions = options.titleOptions;
    let maxmin = minmax(this.options.data);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    let duration = dayDiff(this.minDate, this.maxDate);
    console.log(duration);
    this.canvas.width = 30 * duration;
    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      this.minDate
    );
    this.timeLine = new TimeLine(this.ctx, this.canvas, this.options);
    this.tasks = [];
    let currentDate = new Date(2020, 1, 15);

    this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
      let parent = (e.target as HTMLElement).parentElement;

      for (let task of this.tasks) {
        task.collision(e.pageX - parent.offsetLeft, e.pageY - parent.offsetTop);
      }
      this.dateLine.collision(
        e.pageX - parent.offsetLeft,
        e.pageY - parent.offsetTop
      );
    });
  }

  drawGridLines() {
    var canvasActualHeight = this.canvas.height - this.options.padding * 2;
    var canvasActualWidth = this.canvas.width - this.options.padding * 2;

    var gridValue = 0;
    // while (gridValue <= this.maxValue) {
    var gridY =
      canvasActualWidth * (1 - gridValue / this.maxValue) +
      this.options.padding;
    drawLine(
      this.ctx,
      this.options.padding,
      this.options.padding,
      this.options.padding + canvasActualWidth,
      this.options.padding,
      "black"
    );
    let rowHeight = 50;
    for (let i in this.options.data) {
      drawLine(
        this.ctx,
        this.options.padding,
        this.options.padding + rowHeight * (parseInt(i) + 1),
        this.options.padding + canvasActualWidth,
        this.options.padding + rowHeight * (parseInt(i) + 1),
        "lightgray"
      );
    }

    //   drawLine(
    //     this.ctx,
    //     15,
    //     this.options.padding / 2,
    //     15,
    //     gridY + this.options.padding / 2,
    //     "lightgray"
    //   );

    // Writing grid markers
    //   this.ctx.save();
    //   this.ctx.fillStyle = this.options.gridColor;
    //   this.ctx.textBaseline = "bottom";
    //   this.ctx.font = "bold 10px Arial";
    //   this.ctx.fillText(gridValue.toString(), 0, gridY - 2);
    //   this.ctx.restore();

    gridValue += this.options.gridScale;
    // }
  }

  drawBars() {
    var canvasActualHeight = this.canvas.height - this.options.padding * 2;
    var canvasActualWidth = this.canvas.width - this.options.padding * 2;

    var values = Object.values(this.options.data);
    for (let idx in this.options.data) {
      let taskData = this.options.data[idx];
      let yOffset = this.options.padding + 50 * parseInt(idx) + 10;
      let xStart = scaleX(
        taskData.start,
        this.minDate,
        this.maxDate,
        canvasActualWidth
      );
      let xEnd = scaleX(
        taskData.end,
        this.minDate,
        this.maxDate,
        canvasActualWidth
      );
      let barWidth = xEnd - xStart;
      let bar = new Task(
        xStart + this.options.padding,
        yOffset,
        barWidth,
        30,
        this.ctx,
        "blue",
        "white",
        taskData.name
      );
      this.tasks.push(bar);
      bar.draw();
      // draw text to the right of the bar

      //   this.ctx.textAlign = "center";
      //   this.ctx.textBaseline = "middle";
      //   let fontSize = Math.min(barWidth / 1.5, 20);
      //   this.ctx.font = `${fontSize}px Arial`;
      //   this.ctx.fillStyle = "black";
      //   this.ctx.fillText(
      //     taskData.name,
      //     xEnd + this.options.padding + 3 * fontSize,
      //     yOffset + 15
      //   );
      this.ctx.restore();
      // this.colors[barIndex % this.colors.length];
    }

    // for (let val of values) {
    //   var barHeight = Math.round((canvasActualHeight * val) / this.maxValue);

    //   drawBar(
    //     this.ctx,
    //     this.options.padding + barIndex * (barSize + 40),
    //     this.canvas.height - barHeight - this.options.padding,
    //     barSize - 40,
    //     barHeight,
    //     this.colors[barIndex % this.colors.length]
    //   );

    //   barIndex++;
    // }
  }

  drawDateLine() {
    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      new Date(2020, 1, 15)
    );
    this.dateLine.draw();
  }

  drawTimeLine() {
    this.timeLine = new TimeLine(this.ctx, this.canvas, this.options);
    this.timeLine.draw();
  }

  draw() {
    this.drawGridLines();
    this.drawBars();
    this.drawDateLine();
    this.drawTimeLine();
  }
}
