import { drawLine } from "../utils/helper";
import { options } from "./options";
import { GanttChart } from "./ganttChart";

export class Bar {
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  fontColor: string;
  name: string;
  context: CanvasRenderingContext2D;
  hoverColor: string;
  options: options;
  gantt: GanttChart;
  bar:Element;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: CanvasRenderingContext2D,
    color?: string,
    fontColor?: string,
    name?: string,
    options?: options,
    gantt?: GanttChart
  ) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.fontColor = fontColor;
    this.name = name;
    this.context = context;
    this.options = options;
    this.color = this.options.barColor;
    this.hoverColor = this.options.barColorHover;
    this.gantt = gantt;
  }

  draw(color?: string, fontColor?: string, name?: string) {

    const sepLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    sepLine.setAttribute("x1", "0");
    sepLine.setAttribute("x2", this.gantt.svg.clientWidth.toString());
    sepLine.setAttribute("y1", (this.y + this.options.rowHeight * 0.8).toString());
    sepLine.setAttribute("y2", (this.y + this.options.rowHeight * 0.8).toString());
    sepLine.setAttribute("stroke", "lightgray");
    this.gantt.svg.appendChild(sepLine);

    // drawLine(
    //   this.context,
    //   0,
    //   this.y + this.options.rowHeight * 0.8,
    //   this.gantt.svg.clientWidth,
    //   this.y + this.options.rowHeight * 0.8,
    //   "lightgray"
    // );
    color
      ? (this.color = color)
      : this.color
      ? this.color
      : (this.color = "lightgreen");
    fontColor
      ? (this.fontColor = fontColor)
      : this.fontColor
      ? this.fontColor
      : (this.fontColor = "white");
    name ? (this.name = name) : this.name ? this.name : (this.name = "Task");
    if (this.name) {
      // this.context.globalCompositeOperation = "source-over";
      // this.context.textAlign = "center";
      // this.context.textBaseline = "middle";
      // let fontSize = Math.min(this.width / 1.5, this.height / 1.5);
      // this.context.font = `${fontSize}px Arial`;
      // this.context.fillStyle = this.color;
      this.bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      this.bar.setAttribute("x", this.x.toString());
      this.bar.setAttribute("y", this.y.toString());
      this.bar.setAttribute("width", this.width.toString());
      this.bar.setAttribute("height", this.height.toString());
      this.bar.setAttribute("fill", this.color);
      this.gantt.svg.appendChild(this.bar);

      // this.context.fillRect(this.x, this.y, this.width, this.height);

      // this.context.fillStyle = this.fontColor;
      // this.context.fillStyle = "black";

      // this.context.fillText(
      //   this.name,
      //   this.x + this.width / 2,
      //   this.y + this.height / 2
      // );
    }
  }

  update(x: number, y: number) {
    this.draw();
    this.x = x;
    this.y = y;
  }

  collision(x: number, y: number) {
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      this.color = this.options.barColorHover;
      this.draw();
      return true;
    } else {
      this.color = this.options.barColor;
      this.draw();
      return false;
    }
  }
}
