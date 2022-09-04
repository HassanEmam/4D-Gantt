import { DateLine } from "./dateLine";
import { options } from "./options";
import { data } from "./data";
import { Task } from "./task";
import { Table } from "./table";
import {
  drawLine,
  drawBar,
  minmax,
  dayDiff,
  addDays,
  recursive_offset,
} from "../utils/helper";
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
  timeLineHeight: number;
  tableWidth: number;
  dataDate: Date;

  constructor(options: options) {
    this.options = options;
    this.canvas = options.canvas;
    this.canvas.height =
      2 * this.options.padding +
      this.options.rowHeight * (this.options.data.length + 1);
    if (this.options.tableWidth) {
      this.tableWidth = this.options.tableWidth;
    } else {
      this.tableWidth = 400;
      this.options.tableWidth = this.tableWidth;
    }
    if (this.options.dataDate) {
      this.dataDate = this.options.dataDate;
    } else {
      this.dataDate = new Date();
      this.options.dataDate = this.dataDate;
    }
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.colors = options.colors;
    this.titleOptions = options.titleOptions;
    let maxmin = minmax(this.options.data);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    let duration = dayDiff(this.minDate, this.maxDate) + 1;
    if (this.options.timeLineHeight) {
      this.timeLineHeight = this.options.timeLineHeight;
    } else {
      this.timeLineHeight = 120;
      this.options.timeLineHeight = this.timeLineHeight;
    }
    this.canvas.width =
      2 * this.options.padding +
      this.tableWidth +
      this.options.timeLineColumnWidth * duration;

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
      let offsetpos = recursive_offset(e.target);
      let posX = e.clientX + offsetpos.x;
      let posY = e.clientY + offsetpos.y + parent.offsetTop;

      for (let task of this.tasks) {
        task.collision(posX, posY);
      }
      if (this.dateLine) {
        this.dateLine.collision(posX, posY);
      }
    });
  }

  drawGridLines() {
    var canvasActualHeight =
      this.canvas.height -
      this.options.padding * 2 -
      this.options.timeLineHeight;
    var canvasActualWidth =
      this.canvas.width - this.options.tableWidth - this.options.padding * 2;

    var gridValue = 0;
    // while (gridValue <= this.maxValue) {

    drawLine(
      this.ctx,
      this.options.padding + this.options.tableWidth,
      this.options.padding + this.options.timeLineHeight,
      this.options.padding + canvasActualWidth + this.options.tableWidth,
      this.options.padding + this.options.timeLineHeight,
      "black"
    );
    // drawLine(
    //   this.ctx,
    //   this.options.padding,
    //   this.options.padding,
    //   this.options.padding + canvasActualWidth,
    //   this.options.padding,
    //   "black"
    // );
    let rowHeight = this.options.rowHeight;
    for (let i in this.options.data) {
      drawLine(
        this.ctx,
        this.options.padding + this.options.tableWidth,
        this.options.padding +
          this.options.timeLineHeight +
          rowHeight * (parseInt(i) + 1),
        this.options.padding +
          canvasActualWidth +
          this.options.timeLineColumnWidth +
          this.options.tableWidth,
        this.options.padding +
          this.options.timeLineHeight +
          rowHeight * (parseInt(i) + 1),
        "lightgray"
      );
    }

    gridValue += this.options.gridScale;
    // }
  }

  drawBars() {
    var canvasActualHeight = this.canvas.height - this.options.padding * 2;
    var canvasActualWidth =
      this.canvas.width - this.options.padding * 2 - this.options.tableWidth;

    var values = Object.values(this.options.data);
    for (let idx in this.options.data) {
      let taskData = this.options.data[idx];
      let yOffset =
        this.options.padding + this.options.rowHeight * parseInt(idx) + 10;
      let xStart = scaleX(
        taskData.start,
        this.minDate,
        this.maxDate,
        canvasActualWidth
      );
      let xEnd = scaleX(
        addDays(taskData.end, 1),
        this.minDate,
        this.maxDate,
        canvasActualWidth
      );
      let barWidth = xEnd - xStart;
      let bar = new Task(
        xStart + this.options.padding + this.options.tableWidth,
        yOffset + this.options.timeLineHeight,
        barWidth,
        this.options.rowHeight * 0.6,
        this.ctx,
        this.options.colors[0],
        "white",
        taskData.name,
        this.options
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
  }

  drawDateLine() {
    console.log("Data Date", this.dataDate);
    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      this.dataDate
    );
    this.dateLine.draw();
  }

  drawTimeLine() {
    this.timeLine = new TimeLine(this.ctx, this.canvas, this.options);
    this.timeLine.draw();
  }

  drawTable() {
    let table = new Table(
      this.ctx,
      this.options.colors[0],
      this.options.barColorHover,
      "black",
      ["id", "name", "start", "end"],
      this.options
    );
    table.draw();
  }

  draw() {
    this.drawGridLines();
    this.drawBars();
    this.drawDateLine();
    this.drawTimeLine();
    this.drawTable();
  }

  update() {
    let duration = dayDiff(this.minDate, this.maxDate) + 1;
    this.canvas.width =
      2 * this.options.padding +
      this.tableWidth +
      this.options.timeLineColumnWidth * duration;
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width + this.options.padding * 2 + this.options.tableWidth,
      this.canvas.height +
        this.options.padding * 2 +
        this.options.timeLineHeight
    );
    this.tasks = [];
    this.dateLine = null;
    this.draw();
  }
}
