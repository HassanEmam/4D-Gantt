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
    this.options = options;
    this.width = options.table.width;
    this.height = this.options.rowHeight;
    this.rowCounter = rowIndex;
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
      let x: number;
      if (!this.options.table?.width) {
        this.options.table.width = 400;
      }
      let width = this.options.table.width / this.columns.length;
      let height = this.options.rowHeight;
      // if (colidx === 0) {
      //   x = this.data.level * 20;
      // } else {
      x = colidx * width;
      // }
      //   this.context.globalCompositeOperation = "destination-over";

      this.context.fillStyle = "white";
      this.context.rect(x, y, width, height);
      this.context.fillStyle = this.options.table.header?.fontColor || "black";
      this.context.textBaseline = "middle";
      this.context.font = `14px Arial`;
      let text: string;
      if (this.data[this.columns[colidx]] instanceof Date) {
        text = this.data[this.columns[colidx]]
          .toLocaleString("en-GB")
          .split(",")[0];
      } else {
        text = this.data[this.columns[colidx]].toString();
      }
      if (colidx === 0) {
        x = (this.data.level || 0) * 20 + colidx * width;
        if (hasChilds) {
          let addChar = "\u{229F}";
          text = addChar + "\t\t" + text;
        }
        this.context.textAlign = "left";
      } else {
        this.context.textAlign = "center";
        x = x + width / 2;
      }
      this.context.fillText(text, x, y + height / 2);
      this.context.strokeStyle = "black";
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
      this.color = "rgba(173,216,230,0.1)";

      this.draw();
      return true;
    } else {
      this.color = "rgba(255,255,255,1)";
      this.draw();
      return false;
    }
  }

  update() {}
}
