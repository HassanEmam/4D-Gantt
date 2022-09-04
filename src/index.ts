import { scheduleData } from "./data";
import { options } from "./classes/options";
import { scaleX, scaleDate } from "./utils/scales";
import { GanttChart } from "./classes/ganttChart";
import { data } from "./classes/data";

let data = scheduleData;
let gantt: GanttChart;

function drawGantt() {
  let chartCanvas = document.getElementById("chartCanvas") as HTMLCanvasElement;
  chartCanvas.width = chartCanvas.parentElement.clientWidth;
  chartCanvas.height = 500;
  let options: options = {
    canvas: chartCanvas,
    padding: 120,
    gridScale: 5,
    gridColor: "black",
    data: data,
    titleOptions: "Music",
    rowHeight: 40,
    timeLineColumnWidth: 12,
    timeLineBackgroundColor: "yellow",
    tableWidth: 400,
    barColor: "lightgreen",
    barColorHover: "red",
    colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
  };
  gantt = new GanttChart(options);
  gantt.draw();
}

drawGantt();

let btnZoomIn = document.getElementById("zoom-in") as HTMLButtonElement;
btnZoomIn.addEventListener("click", () => {
  gantt.options.timeLineColumnWidth += 5;
  gantt.update();
});

let btnZoomOut = document.getElementById("zoom-out") as HTMLButtonElement;
btnZoomOut.addEventListener("click", () => {
  if (gantt.options.timeLineColumnWidth > 5) {
    gantt.options.timeLineColumnWidth -= 5;
    gantt.update();
  }
});
