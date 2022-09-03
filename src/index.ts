import { Recatangle } from "./types/rectangle";
import { scaleX, scaleDate } from "./utils/scales";
import { GanttChart, options, data } from "./types/ganttChart";

let data: data[] = [
  {
    id: 1,
    name: "Task 1",
    start: new Date(2020, 0, 1),
    end: new Date(2020, 0, 30),
    parent: 0,
  },
  {
    id: 2,
    name: "Task 2",
    start: new Date(2020, 0, 12),
    end: new Date(2020, 1, 28),
    parent: 0,
  },
  {
    id: 3,
    name: "Task 3",
    start: new Date(2020, 2, 1),
    end: new Date(2020, 2, 30),
    parent: 0,
  },
];

function drawGantt() {
  let chartCanvas = document.getElementById("chartCanvas") as HTMLCanvasElement;
  chartCanvas.width = chartCanvas.parentElement.clientWidth;
  chartCanvas.height = 500;
  let options = {
    canvas: chartCanvas,
    padding: 20,
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
