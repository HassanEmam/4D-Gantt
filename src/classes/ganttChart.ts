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
import { TimeLine } from "./timeline";
import { TableRow } from "./tableRow";
import { RowCell } from "./rowCell";
import { EventEmitter } from "../utils/EventEmitter";

export class GanttChart extends EventEmitter {
  options: options;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tableCtx: CanvasRenderingContext2D;
  // timelineCtx: CanvasRenderingContext2D;
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
  timelineDiv: HTMLElement;
  barsDiv: HTMLElement;
  splitter: HTMLElement;
  splitterX: number = 0;
  splitterY: number = 0;
  internalTableDiv: HTMLElement;
  svg: Element;
  svgns: string;
  bars: Bar[] = [];
  duration: number;

  constructor(options: options) {
    super();
    this.options = options;
    this.rows = [];
    this.cells = [];
    this.container = options.container;
    // this.container.style.display = "flex";
    this.splitter = document.createElement("div");
    this.visibleTasks = this.options.data;
    this.svgns = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS(this.svgns, "svg");
    this.chartDiv = document.createElement("div");
    let maxmin = minmax(this.options.data);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = addDays(maxmin[0], -7);
    this.maxDate = addDays(maxmin[1], 31);
    this.duration = dayDiff(this.minDate, this.maxDate);
    this.initStyle();

    this.init();
    this.colors = options.colors;
    this.titleOptions = options.titleOptions;
    console.log(
      "duration",
      this.minDate,
      this.maxDate,
      dayDiff(this.minDate, this.maxDate)
    );
    if (this.options.timeLineHeight) {
      this.timeLineHeight = this.options.timeLineHeight;
    } else {
      this.timeLineHeight = 120;
      this.options.timeLineHeight = this.timeLineHeight;
    }
    this.svg.setAttribute(
      "width",
      (this.options.timeLineColumnWidth * this.duration).toString()
    );

    this.dateLine = new DateLine(this.svg, this.options, this.minDate, this);
    // this.timeLine = new TimeLine(this.ctx, this.canvas, this.options, this);
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
         
         .gantt__chart__timeline_container_year_container
          {
            display:grid;
          }
        .gantt__chart__timeline_container_year{
          display:grid;
          background-color: #2196F3;
          grid-auto-flow: column;
          grid-auto-columns: minmax(${this.options.timeLineColumnWidth}px, 1fr);
          height: ${this.options.timeLineHeight / 3}px;
          border: 1px solid black;
        }
        .gantt__chart__timeline_container_month{
          display:grid;
          background-color: #2196F3;
          grid-auto-flow: column;
          grid-auto-columns: minmax(${this.options.timeLineColumnWidth}px, 1fr);
          height: ${this.options.timeLineHeight / 3}px;
          border: 1px solid black;
        }

         .gantt__chart__timeline_container {
            display: grid;
            overflow-x: auto;
          }

        .gantt__chart__timeline_container_day{
          display:grid;
          border: 1px solid black;
          grid-auto-flow: column;
          grid-template-columns: minmax(${
            this.options.timeLineColumnWidth
          }px, 1fr);
          justify-content:center;
          align-items:center;
        }
        .resizer {
            /* Displayed at the right side of column */
            position: absolute;
            top: 0;
            right: 0;
            width: 10px;
            cursor: col-resize;
            user-select: none;
        }

        .resizer:hover,
        .resizing {
            border-right: 2px solid blue;
        }

        table td {
          border: 1px solid #eee;
        }

        tr td:first-child {
          display:flex;
        }

        .level0.branch{
          background: blue;
          color:yellow;
          font-weight: bold;
          font-size: 14px;
        }
        .level1.branch{
          background: green;
          color: black;
          font-size: 14px;
        }
        .level2.branch{
          background: yellow;
          color: blue;
          font-size: 12px;
        }
        .level3.branch{
          background: blue;
          color: white;
          font-size: 12px;
        }
        .level4.branch{
          background: red;
          color: white;
          font-size: 11px;
        }

        .level5.branch{
          background: lightblue;
          color: black;
          font-size: 11px;
        }
        .level6.branch{
          background: lightgreen;
          color: black;
          font-size: 11px;
        }
        .level7.branch{
          background: lightyellow;
          color: black;
          font-size: 11px;
        }

        .table-collapse .toggle {
          width: 0;
          height: 0;
          border-left: 0.25rem solid transparent;
          border-right: 0.25rem solid transparent;
          border-top: 0.5rem solid var(--dark-blue);
          content: "\\229F";

          }
          .disable-select {
            user-select: none; /* supported by Chrome and Opera */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
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
    this.tablediv.style.maxHeight = "100%";
    this.internalTableDiv = document.createElement("div");
    this.internalTableDiv.style.width = `${this.options.table.width}px`;
    this.internalTableDiv.style.height = "100%";
    this.internalTableDiv.style.maxHeight = "100%";
    this.internalTableDiv.id = "gantt_canvas__chart__table__internal";
    this.tablediv.appendChild(this.internalTableDiv);

    this.splitter.classList.add("splitter");
    this.splitter.style.width = "10px";
    this.splitter.style.height = "100%";
    this.splitter.style.display = "inline-block";
    this.splitter.style.cursor = "col-resize";
    this.splitter.style.position = "relative";
    this.splitter.style.top = "0px";
    this.splitter.style.zIndex = "100";
    this.splitter.style.backgroundColor = "transparent";
    this.timelineDiv = document.createElement("div");
    this.timelineDiv.id = "gantt__canvas__chart__timeline";
    this.timelineDiv.style.height = this.options.timeLineHeight + "px";
    this.timelineDiv.style.width =
      (this.options.timeLineColumnWidth * this.duration).toString() + "px";
    console.log("Width", this.options.timeLineColumnWidth, this.duration);
    this.timelineDiv.style.position = "sticky";
    this.timelineDiv.style.top = "0";

    this.barsDiv = document.createElement("div");
    this.barsDiv.id = "gantt__canvas__chart__bars";
    this.barsDiv.appendChild(this.svg);
    this.chartDiv.setAttribute("id", "gantt_canvas__chart__");
    this.chartDiv.appendChild(this.timelineDiv);
    // this.chartDiv.style.flex = "1 1 auto";

    this.chartDiv.appendChild(this.barsDiv);
    this.chartDiv.style.display = "inline-block";
    this.chartDiv.style.height = "100%";
    const contWidth =
      this.container.clientWidth - this.options.table.width - 50;
    this.chartDiv.style.overflow = "auto";
    this.chartDiv.style.width = `${contWidth}px`;
    this.chartDiv.style.margin = "0px";
    this.container.appendChild(this.tablediv);
    this.container.appendChild(this.splitter);
    this.container.appendChild(this.chartDiv);
    this.svg.setAttribute(
      "height",
      (this.options.rowHeight * this.options.data.length).toString()
    );
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
    for (let data of this.options.data) {
      data.visible = true;
    }
    this.splitter.addEventListener("mousedown", this.splitterMouseDownHandler);
  }

  splitterMouseDownHandler = (e: MouseEvent) => {
    this.splitterX = e.clientX;
    this.splitterY = e.clientY;
    this.tableWidth = this.tablediv.getBoundingClientRect().width;
    // Attach the listeners to `document`
    document.addEventListener("mousemove", this.splitterMouseMoveHandler);
    document.addEventListener("mouseup", this.splitterMouseUpHandler);
  };

  splitterMouseMoveHandler = (e: MouseEvent) => {
    const dx = e.clientX - this.splitterX;

    const newLeftWidth =
      ((this.tableWidth + dx) * 100) /
      (this.splitter.parentNode as HTMLElement).getBoundingClientRect().width;
    this.tablediv.style.width = `${newLeftWidth}%`;
    (
      this.tablediv.children[0] as HTMLElement
    ).style.width = `${this.splitter.offsetLeft}px`;
    this.chartDiv.style.width = `${95 - newLeftWidth}%`;
  };

  splitterMouseUpHandler = (e: MouseEvent) => {
    // this.splitter.style.removeProperty("cursor");
    document.body.style.removeProperty("cursor");

    // this.tablediv.style.removeProperty("user-select");
    this.tablediv.style.removeProperty("pointer-events");

    this.chartDiv.style.removeProperty("user-select");
    this.chartDiv.style.removeProperty("pointer-events");

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", this.splitterMouseMoveHandler);
    document.removeEventListener("mouseup", this.splitterMouseUpHandler);
  };

  /**
   * @description - initialize events
   */
  initEvents() {
    /**
     * Events to synchronise scroll bars of table and canvas
     */
    this.tablediv.addEventListener("scroll", (event) => {
      this.chartDiv.scrollTop = (event.target as HTMLElement).scrollTop;
    });

    this.chartDiv.addEventListener("scroll", (event) => {
      this.tablediv.scrollTop = (event.target as HTMLElement).scrollTop;
    });
  }

  drawGridLines() {
    var canvasActualWidth = this.svg.clientWidth;

    var gridValue = 0;

    drawLine(this.ctx, 0, 0, canvasActualWidth, 0, "black");

    // horizontal grids between tasks
    let rowHeight = this.options.rowHeight;
    for (let i in this.visibleTasks) {
      drawLine(
        this.ctx,
        0,
        rowHeight * (parseInt(i) + 1),
        canvasActualWidth + this.options.timeLineColumnWidth,
        rowHeight * (parseInt(i) + 1),
        "lightgray"
      );

      drawLine(
        this.tableCtx,
        0,
        rowHeight * (parseInt(i) + 1),
        this.options.table.width,
        rowHeight * (parseInt(i) + 1),
        "black"
      );
    }

    gridValue += this.options.gridScale;
    // }
  }

  drawDateLine() {
    this.dateLine = new DateLine(this.svg, this.options, this.dataDate, this);
    this.dateLine.draw();
  }

  drawTimeLine() {
    this.timeLine = new TimeLine(this.timelineDiv, this.options, this);
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
    // this.drawGridLines();
    this.drawTable();
    this.drawTimeLine();
    this.drawDateLine();
    this.tasksData = new Tasks(this.options.data, this);
    for (let bar of this.bars) {
      bar.on("taskClicked", (event: any) => {
        this.trigger("taskClicked", [event]);
      });
    }
    this.table.on("taskClicked", (event: any) => {
      this.trigger("taskClicked", [event]);
    });
  }

  update() {
    const contWidth =
      this.container.clientWidth -
      this.tablediv.clientWidth -
      this.splitter.clientWidth -
      50;
    this.chartDiv.style.overflow = "auto";
    this.chartDiv.style.width = `${contWidth}px`;
    this.chartDiv.style.margin = "0px";
    let duration = dayDiff(this.minDate, this.maxDate) + 1;
    this.svg.setAttribute(
      "width",
      (this.options.timeLineColumnWidth * duration).toString()
    );
    // this.ctx.clearRect(0, 0, this.svg.clientWidth, this.svg.clientHeight);
    this.svg.innerHTML = "";

    this.tasks = [];
    this.dateLine = null;
    // this.drawGridLines();
    this.draw();
  }

  updateGantt() {
    const current_scroll = this.tablediv.scrollTop;
    this.svg.innerHTML = "";
    const contWidth =
      this.container.clientWidth -
      this.tablediv.clientWidth -
      this.splitter.clientWidth -
      50;
    this.chartDiv.style.overflow = "auto";
    this.chartDiv.style.width = `${contWidth}px`;
    this.chartDiv.style.margin = "0px";

    this.visibleTasks = [];
    for (let task of this.options.data) {
      if (task.visible !== false) {
        this.visibleTasks.push(task);
      }
    }
    this.svg.setAttribute(
      "height",
      (this.options.rowHeight * this.visibleTasks.length).toString()
    );
    let maxmin = minmax(this.visibleTasks);
    this.maxValue = maxmin[1].getTime();
    this.minValue = maxmin[0].getTime();
    this.minDate = addDays(maxmin[0], -7);
    this.maxDate = addDays(maxmin[1], 31);
    this.tasks = [];
    this.dateLine = null;
    this.svg.setAttribute(
      "width",
      (
        (dayDiff(this.minDate, this.maxDate) + 1) *
        this.options.timeLineColumnWidth
      ).toString()
    );
    // this.drawGridLines();
    this.drawDateLine();
    this.drawTimeLine();
    this.tasksData = new Tasks(this.options.data, this);
    this.tablediv.scrollTop = current_scroll;
    this.chartDiv.scrollTop = current_scroll;
  }
}
