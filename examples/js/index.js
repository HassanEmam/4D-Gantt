import { scheduleData } from "./data";
import { GanttChart } from "../../dist";
import { addDays } from "../../dist/utils/helper";

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
