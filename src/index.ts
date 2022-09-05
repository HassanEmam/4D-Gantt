import { scheduleData } from "./data";
import { options } from "./classes/options";
import { scaleX, scaleDate } from "./utils/scales";
import { GanttChart } from "./classes/ganttChart";
import { data } from "./classes/data";
import { addDays } from "./utils/helper";
import { time } from "console";

let data = scheduleData;
let gantt: GanttChart;

function drawGantt() {
  let container = document.getElementById("Chart") as HTMLCanvasElement;
  console.log(container);
  // chartCanvas.width = chartCanvas.parentElement.clientWidth;
  // chartCanvas.height = 500;
  let options: options = {
    container: container,
    dataDate: new Date(2020, 0, 15),
    gridScale: 5,
    gridColor: "black",
    data: data,
    titleOptions: "Music",
    rowHeight: 40,
    timeLineColumnWidth: 12,
    timeLineBackgroundColor: "yellow",
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

let btnPlay = document.getElementById("play") as HTMLButtonElement;
btnPlay.addEventListener("click", play);

let timer: NodeJS.Timeout | undefined = undefined;

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
