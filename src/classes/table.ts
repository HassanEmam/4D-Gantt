import { threadId } from "worker_threads";
import { data } from "./data";
import { options } from "./options";

export class Table {
  color: string;
  fontColor: string;
  context: CanvasRenderingContext2D;
  hoverColor: string;
  options: options;
  columns: string[];

  constructor(
    context: CanvasRenderingContext2D,
    color: string,
    hoverColor: string,
    fontColor: string,
    columns: string[],
    options: options
  ) {
    this.color = color;
    this.fontColor = fontColor;
    this.context = context;
    this.options = options;
    this.hoverColor = hoverColor;
    this.columns = columns;
  }

  drawHeadings() {
    let noCols = this.columns.length;
    let tableWidth = this.options.tableWidth;
    let colWidth = (tableWidth ? tableWidth : 400) / noCols;
    console.log(
      "colWidth",
      colWidth,
      "noCols",
      noCols,
      "tableWidth",
      tableWidth
    );
    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      let x = colidx * colWidth + this.options.padding;
      let y = this.options.padding;
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
    }
  }

  drawRows() {
    let rowIdx = 0;
    let data = this.options.data;
    let colWidth =
      (this.options.tableWidth ? this.options.tableWidth : 400) /
      this.columns.length;
    // let colName: string = this.columns[1];
    //   console.log("data", data[colName]);
    for (let row of data) {
      let counter = 0;
      for (let col of this.columns) {
        let text;
        let x = counter * colWidth + this.options.padding;
        let y =
          this.options.padding +
          this.options.timeLineHeight +
          rowIdx * this.options.rowHeight;
        let height = this.options.timeLineHeight;
        let width = colWidth;
        if (row[col] instanceof Date) {
          text = row[col].toLocaleString("en-GB").split(",")[0];
        } else {
          text = row[col].toString();
        }
        console.log("text", text, x, y, width, height, x + width / 2);
        this.context.globalCompositeOperation = "source-over";

        this.context.fillStyle = "white";
        this.context.fillRect(x, y, width, height);
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.strokeStyle = "black";
        this.context.stroke();
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.font = `12px Arial`;
        this.context.fillStyle = "black";
        this.context.fillText(
          text,
          x + colWidth / 2,
          y + this.options.rowHeight / 2
        );
        // this.context.restore();
        counter++;
      }
      rowIdx++;
    }
  }

  draw() {
    this.drawHeadings();
    this.drawRows();
  }

  update() {}
}
