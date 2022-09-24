import { options } from "./options";
import {
  monthDiff,
  dayDiff,
  addDays,
  getDayOfWeek,
  months,
  drawBar,
} from "../utils/helper";
import { scaleX } from "../utils/scales";
import { drawLine } from "../utils/helper";
import { GanttChart } from "./ganttChart";

export class TimeLine {
  svg:Element;
  ctx: CanvasRenderingContext2D;
  options: options;
  minDate: Date;
  maxDate: Date;
  minValue: number;
  maxValue: number;
  gantt: GanttChart;

  constructor(
    ctx: CanvasRenderingContext2D,
    svg: Element,
    options: options,
    gantt: GanttChart
  ) {
    this.options = options;
    this.svg = svg;
    this.ctx = ctx;
    this.gantt = gantt;

    this.minDate = this.gantt.minDate;
    this.maxDate = this.gantt.maxDate;
    this.maxValue = this.gantt.maxValue;
    this.minValue = this.gantt.minValue;
  }

  draw() {
    let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear() + 1;
    let noOfMonths = monthDiff(this.minDate, this.maxDate);
    let noOfDays = dayDiff(this.minDate, this.maxDate) + 1;

    for (let i = 0; i < noOfDays; i++) {
      let scaledX = scaleX(
        addDays(this.minDate, i),
        this.minDate,
        this.maxDate,
        this.svg.clientWidth
      );
      let date = addDays(this.minDate, i);
      let dayName = getDayOfWeek(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
      );
        

      // const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      // rect.setAttribute('x', scaledX.toString())
      // rect.setAttribute('y', ((this.options.timeLineHeight * 3) / 4).toString())
      // rect.setAttribute('width', this.options.timeLineColumnWidth.toString())
      // rect.setAttribute('height', "30")
      // rect.setAttribute('fill', this.options.timeLineBackgroundColor)

      //day grids and name
        drawBar(
          this.ctx,
          scaledX,
          +(this.options.timeLineHeight * 3) / 4,
          this.options.timeLineColumnWidth,
          30,
          this.options.timeLineBackgroundColor,
          date.getDate().toString()
        );
  
        drawBar(
          this.ctx,
          scaledX,
          +(this.options.timeLineHeight * 2) / 4,
          this.options.timeLineColumnWidth,
          30,
          this.options.timeLineBackgroundColor,
          dayName
        );
      //   this.ctx.fillText(dayName, scaledX + , 85);

      // line seperator between days
        // const daySep = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        // daySep.setAttribute('x1', scaledX.toString())
        // daySep.setAttribute('y1', "0")
        // daySep.setAttribute('x2', scaledX.toString())
        // daySep.setAttribute('y2', this.options.timeLineHeight.toString())
        // daySep.setAttribute('stroke', 'lightgray')
        // this.svg.appendChild(daySep)

      drawLine(
        this.ctx,
        scaledX,
        +(this.options.timeLineHeight * 2) / 4,
        scaledX,
        this.gantt.timelineCanvas.height,
        "lightgray"
      );

      // day gridline in the main chart
      const gridLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      gridLine.setAttribute('x1', scaledX.toString())
      gridLine.setAttribute('y1', "0")
      gridLine.setAttribute('x2', scaledX.toString())
      gridLine.setAttribute('y2', this.gantt.svg.clientHeight.toString())
      gridLine.setAttribute('stroke', 'lightgray')
      this.svg.appendChild(gridLine)

      // drawLine(
      //   this.gantt.ctx,
      //   scaledX,
      //   0,
      //   scaledX,
      //   this.canvas.height,
      //   "lightgray"
      // );
    }
    // const grid2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    // grid2.setAttribute('x1', "0")
    // grid2.setAttribute('y1', "0")
    // grid2.setAttribute('x2', (this.svg.clientWidth + this.options.timeLineColumnWidth).toString())
    // grid2.setAttribute('y2',((this.options.timeLineHeight * 2) / 4).toString())
    // grid2.setAttribute('stroke', 'black')
    // this.svg.appendChild(grid2)

    drawLine(
      this.ctx,
      0,
      (this.options.timeLineHeight * 2) / 4,
      this.gantt.timelineCanvas.width + this.options.timeLineColumnWidth,
      (this.options.timeLineHeight * 2) / 4,
      "black"
    );

    let offset = (this.options.timeLineHeight * 3) / 4;
    // const grid3 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    // grid3.setAttribute('x1', "0")
    // grid3.setAttribute('y1', offset.toString())
    // grid3.setAttribute('x2', (this.svg.clientWidth + this.options.timeLineColumnWidth).toString())
    // grid3.setAttribute('y2', offset.toString())
    // grid3.setAttribute('stroke', 'black')
    // this.svg.appendChild(grid3)

    drawLine(
      this.ctx,
      0,
      +offset,
      this.gantt.timelineCanvas.width + this.options.timeLineColumnWidth,
      +offset,
      "black"
    );

    let date = this.minDate;

    // draw month timeline
    let maxDate = new Date(
      this.maxDate.getFullYear(),
      this.maxDate.getMonth() + 1,
      1
    );
    while (date <= maxDate) {
      let mnth = date.getMonth();
      let year = date.getFullYear();
      let day = date.getDate();
      let monthName = months[mnth];
      let minScale: number;
      if (this.minDate < date) {
        minScale = scaleX(
          new Date(year, mnth, 0),
          this.minDate,
          this.maxDate,
          this.svg.clientWidth
        );
      } else {
        minScale = 0;
      }
      let maxScale: number;
      if (this.gantt.maxDate > new Date(year, mnth + 1, 1)) {
        maxScale = scaleX(
          new Date(year, mnth + 1, 1),
          this.minDate,
          this.maxDate,
          this.svg.clientWidth
        );
      } else {
        maxScale = scaleX(
          addDays(this.maxDate, 1),
          this.minDate,
          this.maxDate,
          this.svg.clientWidth
        );
      }
      let scaledX = (minScale + maxScale) / 2.0;
      let width = maxScale - minScale;
      // const mnth2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      // mnth2.setAttribute('x', scaledX.toString())
      // mnth2.setAttribute('y', (this.options.timeLineHeight / 4).toString())
      // mnth2.setAttribute('width', (maxScale + this.options.timeLineColumnWidth - minScale).toString())
      // mnth2.setAttribute('height', "30")
      // mnth2.setAttribute('fill', this.options.timeLineBackgroundColor)
      // this.svg.appendChild(mnth2)
      //todo: add month name monthName
      drawBar(
        this.ctx,
        minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth,
        this.options.timeLineHeight / 4,
        minScale === 0
          ? maxScale
          : maxScale + this.options.timeLineColumnWidth - minScale,
        30,
        this.options.timeLineBackgroundColor,
        monthName
      );

      mnth += 1;
      date = new Date(year, mnth, day);

      // month seperator
      const mnthSep = document.createElementNS('http://www.w3.org/2000/svg', 'line')

      // mnthSep.setAttribute('x1', scaledX.toString())
      // mnthSep.setAttribute('y1', (this.options.timeLineHeight / 4).toString())
      // mnthSep.setAttribute('x2', (minScale + this.options.timeLineColumnWidth).toString())
      // mnthSep.setAttribute('y2', (this.options.timeLineHeight / 4).toString())
      // mnthSep.setAttribute('stroke', 'black')
      // this.svg.appendChild(mnthSep)

      drawLine(
        this.ctx,
        minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth,
        this.options.timeLineHeight / 4,
        minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth,
        this.gantt.timelineCanvas.height + this.options.timeLineHeight,
        "black"
      );

      // month gridline in the timeline chart


      drawLine(
        this.ctx,
        maxScale,
        this.options.timeLineHeight / 4,
        maxScale,
        this.gantt.timelineCanvas.height + this.options.timeLineHeight,
        "black"
      );

      // draw month vertical line in the main chart
      const mnthLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      mnthLine.setAttribute('x1', maxScale.toString())
      mnthLine.setAttribute('y1', "0")
      mnthLine.setAttribute('x2', maxScale.toString())
      mnthLine.setAttribute('y2', (this.svg.clientHeight).toString()) 
      mnthLine.setAttribute('stroke', 'black')
      this.svg.appendChild(mnthLine)

      // drawLine(
      //   this.gantt.ctx,
      //   maxScale,
      //   0,
      //   maxScale,
      //   this.canvas.height + this.options.timeLineHeight,
      //   "black"
      // );
    }

    //topline above month names
    drawLine(
      this.ctx,
      0,
      0,
      this.gantt.timelineCanvas.width + this.options.timeLineColumnWidth,
      0,
      "black"
    );
    for (let i = 0; i < noOfYears; i++) {
      let fDayOfYear = new Date(this.minDate.getFullYear() + i, 0, 1);
      let lDayOfYear = new Date(this.minDate.getFullYear() + i, 11, 31);
      if (fDayOfYear < this.minDate) {
        fDayOfYear = this.minDate;
      }
      if (lDayOfYear > this.maxDate) {
        lDayOfYear = this.maxDate;
      }
      let minScale = scaleX(
        fDayOfYear,
        this.minDate,
        this.maxDate,
        this.svg.clientWidth
      );
      let maxScale = scaleX(
        lDayOfYear,
        this.minDate,
        this.maxDate,
        this.svg.clientWidth
      );
      drawBar(
        this.ctx,
        minScale,
        0,
        maxScale - minScale + this.options.timeLineColumnWidth,
        30,
        this.options.timeLineBackgroundColor,
        fDayOfYear.getFullYear().toString()
      );
      //line under the year
      drawLine(
        this.ctx,
        minScale,
        +this.options.timeLineHeight / 4,
        maxScale + +this.options.timeLineColumnWidth,
        +this.options.timeLineHeight / 4,
        "black"
      );
      // line to the left of the year
      // drawLine(this.ctx, minScale, 0, minScale, this.canvas.height, "black");
      // drawLine(
      //   this.ctx,
      //   maxScale + +this.options.timeLineColumnWidth,
      //   0,
      //   maxScale + +this.options.timeLineColumnWidth,
      //   this.canvas.height,
      //   "black"
      // );
    }
  }

  update(date: Date) {}
}
