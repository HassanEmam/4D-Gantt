import { options } from "./options";
import { scaleX } from "../utils/scales";
import { GanttChart } from "./ganttChart";

export class DateLine {
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;
  dateLine: Date;
  xpos: number;
  gantt: GanttChart;
  svg: Element;
  SVGLine: SVGElement;

  constructor(svg: Element, options: options, date: Date, gantt: GanttChart) {
    this.options = options;
    this.dateLine = date;
    this.svg = svg;
    this.gantt = gantt;
    this.SVGLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    this.minDate = this.gantt.minDate;
    this.maxDate = this.gantt.maxDate;
    this.maxValue = this.gantt.maxValue;
    this.minValue = this.gantt.minValue;
    this.xpos = scaleX(
      this.dateLine,
      this.minDate,
      this.maxDate,
      this.svg.clientWidth
    );
  }

  draw() {
    this.SVGLine.setAttribute('stroke', 'blue')
    this.SVGLine.setAttribute('stroke-width', "3")
    this.SVGLine.setAttribute('x1', this.xpos.toString())
    this.SVGLine.setAttribute('x2', this.xpos.toString())
    this.SVGLine.setAttribute('y1', "0")
    this.SVGLine.setAttribute('y2', this.svg.clientHeight.toString())
    this.svg.appendChild(this.SVGLine)
    this.SVGLine.addEventListener('mouseover', (event)=>{
      this.SVGLine.setAttribute('stroke', 'red')
    })
    this.SVGLine.addEventListener('mouseout', (event)=>{
      this.SVGLine.setAttribute('stroke', 'blue')
    })
  }

  update(date: Date) {
    this.dateLine = date;
    this.xpos = scaleX(
      this.dateLine,
      this.minDate,
      this.maxDate,
      this.svg.clientWidth
    );
    this.draw();
  }
}
