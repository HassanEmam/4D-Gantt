import { nestedData } from "./data";
import { TableRow } from "./tableRow";

export class RowCell {
  row: TableRow;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  data: nestedData;
  color: string;
  expanded: boolean;

  constructor(row: TableRow, cell: number, data: nestedData) {
    this.row = row;
    this.data = data;

    this.index = cell;
    this.expanded = this.data.expanded || true;
    this.color = "rgba(255,255,255,1)";
    this.x = (this.index * this.row.width) / this.row.columns.length;
    this.y = this.row.y;
    this.width = this.row.width / this.row.columns.length;
    this.height = this.row.height;
    this.text = data[this.row.columns[this.index]];
    this.draw();
    // this.row.gantt.cells.push(this);
  }

  draw() {
    let x: number;
    if (!this.row.width) {
      this.row.width = 400;
    }
    let hasChilds = false;
    if ((this.data.children as nestedData[]).length > 0) {
      hasChilds = true;
    }
    x = this.x;
    this.row.context.fillStyle = "white";
    this.row.context.fillRect(
      this.x + 5,
      this.y + 5,
      this.width - 10,
      this.height - 10
    );
    this.row.context.fillStyle =
      this.row.options.table.header?.fontColor || "black";
    this.row.context.textBaseline = "middle";
    this.row.context.font = `14px Arial`;
    let text: string;
    if (this.data[this.row.columns[this.index]] instanceof Date) {
      text = this.data[this.row.columns[this.index]]
        .toLocaleString("en-GB")
        .split(",")[0];
    } else {
      text = this.data[this.row.columns[this.index]].toString();
    }
    if (this.index === 0) {
      x = (this.data.level || 0) * 30 + this.index * this.width;
      if (hasChilds) {
        let addChar;
        if (this.expanded === false) {
          addChar = "\u{229E}";
        } else {
          addChar = "\u{229F}";
        }
        text = addChar + "\t\t" + text;
      }
      this.row.context.textAlign = "left";
    } else {
      this.row.context.textAlign = "center";
      x = x + this.width / 2;
    }
    this.row.context.fillText(text, x, this.y + this.height / 2);
    this.row.context.strokeStyle = "black";
  }

  update() {}

  collision(x: number, y: number) {
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      this.color = "rgba(173,216,230,0.1)";
      if (this.index === 0) {
        this.row.heilighted = false;
        this.expanded = !this.expanded;
        this.data.expanded = !this.data.expanded;
        // this.draw();
      }

      this.draw();

      return true;
    } else {
      this.color = "rgba(255,255,255,1)";
      //   this.draw();
      return false;
    }
  }
}
