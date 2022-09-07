import { RowCell } from "./rowCell";
import { GanttChart } from "./ganttChart";
import { options } from "./options";
import { drawBar, drawLine, addDays } from "../utils/helper";
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
    this.y =
      this.options.timeLineHeight + this.options.rowHeight * this.rowCounter;
    this.gantt = gantt;
    this.data = data;
    this.columns = columns;
    this.color = "rgba(255,255,255,0)";
    this.drawBar();
  }

  drawBar() {
    var canvasActualWidth = this.gantt.canvas.width;
    var values = Object.values(this.data);
    let taskData = this.data;
    if (!this.options.rowHeight) {
      this.options.rowHeight = 40;
    }
    let yOffset =
      this.options.rowHeight * this.rowCounter + this.options.rowHeight * 0.2;
    let xStart = scaleX(
      taskData.start,
      this.gantt.minDate,
      this.gantt.maxDate,
      canvasActualWidth
    );
    let xEnd = scaleX(
      addDays(taskData.end, 1),
      this.gantt.minDate,
      this.gantt.maxDate,
      canvasActualWidth
    );
    let barWidth = xEnd - xStart;
    if (!this.options.timeLineHeight) {
      this.options.timeLineHeight = 120;
    }
    let bar = new Bar(
      xStart,
      yOffset + this.options.timeLineHeight,
      barWidth,
      this.options.rowHeight * 0.6,
      this.gantt.ctx,
      this.options.barColor,
      "white",
      taskData.name,
      this.options
    );
    this.gantt.tasks.push(bar);
    bar.draw();

    this.gantt.ctx.restore();
  }

  draw() {
    // this.drawBar();
    this.cells = [];
    drawBar(this.context, this.x, this.y, this.width, this.height, this.color);
    if (!this.options.timeLineHeight) {
      this.options.timeLineHeight = 120;
    }
    if (!this.options.rowHeight) {
      this.options.rowHeight = 120;
    }
    let y =
      this.options.timeLineHeight + this.options.rowHeight * this.rowCounter;
    let hasChilds: boolean = false;
    if ((this.data.children as nestedData[]).length > 0) {
      hasChilds = true;
    }
    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      let cell = new RowCell(this, colidx, this.data);
      this.cells.push(cell);
    }
    drawLine(
      this.context,
      this.x,
      this.y,
      this.x + this.width,
      this.y,
      "black"
    );
  }

  collision(x: number, y: number) {
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      if (!this.heilighted) {
        this.color = "rgba(173,216,230,0.1)";
        this.draw();
        this.heilighted = true;
        console.log(this.data);
      }
      return true;
    } else {
      this.color = "rgba(255,255,255,1)";
      this.draw();
      this.heilighted = false;
      return false;
    }
  }

  update() {}
}
