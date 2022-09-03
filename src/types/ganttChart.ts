import { DateLine } from "./dateLine";
import { options } from "./options";
import { data } from "./data";
import { Task } from "./task";
import { drawLine, drawBar, minmax } from "../utils/helper";
import { scaleX } from "../utils/scales";

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
    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      this.minDate
    );
    this.tasks = [];
    console.log(new Date(this.maxValue));
    let currentDate = new Date(2020, 1, 15);
    console.log(
      "maxValue",
      scaleX(currentDate, this.minDate, this.maxDate, this.canvas.width),
      "\nCurrent Date " + currentDate.toLocaleDateString("en-GB"),
      "\nMin Date " + this.minDate.toLocaleDateString("en-GB"),
      "\nMax Date " + this.maxDate.toLocaleDateString("en-GB"),
      "\nWidth " + this.canvas.width
    );

    this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
      for (let task of this.tasks) {
        task.collision(e.clientX, e.clientY);
      }
      this.dateLine.collision(e.clientX, e.clientY);
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
    console.log("gridY", gridY);
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
      //   console.log(this.options.data[i]);
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
      console.log("Canvas Width", this.canvas.width, canvasActualWidth);
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
      console.log("Bar Width", xStart, xEnd, barWidth);
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
      console.log(taskData, yOffset);
    }

    // for (let val of values) {
    //   var barHeight = Math.round((canvasActualHeight * val) / this.maxValue);
    //   console.log(barHeight);

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

  draw() {
    this.drawGridLines();
    this.drawBars();
    this.drawDateLine();
  }
}
