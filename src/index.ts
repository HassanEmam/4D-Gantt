import { scheduleData } from "./data";
import { options } from "./types/options";
import { scaleX, scaleDate } from "./utils/scales";
import { GanttChart } from "./types/ganttChart";
import { data } from "./types/data";

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
  console.log("Creating Gantt Chart");
  let gantt = new GanttChart(options);
  gantt.draw();
  console.log("Drawing Gantt Chart");
}

drawGantt();

console.log(
  scaleX(
    new Date("2022/12/31"),
    new Date("2022/01/01"),
    new Date("2022/12/31"),
    100
  )
);

console.log(
  scaleDate(
    499,
    new Date("2022/01/01"),
    new Date("2022/12/31").getTime() - new Date("2022/01/01").getTime(),
    1000
  )
);
