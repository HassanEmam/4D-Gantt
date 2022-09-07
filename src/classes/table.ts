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
  tableDOM: HTMLTableElement;
  heading: HTMLTableSectionElement;
  tableBody: HTMLTableSectionElement;
  container: HTMLElement;

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
    this.tableDOM = document.createElement("table");
    this.heading = document.createElement("thead");
    this.tableBody = document.createElement("tbody");
    this.container = this.gantt.tablediv;
  }

  drawHeadings() {
    this.container.innerHTML = "";
    let noCols = this.columns.length;
    let tableWidth = this.options.table.width;
    let colWidth = (tableWidth ? tableWidth : 400) / noCols;
    const heading = document.createElement("thead");
    const row = document.createElement("tr");
    row.style.height = `${this.options.timeLineHeight}px`;
    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      const col = document.createElement("th");
      col.innerText = this.columns[colidx];
      col.style.width = `${colWidth}px`;
      row.appendChild(col);
    }
    heading.appendChild(row);
    this.tableDOM.appendChild(heading);
    this.container.appendChild(this.tableDOM);
    this.container.appendChild(this.tableBody);
  }

  drawRow(data: nestedData) {
    this.createLeaf(data);
    if (data.children.length > 0) {
      data.children.forEach((child) => {
        this.createBranch(child);
      });
    } else {
      this.createLeaf(data);
    }
    this.initEvents();
  }

  createLeaf(data: nestedData) {
    const row = document.createElement("tr");
    row.style.height = `${this.options.rowHeight}px`;
    row.classList.add(`level${data.level}`);
    row.classList.add("table-collapse");
    row.setAttribute("data-depth", data.level.toString());
    // row.setAttribute("data", data);
    for (let colidx = 0; colidx < this.columns.length; colidx++) {
      const col = document.createElement("td");
      let toggle: HTMLElement;
      col.style.width = `${this.options.table.width / this.columns.length}px`;

      if (data[this.columns[colidx]] instanceof Date) {
        col.innerText = (data[this.columns[colidx]] as Date).toLocaleDateString(
          "en-GB",
          { day: "numeric", month: "2-digit", year: "numeric" }
        );
      } else {
        col.innerText = data[this.columns[colidx]];
      }

      if (colidx === 0 && data.children.length > 0) {
        console.log(data);
        toggle = document.createElement("span");
        toggle.classList.add("toggle");
        toggle.classList.add("table-collapse");
        col.insertBefore(toggle, col.firstChild);
      }

      row.appendChild(col);
    }
    this.tableBody.appendChild(row);
  }

  createBranch(data: nestedData) {
    this.createLeaf(data);
    for (let row of data.children) {
      if (row.children.length === 0) {
        this.createLeaf(row);
      } else {
        this.createBranch(row);
      }
    }
  }

  draw() {
    this.drawHeadings();
    // this.drawRows();
  }

  initEvents() {
    const toggles = document.querySelectorAll("td > span");
    for (const el of toggles) {
      el.addEventListener("click", (e) => {
        const tr = el.closest("tr");
        const childs = this.findChildren(tr);
        console.log(tr, childs);
        if (el.classList.contains("toggle")) {
          el.classList.remove("toggle");
          el.classList.add("expanded");
          childs.forEach((child) => {
            child.style.display = "none";
          });
        } else if (el.classList.contains("expanded")) {
          el.classList.remove("expanded");
          el.classList.add("toggle");
          childs.forEach((child) => {
            child.style.display = "table-row";
          });
        }
      });
    }
  }

  findChildren(tr: HTMLElement) {
    var depth = tr.dataset.depth;
    var elements = [...document.querySelectorAll("tr")].filter(function (
      element
    ) {
      return element.dataset.depth <= depth;
    });
    var next = this.nextUntil(tr, elements, null);
    return next;
  }

  nextUntil = function (elem: any, elements: any[], filter: any) {
    var siblings = [];
    elem = elem.nextElementSibling;
    while (elem) {
      if (elements.includes(elem)) break;
      if (filter && !elem.matches(filter)) {
        elem = elem.nextElementSibling;
        continue;
      }
      siblings.push(elem);
      elem = elem.nextElementSibling;
    }
    return siblings;
  };

  removeAllChildren(element: any) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  update() {}
}
