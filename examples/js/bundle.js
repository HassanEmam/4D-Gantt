const scheduleData = [
  {
    id: "1",
    name: "Task 1",
    // start: new Date(2022, 3, 1),
    baselineStart: new Date(2022, 2, 20),
    // end: new Date(2022, 3, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: null,
  },
  {
    id: "2",
    name: "Task 2",
    // start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 6),
    // end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 20),
    parent: "1",
  },
  {
    id: "3",
    name: "Task 3",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "1",
  },
  {
    id: "4",
    name: "Task 4",
    start: new Date(2022, 0, 1),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "2",
  },
  {
    id: "5",
    name: "Task 5",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "2",
  },
  {
    id: "6",
    name: "Task 6",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 2,
  },
  {
    id: "7",
    name: "Task 7",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "3",
  },
  {
    id: "8",
    name: "Task 8 Task 8 Task 8 Task 8 Task 8 Task 8 Task 8 Task 8",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "1",
  },
  {
    id: "9",
    name: "Task 9",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "3",
  },
  {
    id: "10",
    name: "Task 10",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "2",
  },
  {
    id: "11",
    name: "Task 11",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "2",
  },
  {
    id: "12",
    name: "Task 12",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "3",
  },
  {
    id: "13",
    name: "Task 13",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),

    parent: "3",
  },
  {
    id: "14",
    name: "Task 14",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "2",
  },
  {
    id: "15",
    name: "Task 15",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "13",
  },
  {
    id: "16",
    name: "Task 16",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "13",
  },
  {
    id: "17",
    name: "Task 17",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "13",
  },
  {
    id: "18",
    name: "Task 18",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "1",
  },
  {
    id: "19",
    name: "Task 19",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "1",
  },
  {
    id: "20",
    name: "Task 20",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "1",
  },
  {
    id: "21",
    name: "Task 21",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "1",
  },
  {
    id: "23",
    name: "Task 23",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: "4",
  },
  {
    id: "24",
    name: "Task 24",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: "23",
  },
  {
    id: "22",
    name: "Task 22",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: "24",
  },
];

/**
 * Gets a date and returns a scaled value
 * @param  {Date} dateToSclae the date to convert into a scaled value
 * @param  {Date} minDate the min date of the chart
 * @param {Date} maxDate the max date of the chart
 * @param {number} canvasWidth the width of the canvas
 * @return {number} the scaled value
 */
function scaleX(dateToSclae, minDate, maxDate, width) {
    const min = minDate.getTime();
    const max = maxDate.getTime();
    const overallDuration = max - min;
    if (dateToSclae && dateToSclae instanceof Date) {
        const date = dateToSclae.getTime();
        const scale = Math.ceil((date - min) * (width / overallDuration));
        return scale;
    }
    return 0;
}

class Tasks {
    constructor(data, gantt) {
        this.data = data;
        this.gantt = gantt;
        this.calculateWBSDates();
        this.nestedData = this.list_to_tree(this.data);
        this.createTree(false);
        console.log(this.nestedData);
    }
    calculateWBSDates() {
        let tasks = this.data.filter((act) => {
            return this.data.filter((d) => d.parent === act.id).length === 0;
        });
        let wbss = this.data.filter((act) => {
            return this.data.filter((d) => d.parent === act.id).length !== 0;
        });
        for (let wbs of wbss) {
            const tmpTasks = tasks.filter((t) => t.parent === wbs.id);
            if (tmpTasks.length > 0) {
                let min = tmpTasks.reduce((prev, current) => {
                    return prev.start < current.start ? prev : current;
                });
                let max = tmpTasks.reduce((prev, current) => {
                    return prev.start > current.start ? prev : current;
                });
                wbs.start = min.start;
                wbs.end = max.end;
            }
        }
        for (let wbs of wbss) {
            const tmpChildWbss = wbss.filter((t) => t.parent === wbs.id);
            if (tmpChildWbss.length > 0) {
                let min = tmpChildWbss.reduce((prev, current) => {
                    return prev.start < current.start ? prev : current;
                });
                let max = tmpChildWbss.reduce((prev, current) => {
                    return prev.start > current.start ? prev : current;
                });
                wbs.start = min.start;
                wbs.end = max.end;
            }
        }
    }
    createTree(update = false) {
        this.gantt.table.rowCounter = 0;
        this.gantt.table.tableBody.innerHTML = "";
        for (let i = 0; i < this.nestedData.length; i++) {
            const element = this.nestedData[i];
            this.gantt.table.drawRow(element, update);
        }
    }
    constructTree(task, update = false) {
        if (task.children.length === 0) {
            this.gantt.table.drawRow(task);
            return;
        }
        this.gantt.table.drawRow(task, update);
        for (let i = 0; i < task.children.length; i++) {
            this.constructTree(task.children[i], update);
        }
    }
    // list_to_tree(dataset: data[], update: boolean = false) {
    //   const hashTable = Object.create(null);
    //   dataset.forEach(
    //     (aData) =>
    //       (hashTable[aData.id] = {
    //         ...aData,
    //         children: [],
    //         level: 0,
    //       })
    //   );
    //   const dataTree: nestedData[] = [];
    //   dataset.forEach((aData) => {
    //     if (aData.parent) {
    //       hashTable[aData.id].level = hashTable[aData.parent].level + 1;
    //       if (update) {
    //         hashTable[aData.id].visible = aData.visible;
    //         hashTable[aData.id].expanded = aData.expanded;
    //       } else {
    //         if (aData.visible === undefined) {
    //           hashTable[aData.id].visible = true;
    //         } else {
    //           hashTable[aData.id].visible = aData.visible;
    //         }
    //         if (aData.expanded === undefined) {
    //           hashTable[aData.id].expanded = true;
    //         } else {
    //           hashTable[aData.id].expanded = aData.expanded;
    //         }
    //         if (aData.hasChildren !== undefined) {
    //           hashTable[aData.id].hasChildren = true;
    //         } else {
    //           hashTable[aData.id].hasChildren = aData.hasChildren;
    //         }
    //         // hashTable[aData.id].expanded = true;
    //       }
    //       hashTable[aData.parent].children.push(hashTable[aData.id]);
    //     } else {
    //       dataTree.push(hashTable[aData.id]);
    //     }
    //   });
    //   return dataTree;
    // }
    list_to_tree(data, update = false) {
        const tree = [];
        const parents = data.filter((d) => d.parent == null);
        for (const parent of parents) {
            parent.level = 0;
            let nestedObj = Object.create(null);
            nestedObj = { ...parent, children: [] };
            nestedObj.level = 0;
            if (parent.visible === undefined) {
                nestedObj.visible = true;
            }
            else if (parent.visible === true) {
                nestedObj.visible = true;
            }
            else {
                nestedObj.visible = false;
            }
            if (parent.expanded !== undefined) {
                nestedObj.expanded = parent.expanded;
            }
            else {
                nestedObj.expanded = true;
            }
            nestedObj.children = this.getChildren(parent, data);
            tree.push(nestedObj);
        }
        console.log(tree);
        return tree;
    }
    getChildren(parent, data) {
        const children = data.filter((d) => d.parent === parent.id);
        const childs = [];
        if (children.length === 0) {
            return [];
        }
        for (const child of children) {
            child.level = parent.level + 1;
            let childObj = {};
            childObj = { ...child, children: [] };
            childObj.level = parent.level + 1;
            if (child.visible === true) {
                childObj.visible = child.visible;
            }
            else if (child.visible === false) {
                childObj.visible = false;
            }
            else {
                childObj.visible = true;
            }
            if (child.expanded !== undefined) {
                childObj.expanded = child.expanded;
            }
            else {
                childObj.expanded = true;
            }
            childObj.children = this.getChildren(child, data);
            childs.push(childObj);
        }
        return childs;
    }
    update() {
        // this.gantt.canvas.
        this.createTree(true);
    }
}

class DateLine {
    constructor(svg, options, date, gantt) {
        this.options = options;
        this.dateLine = date;
        this.svg = svg;
        this.gantt = gantt;
        this.SVGLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.minDate = this.gantt.minDate;
        this.maxDate = this.gantt.maxDate;
        this.maxValue = this.gantt.maxValue;
        this.minValue = this.gantt.minValue;
        this.xpos = scaleX(this.dateLine, this.minDate, this.maxDate, this.svg.clientWidth);
    }
    draw() {
        this.SVGLine.setAttribute('stroke', 'blue');
        this.SVGLine.setAttribute('stroke-width', "3");
        this.SVGLine.setAttribute('x1', this.xpos.toString());
        this.SVGLine.setAttribute('x2', this.xpos.toString());
        this.SVGLine.setAttribute('y1', "0");
        this.SVGLine.setAttribute('y2', this.svg.clientHeight.toString());
        this.svg.appendChild(this.SVGLine);
        this.SVGLine.addEventListener('mouseover', (event) => {
            this.SVGLine.setAttribute('stroke', 'red');
        });
        this.SVGLine.addEventListener('mouseout', (event) => {
            this.SVGLine.setAttribute('stroke', 'blue');
        });
    }
    update(date) {
        this.dateLine = date;
        this.xpos = scaleX(this.dateLine, this.minDate, this.maxDate, this.svg.clientWidth);
        this.draw();
    }
}

/**
 * This function draws a line given its coordinates and colour
 * @param {CanvasRenderingContext2D} ctx the canvas context
 * @param {number} startX the starting point of the line on the x axis
 * @param {number} startY the starting point of the line on the y axis
 * @param {number} endX the ending point of the line on the x axis
 * @param {number} endY the ending point of the line on the y axis
 * @param {string} color the color of the line
 */
/**
 *
 * @param {data} data the data to be processes
 * @returns an array containing the min and max date
 */
function minmax(data) {
    let max = new Date(0);
    let min = new Date(2100, 0, 1);
    data.forEach((element) => {
        if (element.end && element.end > max) {
            max = element.end;
        }
        if (element.start && element.start < min && element.start > new Date(0)) {
            min = element.start;
        }
    });
    min = new Date(min.getFullYear(), min.getMonth(), min.getDate());
    max = new Date(max.getFullYear(), max.getMonth(), max.getDate());
    return [min, max];
}
/**
 * compares two dates and returns the difference in months
 * @param {Date} firstMonth the first date of the period to compare
 * @param {Date} lastMonth the last date of the period to compare
 * @returns {number} a number representing the number of months between the two dates
 */
function monthDiff(firstMonth, lastMonth) {
    let months;
    months = (lastMonth.getFullYear() - firstMonth.getFullYear()) * 12;
    months -= firstMonth.getMonth();
    months += lastMonth.getMonth();
    return months <= 0 ? 0 : months;
}
/**
 * Compares two dates and returns the difference in days
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 */
function dayDiff(startDate, endDate) {
    const difference = endDate.getTime() - startDate.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
    return days;
}
/**
 * This function returns the number of days in a given month
 * @param year the year number
 * @param month the month number
 * @returns {number} the number of days in the given month
 */
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
/**
 * This function the symbol of a day of the week given the year, month and day
 * @param year the year number
 * @param month the month number
 * @param day day number
 * @returns {string} day symbol as single character
 */
function getDayOfWeek(year, month, day) {
    const daysOfTheWeekArr = ["M", "T", "W", "T", "F", "S", "S"];
    const dayOfTheWeekIndex = new Date(year, month, day).getDay();
    return daysOfTheWeekArr[dayOfTheWeekIndex];
}
/**
 * Create a formatted date string
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {string} a formatted date string
 */
function createFormattedDateFromStr(year, month, day) {
    let monthStr = month.toString();
    let dayStr = day.toString();
    if (monthStr.length === 1) {
        monthStr = `0${monthStr}`;
    }
    if (dayStr.length === 1) {
        dayStr = `0${dayStr}`;
    }
    return `${year}-${monthStr}-${dayStr}`;
}
/**
 * Formats a date object to a string
 * @param {Date}date the date to be formatted
 * @returns {string} a formatted date string
 */
function createFormattedDateFromDate(date) {
    let monthStr = (date.getMonth() + 1).toString();
    let dayStr = date.getDate().toString();
    if (monthStr.length === 1) {
        monthStr = `0${monthStr}`;
    }
    if (dayStr.length === 1) {
        dayStr = `0${dayStr}`;
    }
    return `${date.getFullYear()}-${monthStr}-${dayStr}`;
}
/**
 * Adds number of days to a date and return new date
 * @param date the original date
 * @param days number of days to be added
 * @returns {Date} the new date
 */
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

class TableRow {
    constructor(ctx, gantt, data, options, rowIndex, columns) {
        this.columns = [];
        this.context = ctx;
        // this.nestedData = data;
        this.x = 0;
        this.cells = [];
        this.options = options;
        this.width = options.table.width;
        this.height = this.options.rowHeight;
        this.rowCounter = rowIndex;
        this.heilighted = false;
        this.y = this.options.rowHeight * this.rowCounter;
        this.gantt = gantt;
        this.data = data;
        this.columns = columns;
        this.color = "rgba(255,255,255,0)";
        this.drawgrid();
        this.drawBar();
    }
    createTaskDurationEl(taskDuration, startCell) {
        this.gantt.gridDiv.querySelector(".gantt-time-period-cell-container");
        const taskDurationEl = document.createElement("div");
        taskDurationEl.classList.add("taskDuration");
        taskDurationEl.id = this.data.id;
        const days = dayDiff(this.data.start, this.data.end);
        taskDurationEl.style.width = `calc(${days} * 100%)`;
        // append at start pos
        startCell.appendChild(taskDurationEl);
        return days;
    }
    drawBar() {
        const dateStr = createFormattedDateFromDate(this.data.start);
        // find gantt-time-period-cell start position
        const startCell = this.gantt.gridDiv.querySelector(`div[data-task="${this.data.id}"][data-date="${dateStr}"]`);
        console.log("Drawing bar", this.data, startCell);
        if (startCell) {
            let duration = dayDiff(this.data.start, this.data.end);
            // taskDuration bar is a child of start date position of specific task
            this.createTaskDurationEl(duration, startCell);
        }
    }
    draw() {
        // this.drawBar();
        // this.cells = [];
        // drawBar(this.context, this.x, this.y, this.width, this.height, this.color);
        // if (!this.options.timeLineHeight) {
        //   this.options.timeLineHeight = 120;
        // }
        // if (!this.options.rowHeight) {
        //   this.options.rowHeight = 120;
        // }
        // let y = this.options.rowHeight * this.rowCounter;
        // let hasChilds: boolean = false;
        // if ((this.data.children as nestedData[]).length > 0) {
        //   hasChilds = true;
        // }
        // for (let colidx = 0; colidx < this.columns.length; colidx++) {
        //   let cell = new RowCell(this, colidx, this.data);
        //   this.cells.push(cell);
        // }
        // drawLine(
        //   this.context,
        //   this.x,
        //   this.y,
        //   this.x + this.width,
        //   this.y,
        //   "black"
        // );
    }
    drawgrid() {
        let startMonth = new Date(this.gantt.minDate);
        let numMonths = monthDiff(this.gantt.minDate, this.gantt.maxDate);
        const dayElContainer = document.createElement("div");
        dayElContainer.className = "gantt-time-period-cell-container";
        dayElContainer.style.gridTemplateColumns = `repeat(${numMonths}, 1fr)`;
        this.gantt.gridDiv.appendChild(dayElContainer);
        console.log("Data in TableRow", this.data);
        let task = this.data;
        let month = new Date(startMonth);
        for (let i = 0; i < numMonths; i++) {
            const timePeriodEl = document.createElement("div");
            timePeriodEl.className = "gantt-time-period";
            dayElContainer.appendChild(timePeriodEl);
            const currYear = month.getFullYear();
            const currMonth = month.getMonth() + 1;
            const numDays = getDaysInMonth(currYear, currMonth);
            for (let i = 1; i <= numDays; i++) {
                let dayEl = document.createElement("div");
                dayEl.className = "gantt-time-period-cell";
                // color weekend cells differently
                const dayOfTheWeek = getDayOfWeek(currYear, currMonth - 1, i - 1);
                if (dayOfTheWeek === "S") {
                    dayEl.style.backgroundColor = "#f7f7f7";
                }
                // add task and date data attributes
                const formattedDate = createFormattedDateFromStr(currYear, currMonth, i);
                dayEl.dataset.task = task.id;
                dayEl.dataset.date = formattedDate;
                timePeriodEl.appendChild(dayEl);
            }
            month.setMonth(month.getMonth() + 1);
        }
    }
    collision(x, y) {
        // if (
        //   x >= this.x &&
        //   x <= this.x + this.width &&
        //   y >= this.y &&
        //   y <= this.y + this.height
        // ) {
        //   if (!this.heilighted) {
        //     this.color = "rgba(173,216,230,0.1)";
        //     this.draw();
        //     this.heilighted = true;
        //   }
        //   return true;
        // } else {
        //   this.color = "rgba(255,255,255,1)";
        //   this.draw();
        //   this.heilighted = false;
        //   return false;
        // }
    }
    update() { }
}

class EventEmitter {
    constructor() {
        this.callbacks = {};
        this.callbacks = {};
        this.callbacks.base = {};
    }
    on(_names, callback) {
        // Errors
        if (typeof _names === "undefined" || _names === "") {
            console.warn("wrong names");
            return false;
        }
        if (typeof callback === "undefined") {
            console.warn("wrong callback");
            return false;
        }
        // Resolve names
        const names = this.resolveNames(_names);
        // Each name
        names.forEach((_name) => {
            // Resolve name
            const name = this.resolveName(_name);
            // Create namespace if not exist
            if (!(this.callbacks[name.namespace] instanceof Object))
                this.callbacks[name.namespace] = {};
            // Create callback if not exist
            if (!(this.callbacks[name.namespace][name.value] instanceof Array))
                this.callbacks[name.namespace][name.value] = [];
            // Add callback
            this.callbacks[name.namespace][name.value].push(callback);
        });
        return this;
    }
    off(_names) {
        // Errors
        if (typeof _names === "undefined" || _names === "") {
            console.warn("wrong name");
            return false;
        }
        // Resolve names
        const names = this.resolveNames(_names);
        // Each name
        names.forEach((_name) => {
            // Resolve name
            const name = this.resolveName(_name);
            // Remove namespace
            if (name.namespace !== "base" && name.value === "") {
                delete this.callbacks[name.namespace];
            }
            // Remove specific callback in namespace
            else {
                // Default
                if (name.namespace === "base") {
                    // Try to remove from each namespace
                    for (const namespace in this.callbacks) {
                        if (this.callbacks[namespace] instanceof Object &&
                            this.callbacks[namespace][name.value] instanceof Array) {
                            delete this.callbacks[namespace][name.value];
                            // Remove namespace if empty
                            if (Object.keys(this.callbacks[namespace]).length === 0)
                                delete this.callbacks[namespace];
                        }
                    }
                }
                // Specified namespace
                else if (this.callbacks[name.namespace] instanceof Object &&
                    this.callbacks[name.namespace][name.value] instanceof Array) {
                    delete this.callbacks[name.namespace][name.value];
                    // Remove namespace if empty
                    if (Object.keys(this.callbacks[name.namespace]).length === 0)
                        delete this.callbacks[name.namespace];
                }
            }
        });
        return this;
    }
    trigger(_name, _args) {
        // Errors
        if (typeof _name === "undefined" || _name === "") {
            console.warn("wrong name");
            return false;
        }
        let finalResult = null;
        // Default args
        const args = !(_args instanceof Array) ? [] : _args;
        // Resolve names (should on have one event)
        let nameArray = this.resolveNames(_name);
        // Resolve name
        let name = this.resolveName(nameArray[0]);
        // Default namespace
        if (name.namespace === "base") {
            // Try to find callback in each namespace
            for (const namespace in this.callbacks) {
                if (this.callbacks[namespace] instanceof Object &&
                    this.callbacks[namespace][name.value] instanceof Array) {
                    this.callbacks[namespace][name.value].forEach((callback) => {
                        callback.apply(this, args);
                    });
                }
            }
        }
        // Specified namespace
        else if (this.callbacks[name.namespace] instanceof Object) {
            if (name.value === "") {
                console.warn("wrong name");
                return this;
            }
            this.callbacks[name.namespace][name.value].forEach((callback) => {
                callback.apply(this, args);
            });
        }
        return finalResult;
    }
    resolveNames(_names) {
        let names = _names;
        names = names.replace(/[^a-zA-Z0-9 ,/.]/g, "");
        names = names.replace(/[,/]+/g, " ");
        names = names.split(" ");
        return names;
    }
    resolveName(name) {
        const newName = {};
        const parts = name.split(".");
        newName.original = name;
        newName.value = parts[0];
        newName.namespace = "base"; // Base namespace
        // Specified namespace
        if (parts.length > 1 && parts[1] !== "") {
            newName.namespace = parts[1];
        }
        return newName;
    }
}

class Table extends EventEmitter {
    constructor(context, color, hoverColor, fontColor, columns, options, gantt) {
        super();
        this.nextUntil = function (elem, elements, filter) {
            var siblings = [];
            elem = elem.nextElementSibling;
            while (elem) {
                if (elements.includes(elem))
                    break;
                if (filter && !elem.matches(filter)) {
                    elem = elem.nextElementSibling;
                    continue;
                }
                siblings.push(elem);
                elem = elem.nextElementSibling;
            }
            return siblings;
        };
        this.color = color;
        this.gantt = gantt;
        this.fontColor = fontColor;
        this.context = context;
        this.options = options;
        this.hoverColor = hoverColor;
        this.rowCounter = 0;
        this.columns = columns;
        this.tableDOM = document.createElement("table");
        this.tableDOM.style.whiteSpace = "nowrap";
        // this.tableDOM.style.textAlign = "center";
        this.tableDOM.style.position = "relative";
        this.tableDOM.style.borderCollapse = "collapse";
        this.tableDOM.classList.add("disable-select");
        this.heading = document.createElement("thead");
        this.tableBody = document.createElement("tbody");
        this.container = this.gantt.internalTableDiv;
    }
    drawHeadings(update = false) {
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
                let x;
                let w;
                let intW;
                const int = document.getElementById("gantt_canvas__chart__table__internal");
                const mouseMoveHandler = (event) => {
                    // Determine how far the mouse has been moved
                    const dx = event.clientX - x;
                    // Update the width of column
                    int.style.width = intW + dx + "px";
                    col.style.width = `${w + dx}px`;
                };
                const mouseDownHandler = (e) => {
                    x = e.clientX;
                    // Calculate the current width of column
                    const styles = window.getComputedStyle(col);
                    w = parseInt(styles.width, 10);
                    intW = parseInt(int.style.width, 10);
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
    drawRow(data, update = false) {
        if (data.children.length > 0) {
            if (data.expanded && data.expanded === true) {
                data.expanded = true;
            }
            else if (data.expanded === undefined) {
                data.expanded = true;
            }
            else {
                data.expanded = false;
            }
        }
        this.createLeaf(data, update);
        if (data.children.length > 0) {
            data.children.sort((a, b) => {
                return a.children.length - b.children.length;
            });
            data.children.forEach((child) => {
                this.createBranch(child, update);
            });
        }
        this.initEvents();
    }
    createBranch(data, update = false) {
        this.createLeaf(data, update);
        data.children.sort((a, b) => {
            return a.children.length - b.children.length;
        });
        if (data.expanded && data.expanded === true) {
            for (let row of data.children) {
                if (row.children.length === 0) {
                    this.createLeaf(row, update);
                }
                else {
                    this.createBranch(row, update);
                }
            }
        }
    }
    createLeaf(data, update = false) {
        if (data.visible === true) {
            new TableRow(this.context, this.gantt, data, this.options, this.rowCounter, this.columns);
        }
        if (update === true) {
            this.rowCounter++;
            return;
        }
        if (data.visible && data.visible === true) {
            const row = document.createElement("tr");
            row.id = data.id;
            row.style.height = `${this.options.rowHeight}px`;
            row.style.maxHeight = `${this.options.rowHeight}px`;
            row.classList.add(`level${data.level}`);
            row.classList.add("table-collapse");
            row.setAttribute("data-depth", data.level.toString());
            row.id = `${data.id.toString()}`;
            // row.setAttribute("data", data);
            let toggle;
            for (let colidx = 0; colidx < this.columns.length; colidx++) {
                const col = document.createElement("td");
                col.style.width = `${this.options.table.width / this.columns.length}px`;
                col.style.height = `${this.options.rowHeight}px`;
                col.style.maxHeight = `${this.options.rowHeight}px`;
                col.style.margin = "0px";
                col.style.padding = "0px";
                col.style.border = "0px";
                if (data[this.columns[colidx]] instanceof Date) {
                    col.innerHTML = `${data[this.columns[colidx]].toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "2-digit",
                        year: "numeric",
                    })}`;
                }
                else {
                    col.innerHTML = `${data[this.columns[colidx]]}`;
                }
                if (data.children.length === 0 && data.hasChildren === true) {
                    let childs = this.gantt.options.data.filter((d) => d.parent === data.id);
                    if (childs.length > 0) {
                        data.hasChildren = true;
                    }
                    else {
                        data.hasChildren = false;
                    }
                }
                if (colidx === 0) {
                    col.style.width = `${this.options.table.width / this.columns.length -
                        (data.level + 1) * 10}px`;
                    if (data.children.length > 0 || data.hasChildren === true) {
                        toggle = document.createElement("span");
                        row.classList.add("branch");
                        toggle.id = `gantt__span__${data.id.toString()}`;
                        if (data.expanded && data.expanded === true) {
                            toggle.classList.add("toggle");
                        }
                        else {
                            toggle.classList.add("expanded");
                        }
                        toggle.classList.add("table-collapse");
                        col.insertBefore(toggle, col.firstChild);
                    }
                    let dataLevel;
                    if (data.children.length === 0) {
                        dataLevel = data.level - 1;
                    }
                    else {
                        dataLevel = data.level;
                    }
                    for (let level = dataLevel; level >= 0; level--) {
                        const spacer = document.createElement("div");
                        spacer.classList.add("branch");
                        spacer.classList.add(`level${level}`);
                        spacer.style.height = "100%";
                        spacer.style.margin = "0px";
                        spacer.style.display = "inline-block";
                        spacer.style.padding = "0px";
                        spacer.style.width = "10px";
                        spacer.style.minWidth = "10px";
                        col.insertBefore(spacer, col.firstChild);
                    }
                }
                else {
                    col.style.maxWidth = "0px";
                    col.style.overflow = "hidden";
                    col.style.textOverflow = "ellipsis";
                    col.style.whiteSpace = "nowrap";
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
            row.addEventListener("click", (e) => {
                this.trigger("taskClicked", [data]);
            });
            this.rowCounter++;
        }
    }
    addEvents(toggle) {
        const tr = toggle.closest("tr");
        const parent_id = tr.id;
        const childs = this.findChildren(tr);
        // if element has class toggle then remove it and collapse
        if (toggle.classList.contains("toggle")) {
            toggle.classList.remove("toggle");
            toggle.classList.add("expanded");
            this.setInvisible(childs);
            this.gantt.options.data.filter((d) => d.id == parent_id)[0].expanded =
                false;
            this.gantt.options.data.filter((d) => d.id == parent_id)[0].hasChildren =
                true;
            this.gantt.updateGantt();
        }
        else if (toggle.classList.contains("expanded")) {
            toggle.classList.remove("expanded");
            toggle.classList.add("toggle");
            let current = this.gantt.options.data.filter((d) => d.id == parent_id)[0];
            this.getAllChilds(current);
            this.setVisible(childs);
            // childss.forEach((child) => {
            //   child.visible = true;
            //   let childChildren = this.gantt.options.data.filter(
            //     (d) => d.parent == child.id
            //   );
            //   if (childChildren.length > 0) {
            //     child.hasChildren = true;
            //   } else {
            //     child.hasChildren = false;
            //   }
            // });
            // this.gantt.options.data.filter((d) => d.id == parent_id)[0].expanded =
            //   true;
            // this.gantt.options.data.filter((d) => d.id == parent_id)[0].hasChildren =
            //   true;
            this.gantt.updateGantt();
        }
    }
    setInvisible(childs) {
        for (let child of childs) {
            let child_id = child.id;
            // this.gantt.options.data.filter((d) => d.id == child_id)[0].visible =
            //   false;
            let ganttGrid = this.gantt.gridDiv.querySelector(`div[data-task="${child_id}"]`).parentElement.parentElement;
            this.gantt.gridDiv.querySelector(`div[data-task="${child_id}"]`);
            console.log("ganttGrid", ganttGrid);
            child.style.display = "none";
            ganttGrid.style.display = "none";
            // taskDuration.parentElement.style.display = "none";
            let children = this.findChildren(child);
            if (children && Array.isArray(children) && children.length > 0)
                this.setInvisible(children);
        }
    }
    setVisible(childs) {
        for (let child of childs) {
            let child_id = child.id;
            let ganttGrid = this.gantt.gridDiv.querySelector(`div[data-task="${child_id}"]`).parentElement.parentElement;
            this.gantt.gridDiv.querySelector(`div[data-task="${child_id}"]`);
            // this.gantt.options.data.filter((d) => d.id == child_id)[0].visible = true;
            child.style.display = "table-row";
            ganttGrid.style.display = "grid";
            // taskDuration.parentElement.style.display = "table-row";
            let children = this.findChildren(child);
            if (children && Array.isArray(children) && children.length > 0)
                this.setVisible(children);
        }
    }
    getAllChilds(data) {
        let children = [];
        let childs = this.gantt.options.data.filter((d) => d.parent === data.id);
        if (childs.length > 0) {
            childs.forEach((child) => {
                children.push(child);
                children = children.concat(this.getAllChilds(child));
            });
        }
        return children;
    }
    draw(update = false) {
        if (update === true) {
            this.rowCounter = 0;
        }
        // this.rowCounter = 0;
        this.drawHeadings(update);
        this.tableDOM.getElementsByTagName("td");
    }
    initEvents() {
        document.getElementsByTagName("span");
        // for (let el of Array.from(toggles)) {
        // }
    }
    findChildren(tr) {
        var depth = tr.dataset.depth;
        var elements = [...Array.from(document.querySelectorAll("tr"))].filter(function (element) {
            return element.dataset.depth <= depth;
        });
        var next = this.nextUntil(tr, elements, null);
        return next;
    }
    findByKey(obj, keyToFind) {
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
    findDataChildren(tasks) {
        for (let task of tasks) {
            // task.visible = false;
            if (task.children.length > 0) {
                this.findDataChildren(task.children);
            }
        }
    }
    removeAllChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    update() { }
}

class TimeLine {
    constructor(container, options, gantt) {
        this.options = options;
        this.container = container;
        this.gantt = gantt;
        this.minDate = this.gantt.minDate;
        this.maxDate = this.gantt.maxDate;
        this.maxValue = this.gantt.maxValue;
        this.minValue = this.gantt.minValue;
        this.grid = document.createElement("div");
        this.yearEl = document.createElement("div");
        this.yearEl.className = "gantt__chart__timeline_container_year_container";
        this.container.appendChild(this.yearEl);
        this.grid.className = "gantt__chart__timeline_container";
        this.container.appendChild(this.grid);
    }
    draw() {
        let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear() + 1;
        let noOfMonths = monthDiff(this.minDate, this.maxDate);
        dayDiff(this.minDate, this.maxDate) + 1;
        let month = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1);
        // let month = new Date(this.minDate);
        this.yearEl.style.gridTemplateColumns = `repeat(${noOfYears}, 1fr)`;
        this.grid.style.gridTemplateColumns = `repeat(${noOfMonths}, 1fr)`;
        this.createYear(month, noOfYears);
        month = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1);
        this.createMonth(month, noOfMonths);
        month = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1);
        for (let m = 0; m < noOfMonths; m++) {
            let monthEl = document.createElement("div");
            monthEl.className = "gantt__chart__timeline_container_month";
            this.grid.append(monthEl);
            let numDays = getDaysInMonth(month.getFullYear(), month.getMonth() + 1);
            for (let i = 0; i < numDays; i++) {
                let day = document.createElement("span");
                let dayoftheMonth;
                dayoftheMonth = addDays(month, i);
                let dayVal = dayoftheMonth.getDate();
                day.className = "gantt__chart__timeline_container_day";
                day.innerHTML = dayVal.toString();
                monthEl.append(day);
            }
            month.setMonth(month.getMonth() + 1);
        }
    }
    createYear(month, noOfYears) {
        for (let y = 0; y < noOfYears; y++) {
            let yearEl = document.createElement("div");
            yearEl.className = "gantt__chart__timeline_container_year";
            let yearSpan = document.createElement("span");
            yearSpan.style.height = "100%";
            yearSpan.style.width = "100%";
            yearSpan.style.display = "flex";
            yearSpan.style.justifyContent = "center";
            yearSpan.style.alignItems = "center";
            yearSpan.innerHTML = month.getFullYear().toString();
            yearEl.append(yearSpan);
            this.yearEl.append(yearEl);
            month.setFullYear(month.getFullYear() + 1);
        }
    }
    createMonth(month, noOfMonths) {
        for (let m = 0; m < noOfMonths; m++) {
            let monthEl = document.createElement("div");
            monthEl.className = "gantt__chart__timeline_container_month";
            let monthSpan = document.createElement("span");
            monthSpan.style.height = "100%";
            monthSpan.style.width = "100%";
            monthSpan.style.display = "flex";
            monthSpan.style.justifyContent = "center";
            monthSpan.style.alignItems = "center";
            monthSpan.innerHTML = months[month.getMonth()];
            monthEl.append(monthSpan);
            this.grid.append(monthEl);
            month.setMonth(month.getMonth() + 1);
        }
    }
    update(date) { }
}

class GanttChart extends EventEmitter {
    constructor(options) {
        super();
        this.splitterX = 0;
        this.splitterY = 0;
        this.bars = [];
        this.splitterMouseDownHandler = (e) => {
            this.splitterX = e.clientX;
            this.splitterY = e.clientY;
            this.tableWidth = this.tablediv.getBoundingClientRect().width;
            // Attach the listeners to `document`
            document.addEventListener("mousemove", this.splitterMouseMoveHandler);
            document.addEventListener("mouseup", this.splitterMouseUpHandler);
        };
        this.splitterMouseMoveHandler = (e) => {
            const dx = e.clientX - this.splitterX;
            const newLeftWidth = ((this.tableWidth + dx) * 100) /
                this.splitter.parentNode.getBoundingClientRect().width;
            this.tablediv.style.width = `${newLeftWidth}%`;
            this.tablediv.children[0].style.width = `${this.splitter.offsetLeft}px`;
            this.chartDiv.style.width = `${95 - newLeftWidth}%`;
        };
        this.splitterMouseUpHandler = (e) => {
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
        if (this.options.timeLineHeight) {
            this.timeLineHeight = this.options.timeLineHeight;
        }
        else {
            this.timeLineHeight = 120;
            this.options.timeLineHeight = this.timeLineHeight;
        }
        this.svg.setAttribute("width", (this.options.timeLineColumnWidth * this.duration).toString());
        this.dateLine = new DateLine(this.svg, this.options, this.minDate, this);
        // this.timeLine = new TimeLine(this.ctx, this.canvas, this.options, this);
        this.tasks = [];
        this.initEvents();
    }
    initStyle() {
        let styleEl = document.createElement("style");
        styleEl.appendChild(document.createTextNode(`#gantt_canvas__chart__::-webkit-scrollbar {width:10px;} 
         #gantt_canvas__chart__::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey; border-radius:10px;}
         #gantt_canvas__chart__::-webkit-scrollbar-thumb{background:lightgray; border-radius:10px}
         #gantt_canvas__chart__::-webkit-scrollbar-thumb:hover{background:gray;}

         #gantt_canvas__chart__table::-webkit-scrollbar {width:10px;} 
         #gantt_canvas__chart__table::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey; border-radius:10px;}
         #gantt_canvas__chart__table::-webkit-scrollbar-thumb{background:lightgray; border-radius:10px}
         #gantt_canvas__chart__table::-webkit-scrollbar-thumb:hover{background:gray;}
         #gantt__canvas__chart__timeline{
          z-index: 999;
         }
         .gantt__chart__timeline_container_year_container
          {
            display:grid;
          }
        .gantt__chart__timeline_container_year{
          display:grid;
          background-color: ${this.options.timeLineBackgroundColor};
          grid-auto-flow: column;
          grid-auto-columns: minmax(${this.options.timeLineColumnWidth}px, 1fr);
          height: ${this.options.timeLineHeight / 3}px;
          border: 1px solid black;
        }
        .gantt__chart__timeline_container_month{
          display:grid;
          background-color: ${this.options.timeLineBackgroundColor};
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
          display:flex;
          width:100%;
          height:100%;
          border: 1px solid black;
          grid-auto-flow: column;
          grid-template-columns: minmax(${this.options.timeLineColumnWidth}px, 1fr);
          justify-content:center;
          align-items:center;
        }

        .gantt-time-period {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(${this.options.timeLineColumnWidth}px, 1fr);
        text-align: center;
        height: ${this.options.rowHeight}px;
        }

        .gantt-time-period span {
          margin: auto;
        }

        .gantt-time-period-cell-container {
          grid-column: 1/-1;
          display: grid;
        }

        .gantt-time-period-cell {
          position: relative;
          outline: 0.5px solid "lightgray";
        }

        .taskDuration{
          position: absolute;
          height: ${this.options.rowHeight / 2}px;
          margin-top: ${this.options.rowHeight / 4}px;
          z-index: 1;
          background: ${this.options.barColor};
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
          cursor: move;

        }

        .taskDuration:focus {
          outline: 1px solid black;
        }

        .taskDuration:hover {
          background: ${this.options.barColorHover};
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
        `));
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
        this.splitter.style.backgroundColor = "darkgray";
        this.timelineDiv = document.createElement("div");
        this.timelineDiv.id = "gantt__canvas__chart__timeline";
        this.timelineDiv.style.height = this.options.timeLineHeight + "px";
        this.timelineDiv.style.width =
            (this.options.timeLineColumnWidth * this.duration).toString() + "px";
        this.timelineDiv.style.position = "sticky";
        this.timelineDiv.style.top = "0";
        this.gridDiv = document.createElement("div");
        this.gridDiv.id = "gantt__canvas__chart__grid";
        // this.gridDiv.style.height =
        //   (this.options.rowHeight * this.options.data.length).toString() + "px";
        this.gridDiv.style.width =
            (this.options.timeLineColumnWidth * this.duration).toString() + "px";
        this.barsDiv = document.createElement("div");
        this.barsDiv.id = "gantt__canvas__chart__bars";
        // this.barsDiv.appendChild(this.svg);
        this.chartDiv.setAttribute("id", "gantt_canvas__chart__");
        this.chartDiv.appendChild(this.timelineDiv);
        this.chartDiv.appendChild(this.gridDiv);
        // this.chartDiv.style.flex = "1 1 auto";
        this.chartDiv.appendChild(this.barsDiv);
        this.chartDiv.style.display = "inline-block";
        this.chartDiv.style.height = "100%";
        const contWidth = this.container.clientWidth - this.options.table.width - 50;
        this.chartDiv.style.overflow = "auto";
        this.chartDiv.style.width = `${contWidth}px`;
        this.chartDiv.style.margin = "0px";
        this.container.appendChild(this.tablediv);
        this.container.appendChild(this.splitter);
        this.container.appendChild(this.chartDiv);
        this.svg.setAttribute("height", (this.options.rowHeight * this.options.data.length).toString());
        if (this.options.table.width) {
            this.tableWidth = this.options.table.width;
        }
        else {
            this.tableWidth = 400;
            this.options.table.width = this.tableWidth;
        }
        if (this.options.dataDate) {
            this.dataDate = this.options.dataDate;
        }
        else {
            this.dataDate = new Date();
            this.options.dataDate = this.dataDate;
        }
        for (let data of this.options.data) {
            data.visible = true;
        }
        this.splitter.addEventListener("mousedown", this.splitterMouseDownHandler);
    }
    /**
     * @description - initialize events
     */
    initEvents() {
        /**
         * Events to synchronise scroll bars of table and canvas
         */
        this.tablediv.addEventListener("scroll", (event) => {
            this.chartDiv.scrollTop = event.target.scrollTop;
        });
        this.chartDiv.addEventListener("scroll", (event) => {
            this.tablediv.scrollTop = event.target.scrollTop;
        });
    }
    drawGridLines() { }
    drawDateLine() {
        this.dateLine = new DateLine(this.svg, this.options, this.dataDate, this);
        this.dateLine.draw();
    }
    drawTimeLine() {
        this.timeLine = new TimeLine(this.timelineDiv, this.options, this);
        this.timeLine.draw();
    }
    drawTable(update = false) {
        if (update !== true) {
            this.table = new Table(this.tableCtx, this.options.colors[0], this.options.barColorHover, "black", ["id", "name", "start", "end"], this.options, this);
        }
        this.table.draw(update);
    }
    draw() {
        this.drawGridLines();
        this.drawTable();
        this.drawTimeLine();
        this.drawDateLine();
        this.tasksData = new Tasks(this.options.data, this);
        for (let bar of this.bars) {
            bar.on("taskClicked", (event) => {
                this.trigger("taskClicked", [event]);
            });
        }
        this.table.on("taskClicked", (event) => {
            this.trigger("taskClicked", [event]);
        });
    }
    update() {
        const contWidth = this.container.clientWidth -
            this.tablediv.clientWidth -
            this.splitter.clientWidth -
            50;
        this.chartDiv.style.overflow = "auto";
        this.chartDiv.style.width = `${contWidth}px`;
        this.chartDiv.style.margin = "0px";
        let duration = dayDiff(this.minDate, this.maxDate) + 1;
        this.svg.setAttribute("width", (this.options.timeLineColumnWidth * duration).toString());
        // this.ctx.clearRect(0, 0, this.svg.clientWidth, this.svg.clientHeight);
        this.svg.innerHTML = "";
        this.tasks = [];
        this.dateLine = null;
        // this.drawGridLines();
        this.draw();
    }
    updateGantt() {
        //   const current_scroll = this.tablediv.scrollTop;
        //   this.svg.innerHTML = "";
        //   const contWidth =
        //     this.container.clientWidth -
        //     this.tablediv.clientWidth -
        //     this.splitter.clientWidth -
        //     50;
        //   this.chartDiv.style.overflow = "auto";
        //   this.chartDiv.style.width = `${contWidth}px`;
        //   this.chartDiv.style.margin = "0px";
        //   this.visibleTasks = [];
        //   for (let task of this.options.data) {
        //     if (task.visible !== false) {
        //       this.visibleTasks.push(task);
        //     }
        //   }
        //   this.svg.setAttribute(
        //     "height",
        //     (this.options.rowHeight * this.visibleTasks.length).toString()
        //   );
        //   let maxmin = minmax(this.visibleTasks);
        //   this.maxValue = maxmin[1].getTime();
        //   this.minValue = maxmin[0].getTime();
        //   this.minDate = addDays(maxmin[0], -7);
        //   this.maxDate = addDays(maxmin[1], 31);
        //   this.tasks = [];
        //   this.dateLine = null;
        //   this.svg.setAttribute(
        //     "width",
        //     (
        //       (dayDiff(this.minDate, this.maxDate) + 1) *
        //       this.options.timeLineColumnWidth
        //     ).toString()
        //   );
        //   // this.drawGridLines();
        //   this.drawDateLine();
        //   this.drawTimeLine();
        //   this.tasksData = new Tasks(this.options.data, this);
        //   this.tablediv.scrollTop = current_scroll;
        //   this.chartDiv.scrollTop = current_scroll;
    }
}

let data1 = scheduleData;
let gantt;

function drawGantt() {
  let container = document.getElementById("Chart");
  // chartCanvas.width = chartCanvas.parentElement.clientWidth;
  // chartCanvas.height = 500;
  let options = {
    container: container,
    showBaseline: true,
    dataDate: new Date(2022, 0, 15),
    gridScale: 5,
    gridColor: "black",
    data: data1,
    titleOptions: "Music",
    rowHeight: 30,
    timeLineColumnWidth: 20,
    timeLineBackgroundColor: "rgb(245, 245, 245)",
    timeLineHeight: 120,
    tableWidth: 400,
    table: {
      width: 400,
    },
    barColor: "lightgreen",
    barColorHover: "red",
    colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
  };
  gantt = new GanttChart(options);
  gantt.draw();
  gantt.on("taskClicked", (task) => {
    console.log("Index.js Even", task);
  });
}

drawGantt();

let btnZoomIn = document.getElementById("zoom-in");
btnZoomIn.addEventListener("click", () => {
  gantt.options.timeLineColumnWidth += 5;
  gantt.update();
});

let btnZoomOut = document.getElementById("zoom-out");
btnZoomOut.addEventListener("click", () => {
  if (gantt.options.timeLineColumnWidth > 5) {
    gantt.options.timeLineColumnWidth -= 5;
    gantt.update();
  }
});

let btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", play);

let timer = undefined;

function play() {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
    btnPlay.innerHTML = ">";
    return;
  }
  let counter = 0;
  btnPlay.innerHTML = "||";
  timer = setInterval(() => {
    if (timer && ++counter >= 100) {
      clearInterval(timer);
    }
    gantt.dataDate = addDays(gantt.dataDate, 1);
    gantt.options.dataDate = addDays(gantt.options.dataDate, counter);
    gantt.update();
  }, 1000);
}
