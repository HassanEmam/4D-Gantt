import { nestedData } from "./data";
import { drawLine } from "../utils/helper";
import { options } from "./options";
import { GanttChart } from "./ganttChart";
import { EventEmitter } from "../utils/EventEmitter";

export class Bar extends EventEmitter {
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
  bar: Element;
  taskData: nestedData;

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
    gantt?: GanttChart,
    taskData?: nestedData
  ) {
    super();
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
    this.taskData = taskData;
  }

  draw(color?: string, fontColor?: string, name?: string) {
    const sepLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    sepLine.setAttribute("x1", "0");
    sepLine.setAttribute("x2", this.gantt.svg.clientWidth.toString());
    sepLine.setAttribute(
      "y1",
      (this.y + this.options.rowHeight * 0.8).toString()
    );
    sepLine.setAttribute(
      "y2",
      (this.y + this.options.rowHeight * 0.8).toString()
    );
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
      this.bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      this.bar.setAttribute("x", this.x.toString());
      this.bar.setAttribute("y", this.y.toString());
      this.bar.setAttribute("width", this.width.toString());
      this.bar.setAttribute("height", this.height.toString());
      this.bar.setAttribute("fill", this.color);
      this.gantt.svg.appendChild(this.bar);
      this.bar.addEventListener("mouseover", () => {
        this.bar.setAttribute("fill", "red");
      });
      this.bar.addEventListener("mouseout", () => {
        this.bar.setAttribute("fill", this.color);
      });

      this.bar.addEventListener("click", () => {
        console.log("event triggered");
        this.trigger("taskClicked", [this.taskData]);
      });
      this.gantt.bars.push(this);
    }
  }

  update(x: number, y: number) {
    this.draw();
    this.x = x;
    this.y = y;
  }
}
