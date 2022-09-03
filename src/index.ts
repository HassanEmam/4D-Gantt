import { scheduleData } from "./data";
import { options } from "./classes/options";
import { scaleX, scaleDate } from "./utils/scales";
import { GanttChart } from "./classes/ganttChart";
import { data } from "./classes/data";

let data = scheduleData;

function drawGantt() {
  let chartCanvas = document.getElementById("chartCanvas") as HTMLCanvasElement;
  chartCanvas.width = chartCanvas.parentElement.clientWidth;
  chartCanvas.height = 500;
  let options: options = {
    canvas: chartCanvas,
    padding: 100,
    gridScale: 5,
    gridColor: "black",
    data: data,
    titleOptions: "Music",
    colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
  };
  let gantt = new GanttChart(options);
  gantt.draw();
}

drawGantt();
