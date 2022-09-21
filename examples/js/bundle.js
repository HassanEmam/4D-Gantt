const scheduleData = [
  {
    id: 1,
    name: "Task 1",
    start: new Date(2022, 3, 1),
    baselineStart: new Date(2022, 2, 20),
    end: new Date(2022, 3, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: null,
  },
  {
    id: 2,
    name: "Task 2",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 6),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 20),
    parent: 1,
  },
  {
    id: 3,
    name: "Task 3",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 1,
  },
  {
    id: 4,
    name: "Task 4",
    start: new Date(2022, 0, 1),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 2,
  },
  {
    id: 5,
    name: "Task 5",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 2,
  },
  {
    id: 6,
    name: "Task 6",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 2,
  },
  {
    id: 7,
    name: "Task 7",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 3,
  },
  {
    id: 8,
    name: "Task 8 Task 8 Task 8 Task 8 Task 8 Task 8 Task 8 Task 8",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 1,
  },
  {
    id: 9,
    name: "Task 9",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 3,
  },
  {
    id: 10,
    name: "Task 10",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 2,
  },
  {
    id: 11,
    name: "Task 11",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 2,
  },
  {
    id: 12,
    name: "Task 12",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 3,
  },
  {
    id: 13,
    name: "Task 13",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),

    parent: 3,
  },
  {
    id: 14,
    name: "Task 14",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 2,
  },
  {
    id: 15,
    name: "Task 15",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 13,
  },
  {
    id: 16,
    name: "Task 16",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 13,
  },
  {
    id: 17,
    name: "Task 17",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 13,
  },
  {
    id: 18,
    name: "Task 18",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 1,
  },
  {
    id: 19,
    name: "Task 19",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 1,
  },
  {
    id: 20,
    name: "Task 20",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 1,
  },
  {
    id: 21,
    name: "Task 21",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 1,
  },
  {
    id: 23,
    name: "Task 23",
    start: new Date(2022, 0, 12),
    baselineStart: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    baselineEnd: new Date(2022, 1, 28),
    parent: 4,
  },
  {
    id: 24,
    name: "Task 24",
    start: new Date(2022, 2, 1),
    baselineStart: new Date(2022, 2, 1),
    end: new Date(2022, 2, 30),
    baselineEnd: new Date(2022, 2, 30),
    parent: 23,
  },
  {
    id: 22,
    name: "Task 22",
    start: new Date(2022, 0, 15),
    baselineStart: new Date(2022, 0, 1),
    end: new Date(2022, 0, 30),
    baselineEnd: new Date(2022, 0, 30),
    parent: 24,
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
    const date = dateToSclae.getTime();
    const scale = Math.ceil((date - min) * (width / overallDuration));
    return scale;
}

class Tasks {
    constructor(data, gantt) {
        this.data = data;
        this.gantt = gantt;
        this.nestedData = this.list_to_tree(this.data);
        this.createTree(false);
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
    constructor(ctx, canvas, options, date, gantt) {
        this.options = options;
        this.dateLine = date;
        this.canvas = canvas;
        this.ctx = ctx;
        this.gantt = gantt;
        this.minDate = this.gantt.minDate;
        this.maxDate = this.gantt.maxDate;
        this.maxValue = this.gantt.maxValue;
        this.minValue = this.gantt.minValue;
        this.xpos = scaleX(this.dateLine, this.minDate, this.maxDate, this.canvas.width);
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.xpos + this.options.timeLineColumnWidth / 2, 0);
        this.ctx.lineTo(this.xpos + this.options.timeLineColumnWidth / 2, this.canvas.height);
        this.ctx.stroke();
    }
    update(date) {
        this.dateLine = date;
        this.xpos = scaleX(this.dateLine, this.minDate, this.maxDate, this.canvas.width);
        this.draw();
    }
    collision(x, y) {
        if (this.xpos + this.options.timeLineColumnWidth / 2 - 5 <= x &&
            this.xpos + this.options.timeLineColumnWidth / 2 + 5 >= x) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 3;
            this.ctx.moveTo(this.xpos + this.options.timeLineColumnWidth / 2, 0);
            this.ctx.lineTo(this.xpos + this.options.timeLineColumnWidth / 2, this.canvas.height);
            this.ctx.stroke();
        }
        else {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "blue";
            this.ctx.lineWidth = 3;
            this.ctx.moveTo(this.xpos + this.options.timeLineColumnWidth / 2, 0);
            this.ctx.lineTo(this.xpos + this.options.timeLineColumnWidth / 2, this.canvas.height);
            this.ctx.stroke();
        }
    }
}

class RowCell {
    constructor(row, cell, data) {
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
        let x;
        if (!this.row.width) {
            this.row.width = 400;
        }
        let hasChilds = false;
        if (this.data.children.length > 0) {
            hasChilds = true;
        }
        x = this.x;
        this.row.context.fillStyle = "white";
        this.row.context.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        this.row.context.fillStyle =
            this.row.options.table.header?.fontColor || "black";
        this.row.context.textBaseline = "middle";
        this.row.context.font = `14px Arial`;
        let text;
        if (this.data[this.row.columns[this.index]] instanceof Date) {
            text = this.data[this.row.columns[this.index]]
                .toLocaleString("en-GB")
                .split(",")[0];
        }
        else {
            text = this.data[this.row.columns[this.index]].toString();
        }
        if (this.index === 0) {
            x = (this.data.level || 0) * 30 + this.index * this.width;
            if (hasChilds) {
                let addChar;
                if (this.expanded === false) {
                    addChar = "\u{229E}";
                }
                else {
                    addChar = "\u{229F}";
                }
                text = addChar + "\t\t" + text;
            }
            this.row.context.textAlign = "left";
        }
        else {
            this.row.context.textAlign = "center";
            x = x + this.width / 2;
        }
        this.row.context.fillText(text, x, this.y + this.height / 2);
        this.row.context.strokeStyle = "black";
    }
    update() { }
    collision(x, y) {
        if (x >= this.x &&
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height) {
            this.color = "rgba(173,216,230,0.1)";
            if (this.index === 0) {
                this.row.heilighted = false;
                this.expanded = !this.expanded;
                this.data.expanded = !this.data.expanded;
                // this.draw();
            }
            this.draw();
            return true;
        }
        else {
            this.color = "rgba(255,255,255,1)";
            //   this.draw();
            return false;
        }
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
function drawLine(ctx, startX, startY, endX, endY, color) {
    // ctx.globalCompositeOperation = "destination-over";
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.restore();
}
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color, text) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
    if (text) {
        // ctx.globalCompositeOperation = "source-over";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let fontSize = Math.min(12);
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = "black";
        ctx.fillText(text, upperLeftCornerX + width / 2, upperLeftCornerY + height / 2, width);
    }
    ctx.restore();
}
/**
 *
 * @param {data} data the data to be processes
 * @returns an array containing the min and max date
 */
function minmax(data) {
    let max = new Date(0);
    let min = data[0].start;
    data.forEach((element) => {
        if (element.end > max) {
            max = element.end;
        }
        if (element.start < min) {
            min = element.start;
        }
    });
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
/**
 * this function solve the issue of scrolling within a div and getting correction for mouse events
 * @param aobj the elemeent hosting the event
 * @returns
 */
function recursive_offset(aobj) {
    var currOffset = {
        x: 0,
        y: 0,
    };
    var newOffset = {
        x: 0,
        y: 0,
    };
    if (aobj !== null) {
        if (aobj.scrollLeft) {
            currOffset.x = aobj.scrollLeft;
        }
        if (aobj.scrollTop) {
            currOffset.y = aobj.scrollTop;
        }
        if (aobj.offsetLeft) {
            currOffset.x -= aobj.offsetLeft;
        }
        if (aobj.offsetTop) {
            currOffset.y -= aobj.offsetTop;
        }
        if (aobj.parentNode !== undefined) {
            newOffset = recursive_offset(aobj.parentNode);
        }
        currOffset.x = currOffset.x + newOffset.x;
        currOffset.y = currOffset.y + newOffset.y;
    }
    return currOffset;
}

class Bar {
    constructor(x, y, width, height, context, color, fontColor, name, options, gantt) {
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
    draw(color, fontColor, name) {
        drawLine(this.context, 0, this.y + this.options.rowHeight * 0.8, this.gantt.canvas.width, this.y + this.options.rowHeight * 0.8, "lightgray");
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
            this.context.globalCompositeOperation = "source-over";
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            let fontSize = Math.min(this.width / 1.5, this.height / 1.5);
            this.context.font = `${fontSize}px Arial`;
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
            this.context.fillStyle = this.fontColor;
            // this.context.fillStyle = "black";
            this.context.fillText(this.name, this.x + this.width / 2, this.y + this.height / 2);
        }
    }
    update(x, y) {
        this.draw();
        this.x = x;
        this.y = y;
    }
    collision(x, y) {
        if (x >= this.x &&
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height) {
            this.color = this.options.barColorHover;
            this.draw();
            return true;
        }
        else {
            this.color = this.options.barColor;
            this.draw();
            return false;
        }
    }
}

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
        this.drawBar();
    }
    drawBar() {
        var canvasActualWidth = this.gantt.canvas.width;
        Object.values(this.data);
        let taskData = this.data;
        if (!this.options.rowHeight) {
            this.options.rowHeight = 40;
        }
        let yOffset = this.options.rowHeight * this.rowCounter + this.options.rowHeight * 0.2;
        let xStart = scaleX(taskData.start, this.gantt.minDate, this.gantt.maxDate, canvasActualWidth);
        let xEnd = scaleX(addDays(taskData.end, 1), this.gantt.minDate, this.gantt.maxDate, canvasActualWidth);
        let barWidth = xEnd - xStart;
        if (!this.options.timeLineHeight) {
            this.options.timeLineHeight = 120;
        }
        if (this.options.showBaseline && this.options.showBaseline === true) {
            let bar = new Bar(xStart, yOffset, barWidth, this.options.rowHeight * 0.4, this.gantt.ctx, this.options.barColor, "white", taskData.name, this.options, this.gantt);
            this.gantt.tasks.push(bar);
            bar.draw();
            let blYOffset = this.options.rowHeight * this.rowCounter + this.options.rowHeight * 0.6;
            let blStart = scaleX(taskData.baselineStart, this.gantt.minDate, this.gantt.maxDate, canvasActualWidth);
            let blEnd = scaleX(addDays(taskData.baselineEnd, 1), this.gantt.minDate, this.gantt.maxDate, canvasActualWidth);
            let blWidth = blEnd - blStart;
            let blBar = new Bar(blStart, blYOffset, blWidth, this.options.rowHeight * 0.2, this.gantt.ctx, "yellow", "white", taskData.name, this.options, this.gantt);
            blBar.draw("yellow");
        }
        else {
            let bar = new Bar(xStart >= 0 ? xStart : 0, yOffset, barWidth, this.options.rowHeight * 0.6, this.gantt.ctx, this.options.barColor, "white", taskData.name, this.options, this.gantt);
            this.gantt.tasks.push(bar);
            bar.draw();
        }
        this.gantt.ctx.restore();
    }
    draw() {
        // this.drawBar();
        this.cells = [];
        drawBar(this.context, this.x, this.y, this.width, this.height, this.color);
        if (!this.options.timeLineHeight) {
            this.options.timeLineHeight = 120;
        }
        if (!this.options.rowHeight) {
            this.options.rowHeight = 120;
        }
        this.options.rowHeight * this.rowCounter;
        if (this.data.children.length > 0) ;
        for (let colidx = 0; colidx < this.columns.length; colidx++) {
            let cell = new RowCell(this, colidx, this.data);
            this.cells.push(cell);
        }
        drawLine(this.context, this.x, this.y, this.x + this.width, this.y, "black");
    }
    collision(x, y) {
        if (x >= this.x &&
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height) {
            if (!this.heilighted) {
                this.color = "rgba(173,216,230,0.1)";
                this.draw();
                this.heilighted = true;
            }
            return true;
        }
        else {
            this.color = "rgba(255,255,255,1)";
            this.draw();
            this.heilighted = false;
            return false;
        }
    }
    update() { }
}

class Table {
    constructor(context, color, hoverColor, fontColor, columns, options, gantt) {
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
        // this.tableBody.innerHTML = "";
        // this.rowCounter = 0;
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
        // else {
        //   this.createLeaf(data, update);
        // }
        this.initEvents();
    }
    createBranch(data, update = false) {
        this.createLeaf(data, update);
        data.children.sort((a, b) => {
            console.log(b.children.length, a.children.length, b.children.length - a.children.length);
            return a.children.length - b.children.length;
        });
        console.log(data.children);
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
            row.style.height = `${this.options.rowHeight}px`;
            row.style.maxHeight = `${this.options.rowHeight}px`;
            row.classList.add(`level${data.level}`);
            row.classList.add("table-collapse");
            row.setAttribute("data-depth", data.level.toString());
            row.id = `ganttTable__${data.id.toString()}`;
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
            this.rowCounter++;
        }
    }
    addEvents(toggle) {
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
        }
        else if (toggle.classList.contains("expanded")) {
            toggle.classList.remove("expanded");
            toggle.classList.add("toggle");
            let current = this.gantt.options.data.filter((d) => d.id == parent_id)[0];
            const childss = this.getAllChilds(current);
            // this.setVisible(childs);
            childss.forEach((child) => {
                child.visible = true;
                let childChildren = this.gantt.options.data.filter((d) => d.parent == child.id);
                if (childChildren.length > 0) {
                    child.hasChildren = true;
                }
                else {
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
    setInvisible(childs) {
        for (let child of childs) {
            let child_id = parseInt(child.id.toString().split("__")[1]);
            this.gantt.options.data.filter((d) => d.id == child_id)[0].visible =
                false;
            let children = this.findChildren(child);
            if (children && Array.isArray(children) && children.length > 0)
                this.setInvisible(children);
        }
    }
    setVisible(childs) {
        for (let child of childs) {
            let child_id = parseInt(child.id.toString().split("__")[1]);
            this.gantt.options.data.filter((d) => d.id == child_id)[0].visible = true;
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
    constructor(ctx, canvas, options, gantt) {
        this.options = options;
        this.canvas = canvas;
        this.ctx = ctx;
        this.gantt = gantt;
        this.minDate = this.gantt.minDate;
        this.maxDate = this.gantt.maxDate;
        this.maxValue = this.gantt.maxValue;
        this.minValue = this.gantt.minValue;
    }
    draw() {
        let noOfYears = this.maxDate.getFullYear() - this.minDate.getFullYear() + 1;
        monthDiff(this.minDate, this.maxDate);
        let noOfDays = dayDiff(this.minDate, this.maxDate) + 1;
        for (let i = 0; i < noOfDays; i++) {
            let scaledX = scaleX(addDays(this.minDate, i), this.minDate, this.maxDate, this.canvas.width);
            let date = addDays(this.minDate, i);
            let dayName = getDayOfWeek(date.getFullYear(), date.getMonth(), date.getDate() - 1);
            drawBar(this.ctx, scaledX, +(this.options.timeLineHeight * 3) / 4, this.options.timeLineColumnWidth, 30, this.options.timeLineBackgroundColor, date.getDate().toString());
            drawBar(this.ctx, scaledX, +(this.options.timeLineHeight * 2) / 4, this.options.timeLineColumnWidth, 30, this.options.timeLineBackgroundColor, dayName);
            //   this.ctx.fillText(dayName, scaledX + , 85);
            // line seperator between days
            drawLine(this.ctx, scaledX, +(this.options.timeLineHeight * 2) / 4, scaledX, this.canvas.height, "lightgray");
            // day gridline in the main chart
            drawLine(this.gantt.ctx, scaledX, 0, scaledX, this.canvas.height, "lightgray");
        }
        drawLine(this.ctx, 0, +(this.options.timeLineHeight * 2) / 4, this.canvas.width + this.options.timeLineColumnWidth, +(this.options.timeLineHeight * 2) / 4, "black");
        let offset = (this.options.timeLineHeight * 3) / 4;
        drawLine(this.ctx, 0, +offset, this.canvas.width + this.options.timeLineColumnWidth, +offset, "black");
        let date = this.minDate;
        // draw month timeline
        let maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth() + 1, 1);
        while (date <= maxDate) {
            let mnth = date.getMonth();
            let year = date.getFullYear();
            let day = date.getDate();
            let monthName = months[mnth];
            let minScale;
            if (this.minDate < date) {
                minScale = scaleX(new Date(year, mnth, 0), this.minDate, this.maxDate, this.canvas.width);
            }
            else {
                minScale = 0;
            }
            let maxScale;
            if (this.gantt.maxDate > new Date(year, mnth + 1, 1)) {
                maxScale = scaleX(new Date(year, mnth + 1, 1), this.minDate, this.maxDate, this.canvas.width);
            }
            else {
                maxScale = scaleX(addDays(this.maxDate, 1), this.minDate, this.maxDate, this.canvas.width);
            }
            drawBar(this.ctx, minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth, this.options.timeLineHeight / 4, minScale === 0
                ? maxScale
                : maxScale + this.options.timeLineColumnWidth - minScale, 30, this.options.timeLineBackgroundColor, monthName);
            mnth += 1;
            date = new Date(year, mnth, day);
            // month seperator
            drawLine(this.ctx, minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth, this.options.timeLineHeight / 4, minScale === 0 ? 0 : minScale + this.options.timeLineColumnWidth, this.canvas.height + this.options.timeLineHeight, "black");
            // month gridline in the timeline chart
            drawLine(this.ctx, maxScale, this.options.timeLineHeight / 4, maxScale, this.canvas.height + this.options.timeLineHeight, "black");
            // draw month vertical line in the main chart
            drawLine(this.gantt.ctx, maxScale, 0, maxScale, this.canvas.height + this.options.timeLineHeight, "black");
        }
        //topline above month names
        drawLine(this.ctx, 0, 0, this.canvas.width + this.options.timeLineColumnWidth, 0, "black");
        for (let i = 0; i < noOfYears; i++) {
            let fDayOfYear = new Date(this.minDate.getFullYear() + i, 0, 1);
            let lDayOfYear = new Date(this.minDate.getFullYear() + i, 11, 31);
            if (fDayOfYear < this.minDate) {
                fDayOfYear = this.minDate;
            }
            if (lDayOfYear > this.maxDate) {
                lDayOfYear = this.maxDate;
            }
            let minScale = scaleX(fDayOfYear, this.minDate, this.maxDate, this.canvas.width);
            let maxScale = scaleX(lDayOfYear, this.minDate, this.maxDate, this.canvas.width);
            drawBar(this.ctx, minScale, 0, maxScale - minScale + this.options.timeLineColumnWidth, 30, this.options.timeLineBackgroundColor, fDayOfYear.getFullYear().toString());
            //line under the year
            drawLine(this.ctx, minScale, +this.options.timeLineHeight / 4, maxScale + +this.options.timeLineColumnWidth, +this.options.timeLineHeight / 4, "black");
            // line to the left of the year
            drawLine(this.ctx, minScale, 0, minScale, this.canvas.height, "black");
            drawLine(this.ctx, maxScale + +this.options.timeLineColumnWidth, 0, maxScale + +this.options.timeLineColumnWidth, this.canvas.height, "black");
        }
    }
    update(date) { }
}

class GanttChart {
    constructor(options) {
        this.splitterX = 0;
        this.splitterY = 0;
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
        this.initStyle();
        this.options = options;
        this.rows = [];
        this.cells = [];
        this.container = options.container;
        // this.container.style.display = "flex";
        this.splitter = document.createElement("div");
        this.visibleTasks = this.options.data;
        this.canvas = document.createElement("canvas");
        // this.canvas.setAttribute("id", "gantt_canvas__chart__");
        this.tableCanvas = document.createElement("canvas");
        this.chartDiv = document.createElement("div");
        this.init();
        this.ctx = this.canvas.getContext("2d");
        this.tableCtx = this.tableCanvas.getContext("2d");
        this.colors = options.colors;
        this.titleOptions = options.titleOptions;
        let maxmin = minmax(this.options.data);
        this.maxValue = maxmin[1].getTime();
        this.minValue = maxmin[0].getTime();
        this.minDate = addDays(maxmin[0], -7);
        this.maxDate = addDays(maxmin[1], 31);
        let duration = dayDiff(this.minDate, this.maxDate);
        if (this.options.timeLineHeight) {
            this.timeLineHeight = this.options.timeLineHeight;
        }
        else {
            this.timeLineHeight = 120;
            this.options.timeLineHeight = this.timeLineHeight;
        }
        this.canvas.width = this.options.timeLineColumnWidth * duration;
        this.timelineCanvas.width = this.canvas.width;
        this.dateLine = new DateLine(this.ctx, this.canvas, this.options, this.minDate, this);
        this.timeLine = new TimeLine(this.ctx, this.canvas, this.options, this);
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
        this.splitter.style.backgroundColor = "transparent";
        this.timelineDiv = document.createElement("div");
        this.timelineDiv.id = "gantt__canvas__chart__timeline";
        this.timelineDiv.style.height = this.options.timeLineHeight + "px";
        this.timelineDiv.style.width = this.chartDiv.style.width;
        this.timelineDiv.style.position = "sticky";
        this.timelineDiv.style.top = "0";
        this.timelineCanvas = document.createElement("canvas");
        this.timelineCanvas.height = this.options.timeLineHeight;
        this.timelineDiv.appendChild(this.timelineCanvas);
        this.timelineCtx = this.timelineCanvas.getContext("2d");
        this.barsDiv = document.createElement("div");
        this.barsDiv.id = "gantt__canvas__chart__bars";
        this.barsDiv.appendChild(this.canvas);
        this.chartDiv.setAttribute("id", "gantt_canvas__chart__");
        this.chartDiv.appendChild(this.timelineDiv);
        // this.chartDiv.style.flex = "1 1 auto";
        this.chartDiv.appendChild(this.barsDiv);
        this.chartDiv.style.display = "inline-block";
        this.chartDiv.style.height = "100%";
        const contWidth = this.container.clientWidth - this.options.table.width - 50;
        this.chartDiv.style.overflow = "auto";
        this.chartDiv.style.width = `${contWidth}px`;
        this.chartDiv.style.margin = "0px";
        // this.tablediv.appendChild(this.tableCanvas);
        this.container.appendChild(this.tablediv);
        this.container.appendChild(this.splitter);
        this.container.appendChild(this.chartDiv);
        this.canvas.height = this.options.rowHeight * this.options.data.length;
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
        this.tableCanvas.height = this.canvas.height;
        this.tableCanvas.width = this.tableWidth;
        this.splitter.addEventListener("mousedown", this.splitterMouseDownHandler);
    }
    /**
     * @description - initialize events
     */
    initEvents() {
        /**
         * Events to habdle mouse move in the chart area
         */
        this.canvas.addEventListener("mousemove", (e) => {
            e.target.parentElement;
            recursive_offset(e.target);
            let posX = e.pageX + this.chartDiv.scrollLeft - this.canvas.offsetLeft;
            let posY = e.pageY + this.chartDiv.scrollTop - this.canvas.offsetTop;
            for (let task of this.tasks) {
                task.collision(posX, posY);
            }
            if (this.dateLine) {
                this.dateLine.collision(posX, posY);
            }
        });
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
    drawGridLines() {
        this.canvas.height;
        var canvasActualWidth = this.canvas.width;
        var gridValue = 0;
        drawLine(this.ctx, 0, 0, canvasActualWidth, 0, "black");
        // horizontal grids between tasks
        let rowHeight = this.options.rowHeight;
        for (let i in this.visibleTasks) {
            drawLine(this.ctx, 0, rowHeight * (parseInt(i) + 1), canvasActualWidth + this.options.timeLineColumnWidth, rowHeight * (parseInt(i) + 1), "lightgray");
            drawLine(this.tableCtx, 0, rowHeight * (parseInt(i) + 1), this.options.table.width, rowHeight * (parseInt(i) + 1), "black");
        }
        gridValue += this.options.gridScale;
        // }
    }
    drawDateLine() {
        this.dateLine = new DateLine(this.ctx, this.canvas, this.options, this.dataDate, this);
        this.dateLine.draw();
    }
    drawTimeLine() {
        this.timeLine = new TimeLine(this.timelineCtx, this.canvas, this.options, this);
        this.timeLine.draw();
    }
    drawTable(update = false) {
        if (update !== true) {
            this.table = new Table(this.tableCtx, this.options.colors[0], this.options.barColorHover, "black", ["id", "name", "start", "end"], this.options, this);
        }
        this.table.draw(update);
    }
    draw() {
        // this.drawGridLines();
        this.drawTable();
        this.drawTimeLine();
        this.drawDateLine();
        this.tasksData = new Tasks(this.options.data, this);
    }
    update() {
        const contWidth = this.container.clientWidth - this.options.table.width - 50;
        this.chartDiv.style.overflow = "auto";
        this.chartDiv.style.width = `${contWidth}px`;
        this.chartDiv.style.margin = "0px";
        let duration = dayDiff(this.minDate, this.maxDate) + 1;
        this.canvas.width = this.options.timeLineColumnWidth * duration;
        this.timelineCanvas.width = this.options.timeLineColumnWidth * duration;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tasks = [];
        this.dateLine = null;
        // this.drawGridLines();
        this.draw();
    }
    updateGantt() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const contWidth = this.container.clientWidth - this.options.table.width - 50;
        this.chartDiv.style.overflow = "auto";
        this.chartDiv.style.width = `${contWidth}px`;
        this.chartDiv.style.margin = "0px";
        this.visibleTasks = [];
        for (let task of this.options.data) {
            if (task.visible !== false) {
                this.visibleTasks.push(task);
            }
        }
        this.canvas.height = this.options.rowHeight * this.visibleTasks.length;
        this.tableCanvas.height = this.canvas.height;
        let maxmin = minmax(this.visibleTasks);
        this.maxValue = maxmin[1].getTime();
        this.minValue = maxmin[0].getTime();
        this.minDate = addDays(maxmin[0], -7);
        this.maxDate = addDays(maxmin[1], 31);
        this.tasks = [];
        this.dateLine = null;
        this.canvas.width =
            (dayDiff(this.minDate, this.maxDate) + 1) *
                this.options.timeLineColumnWidth;
        this.timelineCanvas.width = this.canvas.width;
        // this.drawGridLines();
        this.drawDateLine();
        this.drawTimeLine();
        this.tasksData = new Tasks(this.options.data, this);
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
