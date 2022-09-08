import { Tasks } from "./tasks";
import { DateLine } from "./dateLine";
import { options } from "./options";
import { data } from "./data";
import { Bar } from "./bar";
import { Table } from "./table";
import {
  drawLine,
  drawBar,
  minmax,
  dayDiff,
  addDays,
  recursive_offset,
} from "../utils/helper";
import { scaleX } from "../utils/scales";
import { TimeLine } from "./timeline";
import { table } from "console";
import { TableRow } from "./tableRow";
import { RowCell } from "./rowCell";
import { threadId } from "worker_threads";

export class GanttChart {
  options: options;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tableCtx: CanvasRenderingContext2D;
  colors: string[];
  titleOptions: string;
  maxValue: number;
  minValue: number;
  minDate: Date;
  maxDate: Date;
  tasks: Bar[];
  dateLine: DateLine;
  timeLine: TimeLine;
  timeLineHeight: number;
  tableWidth: number;
  dataDate: Date;
  container: HTMLElement;
  tableCanvas: HTMLCanvasElement;
  table: Table;
  tasksData: Tasks;
  rows: TableRow[];
  cells: RowCell[];
  tablediv: HTMLElement;
  chartDiv: HTMLElement;
  visibleTasks: data[];

  constructor(options: options) {
    this.initStyle();
    this.options = options;
    this.rows = [];
    this.cells = [];
    this.container = options.container;
    this.visibleTasks = this.options.data;
    this.canvas = document.createElement("canvas");
    // this.canvas.setAttribute("id", "gantt_canvas__chart__");
    this.tableCanvas = document.createElement("canvas");
    this.chartDiv = document.createElement("div");
    this.init();
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.tableCtx = this.tableCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.colors = options.colors;
    this.titleOptions = options.titleOptions;
    let maxmin = minmax(this.options.data);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    let duration = dayDiff(this.minDate, this.maxDate) + 1;
    if (this.options.timeLineHeight) {
      this.timeLineHeight = this.options.timeLineHeight;
    } else {
      this.timeLineHeight = 120;
      this.options.timeLineHeight = this.timeLineHeight;
    }
    this.canvas.width = this.options.timeLineColumnWidth * duration;

    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      this.minDate
    );
    this.timeLine = new TimeLine(this.ctx, this.canvas, this.options, this);
    this.tasks = [];
    let currentDate = new Date(2020, 1, 15);
    this.initEvents();
  }

  initStyle() {
    let styleEl = document.createElement("style");
    styleEl.appendChild(
      document.createTextNode(
        `#gantt_canvas__chart__::-webkit-scrollbar {width:10px;} 
         #gantt_canvas__chart__::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey; border-radius:10px;}
         #gantt_canvas__chart__::-webkit-scrollbar-thumb{background:lightgray; border-radius:10px}
         #gantt_canvas__chart__::-webkit-scrollbar-thumb:hover{background:gray;}

         #gantt_canvas__chart__table::-webkit-scrollbar {width:10px;} 
         #gantt_canvas__chart__table::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey; border-radius:10px;}
         #gantt_canvas__chart__table::-webkit-scrollbar-thumb{background:lightgray; border-radius:10px}
         #gantt_canvas__chart__table::-webkit-scrollbar-thumb:hover{background:gray;}
         .level1 td:first-child {
  padding-left: 15px;
}

table {
  border-collapse: collapse;
  width: 100%;
  position: relative;
}

table th {
  background: lightgray;
  position: sticky;
  top: 0;
}

table td {
  border: 1px solid #eee;
}
.level2 td:first-child {
  padding-left: 30px;
}

.level3 td:first-child {
  padding-left: 45px;
}

.level4 td:first-child {
  padding-left: 60px;
}

.level5 td:first-child {
  padding-left: 75px;
}

.level6 td:first-child {
  padding-left: 90px;
}

.level7 td:first-child {
  padding-left: 105px;
}
.table-collapse .toggle {
  width: 0;
  height: 0;
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
  border-top: 0.5rem solid var(--dark-blue);
  content: "\\229F";

  }

.table-expand .toggle {
  width: 0;
  height: 0;
  border-top: 0.25rem solid transparent;
  border-left: 0.5rem solid var(--dark-blue);
  border-bottom: 0.25rem solid transparent;
}

.toggle {
  height: 9px;
  width: 9px;
  display: inline-block;
  margin: 0.2rem;
  margin-right:1rem;

}

.toggle:before{
  content: "\\229F";
  color:"black";
  display:inline-block;
  margin-right:1rem;
}
.expanded {
  height: 9px;
  width: 9px;
  display: inline-block;
  margin: 0.2rem;
  margin-right:1rem;
}

.expanded:before{
  content:"\\229E";
  color:"black";
  display:inline-block;
  margin: 0.2rem;
  margin-right:1rem;
}

tr:hover {
  background-color: #d6eeee;
}
        `
      )
    );
    document.getElementsByTagName("head")[0].append(styleEl);
  }

  init() {
    this.tablediv = document.createElement("div");
    this.tablediv.id = "gantt_canvas__chart__table";
    this.tablediv.style.display = "inline-block";
    this.tablediv.style.width = `${this.options.table.width + 20}px`;
    this.tablediv.style.overflow = "auto";
    this.tablediv.style.height = "100%";
    this.chartDiv.setAttribute("id", "gantt_canvas__chart__");

    this.chartDiv.appendChild(this.canvas);
    this.chartDiv.style.display = "inline-block";
    this.chartDiv.style.height = "100%";
    const contWidth =
      this.container.clientWidth - this.options.table.width - 50;
    this.chartDiv.style.overflow = "auto";
    this.chartDiv.style.width = `${contWidth}px`;
    this.chartDiv.style.margin = "0px";
    this.tablediv.appendChild(this.tableCanvas);
    this.container.appendChild(this.tablediv);
    this.container.appendChild(this.chartDiv);
    this.canvas.height =
      this.options.timeLineHeight +
      this.options.rowHeight * this.options.data.length;
    if (this.options.table.width) {
      this.tableWidth = this.options.table.width;
    } else {
      this.tableWidth = 400;
      this.options.table.width = this.tableWidth;
    }
    if (this.options.dataDate) {
      this.dataDate = this.options.dataDate;
    } else {
      this.dataDate = new Date();
      this.options.dataDate = this.dataDate;
    }

    this.tableCanvas.height = this.canvas.height;
    this.tableCanvas.width = this.tableWidth;
  }

  /**
   * @description - initialize events
   */
  initEvents() {
    this.tableCanvas.addEventListener("mousemove", (e) => {
      let parent = (e.target as HTMLElement).parentElement;
      let offsetpos = recursive_offset(e.target);
      let posX = e.clientX + offsetpos.x + parent.offsetLeft;
      let posY =
        e.clientY + offsetpos.y + parent.offsetTop + this.canvas.offsetTop;
      for (let row of this.rows) {
        row.collision(posX, posY);
      }
    });
    this.tableCanvas.addEventListener("click", (e) => {
      let parent = (e.target as HTMLElement).parentElement;
      let offsetpos = recursive_offset(e.target);
      let posX = e.clientX + offsetpos.x + parent.offsetLeft;
      let posY =
        e.clientY + offsetpos.y + parent.offsetTop + this.canvas.offsetTop;
      for (let cell of this.cells) {
        cell.collision(posX, posY);
      }
    });
    this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
      let parent = (e.target as HTMLElement).parentElement;
      let offsetpos = recursive_offset(e.target);
      let posX = e.clientX + offsetpos.x + parent.offsetLeft;
      let posY =
        e.clientY + offsetpos.y + parent.offsetTop + this.canvas.offsetTop;

      for (let task of this.tasks) {
        task.collision(posX, posY);
      }
      if (this.dateLine) {
        this.dateLine.collision(posX, posY);
      }
    });
    this.tablediv.addEventListener("scroll", (event) => {
      this.chartDiv.scrollTop = (event.target as HTMLElement).scrollTop;
    });

    this.chartDiv.addEventListener("scroll", (event) => {
      this.tablediv.scrollTop = (event.target as HTMLElement).scrollTop;
    });
  }
  drawGridLines() {
    var canvasActualHeight = this.canvas.height - this.options.timeLineHeight;
    var canvasActualWidth = this.canvas.width;

    var gridValue = 0;
    // while (gridValue <= this.maxValue) {

    drawLine(
      this.ctx,
      0,
      this.options.timeLineHeight,
      canvasActualWidth,
      this.options.timeLineHeight,
      "black"
    );
    // horizontal grids between tasks
    let rowHeight = this.options.rowHeight;
    for (let i in this.visibleTasks) {
      drawLine(
        this.ctx,
        0,
        this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        canvasActualWidth + this.options.timeLineColumnWidth,
        this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        "lightgray"
      );

      drawLine(
        this.tableCtx,
        0,
        this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        this.options.table.width,
        this.options.timeLineHeight + rowHeight * (parseInt(i) + 1),
        "black"
      );
    }

    gridValue += this.options.gridScale;
    // }
  }

  drawDateLine() {
    this.dateLine = new DateLine(
      this.ctx,
      this.canvas,
      this.options,
      this.dataDate
    );
    this.dateLine.draw();
  }

  drawTimeLine() {
    this.timeLine = new TimeLine(this.ctx, this.canvas, this.options, this);
    this.timeLine.draw();
  }

  drawTable(update: boolean = false) {
    if (update !== true) {
      this.table = new Table(
        this.tableCtx,
        this.options.colors[0],
        this.options.barColorHover,
        "black",
        ["id", "name", "start", "end"],
        this.options,
        this
      );
    }
    this.table.draw(update);
  }

  draw() {
    this.drawGridLines();
    this.drawTable();
    // this.drawBars();
    this.drawTimeLine();
    this.drawDateLine();
    this.tasksData = new Tasks(this.options.data, this);
  }

  update() {
    let duration = dayDiff(this.minDate, this.maxDate) + 1;
    this.canvas.width =
      this.tableWidth + this.options.timeLineColumnWidth * duration;
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height + this.options.timeLineHeight
    );
    this.tasks = [];
    this.dateLine = null;
    this.draw();
  }

  updateGantt() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height + this.options.timeLineHeight
    );
    this.visibleTasks = [];
    for (let task of this.options.data) {
      if (task.visible !== false) {
        this.visibleTasks.push(task);
      }
    }
    this.canvas.height =
      this.options.timeLineHeight +
      this.options.rowHeight * this.visibleTasks.length;
    this.tableCanvas.height = this.canvas.height;
    let maxmin = minmax(this.visibleTasks);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = maxmin[0];
    this.maxDate = maxmin[1];
    this.tasks = [];
    this.dateLine = null;

    // this.drawTable(true);
    this.drawGridLines();
    this.drawTimeLine();
    this.drawDateLine();
    console.log("visibleTasks from Gantt", this.visibleTasks);
    // let nestedData = this.tasksData.list_to_tree(this.visibleTasks, true);
    this.tasksData = new Tasks(this.visibleTasks, this);

    // this.tasksData.update();
    // draw bars
    // let counter = 0;
    // for (let element of this.visibleTasks) {
    //   let x = scaleX(
    //     element.start,
    //     this.minDate,
    //     this.maxDate,
    //     this.canvas.width
    //   );
    //   let y =
    //     counter * this.options.rowHeight +
    //     this.options.timeLineHeight +
    //     this.options.rowHeight * 0.2;
    //   let width =
    //     scaleX(element.end, this.minDate, this.maxDate, this.canvas.width) - x;
    //   let height = this.options.rowHeight * 0.6;

    //   let bar = new Bar(
    //     x,
    //     y,
    //     width,
    //     height,
    //     this.ctx,
    //     "lightgreen",
    //     "black",
    //     element.name,
    //     this.options
    //   );
    //   bar.draw();
    //   counter++;
    // }
  }
}
