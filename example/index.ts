import { data, GanttChart, scaleX, addDays, options } from "4d-gantt-chart";

const data = [
  {
    id: 1,
    name: "Task 1",
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 30),
  },
  {
    id: 2,
    name: "Task 2",
    start: new Date(2022, 0, 12),
    end: new Date(2022, 1, 28),
    parent: 1,
  },
];

let container: HTMLElement;
container = <HTMLElement>document.getElementById("Chart");

const options = {
  container: container,
  dataDate: new Date(2022, 0, 15),
  gridScale: 5,
  gridColor: "black",
  data: data,
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
const chart = new GanttChart(options);
