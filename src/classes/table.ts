import { TableRow } from "./tableRow";
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

      // this.context.globalCompositeOperation = "source-over";
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

  drawRow(data: nestedData) {
    // for (let colidx = 0; colidx < this.columns.length; colidx++) {
    let tr = new TableRow(
      this.context,
      this.gantt,
      data,
      this.options,
      this.rowCounter,
      this.columns
    );
    tr.draw();
    this.gantt.rows.push(tr);
    // }
    this.rowCounter++;
  }

  draw() {
    this.drawHeadings();
    // this.drawRows();
  }

  update() {}
}
