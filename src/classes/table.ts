import { TableRow } from "./tableRow";
import { GanttChart } from "./ganttChart";
import { threadId } from "worker_threads";
import { drawLine, addDays } from "../utils/helper";
import { data, nestedData } from "./data";
import { options } from "./options";
import { toUTF16 } from "../utils/helper";
import { scaleX } from "../utils/scales";
import { Bar } from "./bar";
import { clearLine } from "readline";

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
  visibleData: data[];

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
    // this.tableDOM.style.textAlign = "center";
    this.tableDOM.style.position = "relative";
    this.tableDOM.style.borderCollapse = "collapse";
    this.tableDOM.classList.add("disable-select");
    this.heading = document.createElement("thead");
    this.tableBody = document.createElement("tbody");
    this.container = this.gantt.tablediv;
  }

  drawHeadings(update: boolean = false) {
    if (!update === true) {
      this.container.innerHTML = "";
      let noCols = this.columns.length;
      let tableWidth = this.options.table.width;
      let colWidth = (tableWidth ? tableWidth : 400) / noCols;
      const heading = document.createElement("thead");
      const row = document.createElement("tr");
      row.style.height = `${this.options.timeLineHeight}px`;
      for (let colidx = 0; colidx < this.columns.length; colidx++) {
        const col = document.createElement("th");
        col.style.background = "#F5F5F5";
        col.style.position = "sticky";
        col.style.top = "0px";
        col.style.textAlign = "left";
        col.innerText = this.columns[colidx];
        col.style.width = `${colWidth}px`;
        const resizer = document.createElement("div");
        resizer.classList.add("resizer");
        resizer.style.height = this.options.timeLineHeight + "px";
        col.appendChild(resizer);
        let x: number;
        let w: number;

        const mouseMoveHandler = (event: MouseEvent) => {
          // Determine how far the mouse has been moved
          const dx = event.clientX - x;
          // Update the width of column
          col.style.width = `${w + dx}px`;
        };

        const mouseDownHandler = (e: MouseEvent) => {
          x = e.clientX;

          // Calculate the current width of column
          const styles = window.getComputedStyle(col);
          w = parseInt(styles.width, 10);

          // Attach listeners for document's events
          document.addEventListener("mousemove", mouseMoveHandler);
          document.addEventListener("mouseup", mouseUpHandler);
        };

        // When user releases the mouse, remove the existing event listeners
        const mouseUpHandler = function () {
          document.removeEventListener("mousemove", mouseMoveHandler);
          document.removeEventListener("mouseup", mouseUpHandler);
        };

        resizer.addEventListener("mousedown", mouseDownHandler);

        row.appendChild(col);
      }

      heading.appendChild(row);
      this.tableDOM.appendChild(heading);
      this.container.appendChild(this.tableDOM);
      this.tableDOM.appendChild(this.tableBody);
    }
  }

  drawRow(data: nestedData, update: boolean = false) {
    this.tableBody.innerHTML = "";
    this.rowCounter = 0;
    if (data.children.length > 0) {
      if (data.expanded && data.expanded === true) {
        data.expanded = true;
      } else if (data.expanded === undefined) {
        data.expanded = true;
      } else {
        data.expanded = false;
      }
    }
    this.createLeaf(data, update);
    if (data.children.length > 0) {
      data.children.forEach((child) => {
        this.createBranch(child, update);
      });
    }
    // else {
    //   this.createLeaf(data, update);
    // }
    this.initEvents();
  }

  createBranch(data: nestedData, update: boolean = false) {
    this.createLeaf(data, update);
    if (data.expanded && data.expanded === true) {
      for (let row of data.children) {
        if (row.children.length === 0) {
          this.createLeaf(row, update);
        } else {
          this.createBranch(row, update);
        }
      }
    }
  }

  createLeaf(data: nestedData, update: boolean = false) {
    if (data.visible === true) {
      const tableRow = new TableRow(
        this.context,
        this.gantt,
        data,
        this.options,
        this.rowCounter,
        this.columns
      );
    }

    if (update === true) {
      this.rowCounter++;
      return;
    }
    if (data.visible && data.visible === true) {
      const row = document.createElement("tr");
      row.style.height = `${this.options.rowHeight}px`;
      row.style.maxHeight = `${this.options.rowHeight}px`;
      row.classList.add(`level${data.level}`);

      row.classList.add("table-collapse");
      row.setAttribute("data-depth", data.level.toString());
      row.id = `ganttTable__${data.id.toString()}`;
      // row.setAttribute("data", data);
      let toggle: HTMLElement;
      for (let colidx = 0; colidx < this.columns.length; colidx++) {
        const col = document.createElement("td");
        col.style.width = `${this.options.table.width / this.columns.length}px`;
        col.style.height = `${this.options.rowHeight}px`;
        col.style.maxHeight = `${this.options.rowHeight}px`;
        col.style.margin = "0px";
        col.style.padding = "0px";
        col.style.border = "0px";
        if (data[this.columns[colidx]] instanceof Date) {
          col.innerHTML = `<span>${(
            data[this.columns[colidx]] as Date
          ).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "2-digit",
            year: "numeric",
          })}</span>`;
        } else {
          col.innerHTML = `<span>${data[this.columns[colidx]]}</span>`;
        }
        if (data.children.length === 0 && data.hasChildren === true) {
          let childs = this.gantt.options.data.filter(
            (d) => d.parent === data.id
          );
          if (childs.length > 0) {
            data.hasChildren = true;
          } else {
            data.hasChildren = false;
          }
        }
        if (colidx === 0) {
          col.style.width = `${
            this.options.table.width / this.columns.length -
            (data.level + 1) * 10
          }px`;
          if (data.children.length > 0 || data.hasChildren === true) {
            toggle = document.createElement("span");
            row.classList.add("branch");
            toggle.id = `gantt__span__${data.id.toString()}`;
            if (data.expanded && data.expanded === true) {
              toggle.classList.add("toggle");
            } else {
              toggle.classList.add("expanded");
            }
            toggle.classList.add("table-collapse");
            col.insertBefore(toggle, col.firstChild);
          }
          for (let level = data.level; level >= 0; level--) {
            const spacer = document.createElement("div");
            spacer.classList.add("branch");
            spacer.classList.add(`level${level}`);
            spacer.style.height = "100%";
            spacer.style.margin = "0px";
            spacer.style.display = "inline-block";
            spacer.style.padding = "0px";
            spacer.style.width = "10px";
            col.insertBefore(spacer, col.firstChild);
          }
        }

        if (data.children.length === 0 && colidx > 0) {
          col.addEventListener("dblclick", (e) => {
            col.contentEditable = "true";
            col.focus();
          });
          col.addEventListener("blur", (e) => {
            col.contentEditable = "false";
          });
          col.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              col.contentEditable = "false";
            }
          });
        }

        row.appendChild(col);

        this.tableBody.appendChild(row);
      }
      if (data.children.length > 0 || data.hasChildren === true) {
        toggle.addEventListener("click", () => {
          this.addEvents(toggle);
        });
      }
      this.rowCounter++;
    }
  }

  addEvents(toggle: HTMLElement) {
    const tr = toggle.closest("tr");
    const parent_id = parseInt(tr.id.split("__")[1]);
    const childs = this.findChildren(tr);
    // if element has class toggle then remove it and collapse
    if (toggle.classList.contains("toggle")) {
      toggle.classList.remove("toggle");
      toggle.classList.add("expanded");

      this.setInvisible(childs);
      // childs.forEach((child) => {
      //   const child_id = parseInt(child.id.replace("ganttTable__", ""));
      //   // this.gantt.options.data.filter((d) => d.id == child_id)[0].visible =
      //   //   false;
      // });
      this.gantt.options.data.filter((d) => d.id == parent_id)[0].expanded =
        false;
      this.gantt.options.data.filter((d) => d.id == parent_id)[0].hasChildren =
        true;
      this.gantt.updateGantt();
    } else if (toggle.classList.contains("expanded")) {
      toggle.classList.remove("expanded");
      toggle.classList.add("toggle");
      let current = this.gantt.options.data.filter((d) => d.id == parent_id)[0];
      const childss = this.getAllChilds(current);
      // this.setVisible(childs);
      childss.forEach((child) => {
        child.visible = true;
        let childChildren = this.gantt.options.data.filter(
          (d) => d.parent == child.id
        );
        if (childChildren.length > 0) {
          child.hasChildren = true;
        } else {
          child.hasChildren = false;
        }
        // child.hasChildren =  ? true : false;
        // child.style.display = "none";
      });

      this.gantt.options.data.filter((d) => d.id == parent_id)[0].expanded =
        true;
      this.gantt.options.data.filter((d) => d.id == parent_id)[0].hasChildren =
        true;
      this.gantt.updateGantt();
    }
  }

  setInvisible(childs: HTMLElement[]) {
    for (let child of childs) {
      let child_id = parseInt(child.id.toString().split("__")[1]);
      this.gantt.options.data.filter((d) => d.id == child_id)[0].visible =
        false;
      let children = this.findChildren(child);

      if (children && Array.isArray(children) && children.length > 0)
        this.setInvisible(children);
    }
  }

  setVisible(childs: HTMLElement[]) {
    for (let child of childs) {
      let child_id = parseInt(child.id.toString().split("__")[1]);
      this.gantt.options.data.filter((d) => d.id == child_id)[0].visible = true;
      let children = this.findChildren(child);
      if (children && Array.isArray(children) && children.length > 0)
        this.setVisible(children);
    }
  }

  getAllChilds(data: data) {
    let children: data[] = [];
    let childs = this.gantt.options.data.filter((d) => d.parent === data.id);
    if (childs.length > 0) {
      childs.forEach((child) => {
        children.push(child);
        children = children.concat(this.getAllChilds(child));
      });
    }
    return children;
  }

  draw(update: boolean = false) {
    if (update === true) {
      this.rowCounter = 0;
    }
    // this.rowCounter = 0;
    this.drawHeadings(update);
    const cells = this.tableDOM.getElementsByTagName("td");
  }

  initEvents() {
    const toggles = document.getElementsByTagName("span");
    for (let el of toggles) {
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

  findByKey(obj: nestedData[], keyToFind: number): any {
    for (let ob of obj) {
      if (ob["id"] === keyToFind) {
        ob.visible = false;
        return obj;
      }
      if (ob.children.length > 0) {
        let childSearch = this.findByKey(ob.children, keyToFind);
        if (childSearch) {
          return childSearch;
        }
      }
    }
    return null;
  }

  findDataChildren(tasks: nestedData[]) {
    const childs = [];
    for (let task of tasks) {
      // task.visible = false;
      if (task.children.length > 0) {
        this.findDataChildren(task.children);
      }
    }
  }

  removeAllChildren(element: any) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  update() {}
}
