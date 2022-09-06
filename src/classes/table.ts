import { GanttChart } from "./ganttChart";
import { threadId } from "worker_threads";
import { drawLine, addDays } from "../utils/helper";
import { data, nestedData } from "./data";
import { options } from "./options";
import { toUTF16 } from "../utils/helper";
import { scaleX } from "../utils/scales";
import { Bar } from "./bar";

export class Table {
  color: string;
  fontColor: string;
  context: CanvasRenderingContext2D;
  hoverColor: string;
  options: options;
  columns: string[];
  rowCounter: number;
  gantt: GanttChart;

  constructor(
    context: CanvasRenderingContext2D,
    color: string,
    hoverColor: string,
    fontColor: string,
    columns: string[],
    options: options,
    gantt: GanttChart
  ) {
    this.color = color;
    this.gantt = gantt;
    this.fontColor = fontColor;
    this.context = context;
    this.options = options;
    this.hoverColor = hoverColor;
    this.rowCounter = 0;
    this.columns = columns;
  }

  drawHeadings() {
    let noCols = this.columns.length;
    let tableWidth = this.options.table.width;
    let colWidth = (tableWidth ? tableWidth : 400) / noCols;

    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      let x = colidx * colWidth;
      let y = 0;
      let height = this.options.timeLineHeight
        ? this.options.timeLineHeight
        : 100;
      let width = colWidth;

      this.context.globalCompositeOperation = "source-over";
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      this.context.font = `12px Arial`;
      this.context.fillStyle = this.color;
      this.context.fillRect(x, y, width, height);
      this.context.fillStyle = this.fontColor;
      // this.context.fillStyle = "black";

      this.context.fillText(
        this.columns[colidx],
        x + width / 2,
        y + height / 2
      );
      drawLine(this.context, x, y, x, y + height, "black");
    }
  }

  drawBar(data: nestedData) {
    var canvasActualWidth = this.gantt.canvas.width;

    var values = Object.values(this.options.data);
    let taskData = data;
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
    let bar = new Bar(
      xStart,
      yOffset + this.options.timeLineHeight,
      barWidth,
      this.options.rowHeight * 0.6,
      this.gantt.ctx,
      this.options.colors[0],
      "white",
      taskData.name,
      this.options
    );
    this.gantt.tasks.push(bar);
    bar.draw();

    this.gantt.ctx.restore();
  }

  drawRow(data: nestedData) {
    console.log(this.rowCounter, data);
    this.drawBar(data);
    let y =
      this.options.timeLineHeight + this.options.rowHeight * this.rowCounter;
    let hasChilds: boolean = false;
    if (data.children.length > 0) {
      hasChilds = true;
    }
    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      let x: number;
      let width = this.options.table.width / this.columns.length;
      let height = this.options.rowHeight;
      // if (colidx === 0) {
      //   x = data.level * 20;
      // } else {
      x = colidx * width;
      // }
      this.context.globalCompositeOperation = "source-over";

      this.context.fillStyle = "white";
      this.context.fillRect(x, y, width, height);
      this.context.fillStyle = this.fontColor;
      this.context.textBaseline = "middle";
      this.context.font = `14px Arial`;
      let text: string;
      if (data[this.columns[colidx]] instanceof Date) {
        text = data[this.columns[colidx]].toLocaleString("en-GB").split(",")[0];
      } else {
        text = data[this.columns[colidx]].toString();
      }
      if (colidx === 0) {
        x = data.level * 20 + colidx * width;
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
    }
    this.rowCounter++;
  }
  // drawRows() {
  //   let rowIdx = 0;
  //   let data = this.options.data;
  //   let colWidth =
  //     (this.options.table.width ? this.options.table.width : 400) /
  //     this.columns.length;
  //   // let colName: string = this.columns[1];
  //   for (let row of data) {
  //     let counter = 0;

  //     let y = +this.options.timeLineHeight + rowIdx * this.options.rowHeight;

  //     for (let col of this.columns) {
  //       let text;
  //       let x = counter * colWidth;
  //       let height = this.options.timeLineHeight;
  //       let width = colWidth;
  //       if (row[col] instanceof Date) {
  //         text = row[col].toLocaleString("en-GB").split(",")[0];
  //       } else {
  //         text = row[col].toString();
  //       }
  //       this.context.globalCompositeOperation = "source-over";

  //       this.context.fillStyle = "rgba(255, 255, 255, 1)";
  //       this.context.fillRect(x, y, width, height);
  //       this.context.fill();
  //       this.context.lineWidth = 2;
  //       this.context.strokeStyle = "black";
  //       this.context.stroke();
  //       this.context.textAlign = "center";
  //       this.context.textBaseline = "middle";
  //       this.context.font = `12px Arial`;
  //       this.context.fillStyle = "black";
  //       this.context.fillText(
  //         text,
  //         x + colWidth / 2,
  //         y + this.options.rowHeight / 2
  //       );
  //       // this.context.restore();
  //       counter++;
  //     }
  //     this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
  //     this.context.fillRect(
  //       0,
  //       y,
  //       this.options.table.width,
  //       this.options.rowHeight
  //     );
  //     rowIdx++;
  //   }
  // }

  draw() {
    this.drawHeadings();
    // this.drawRows();
  }

  update() {}
}
