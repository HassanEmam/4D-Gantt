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
import { table } from "console";

export class GanttChart {
  options: options;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tableCtx: CanvasRenderingContext2D;
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
  container: HTMLElement;
  tableCanvas: HTMLCanvasElement;

  constructor(options: options) {
    this.options = options;
    this.container = options.container;
    console.log(this.container);
    this.canvas = document.createElement("canvas");
    this.tableCanvas = document.createElement("canvas");
    const tablediv = document.createElement("div");
    tablediv.style.display = "inline-block";
    tablediv.style.width = `${this.options.table.width + 20}px`;
    tablediv.style.overflow = "auto";
    tablediv.style.height = "100%";
    const chartDiv = document.createElement("div");
    chartDiv.appendChild(this.canvas);
    chartDiv.style.display = "inline-block";
    chartDiv.style.height = "100%";
    const contWidth =
      this.container.clientWidth - this.options.table.width - 50;
    chartDiv.style.overflow = "auto";
    chartDiv.style.width = `${contWidth}px`;
    chartDiv.style.margin = "0px";
    tablediv.appendChild(this.tableCanvas);
    this.container.appendChild(tablediv);
    this.container.appendChild(chartDiv);
    this.canvas.height =
      this.options.rowHeight * (this.options.data.length + 1);
    if (this.options.table.width) {
      this.tableWidth = this.options.table.width;
    } else {
      this.tableWidth = 400;
      this.options.table.width = this.tableWidth;
    }
    if (this.options.dataDate) {
      this.dataDate = this.options.dataDate;
    } else {
      this.dataDate = new Date();
      this.options.dataDate = this.dataDate;
    }

    this.tableCanvas.height = this.canvas.height;
    this.tableCanvas.width = this.tableWidth;
    tablediv.addEventListener("scroll", (event) => {
      chartDiv.scrollTop = (event.target as HTMLElement).scrollTop;
    });

    chartDiv.addEventListener("scroll", (event) => {
      tablediv.scrollTop = (event.target as HTMLElement).scrollTop;
    });

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.tableCtx = this.tableCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
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
    this.canvas.width = this.options.timeLineColumnWidth * duration;

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
      let posX = e.clientX + offsetpos.x + parent.offsetLeft;
      let posY =
        e.clientY + offsetpos.y + parent.offsetTop + this.canvas.offsetTop;

      for (let task of this.tasks) {
        task.collision(posX, posY);
      }
      if (this.dateLine) {
        this.dateLine.collision(posX, posY);
      }
    });
  }

  drawGridLines() {
    var canvasActualHeight = this.canvas.height - this.options.timeLineHeight;
    var canvasActualWidth = this.canvas.width;

    var gridValue = 0;
    // while (gridValue <= this.maxValue) {

    drawLine(
      this.ctx,
      0,
      +this.options.timeLineHeight,
      +canvasActualWidth,
      +this.options.timeLineHeight,
      "black"
    );
    // drawLine(
    //   this.ctx,
    //   ,
    //   ,
    //    + canvasActualWidth,
    //   ,
    //   "black"
    // );
    let rowHeight = this.options.rowHeight;
    for (let i in this.options.data) {
      drawLine(
        this.ctx,
        0,
        +this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        +canvasActualWidth + this.options.timeLineColumnWidth,
        +this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        "lightgray"
      );
    }

    gridValue += this.options.gridScale;
    // }
  }

  drawBars() {
    var canvasActualHeight = this.canvas.height;
    var canvasActualWidth = this.canvas.width;

    var values = Object.values(this.options.data);
    for (let idx in this.options.data) {
      let taskData = this.options.data[idx];
      let yOffset =
        this.options.rowHeight * parseInt(idx) + this.options.rowHeight * 0.2;
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
        xStart,
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
      //     xEnd +  + 3 * fontSize,
      //     yOffset + 15
      //   );
      this.ctx.restore();
      // this.colors[barIndex % this.colors.length];
    }
  }

  drawDateLine() {
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
      this.tableCtx,
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
      this.tableWidth + this.options.timeLineColumnWidth * duration;
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height + this.options.timeLineHeight
    );
    this.tasks = [];
    this.dateLine = null;
    this.draw();
  }
}
