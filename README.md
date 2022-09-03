# 🚀 4D Gantt

## 📖 About

This package has started as an idea to create Gantt Chart suited for the construction industry. The inital code was inspired by the tutorial of [Alex L.](https://www.bryntum.com/blog/creating-a-gantt-chart-with-vanilla-javascript/). The project is open source and can be found [here](https://github.com/HassanEmam/4D-Gantt).

## 📝 Description

## 📦 Installation

## 🚀 Usage

## Demo

You can see a live demo of the project [here](https://hassanemam.github.io/4D-Gantt/).

## 📜 License

## 📜TODO

- [ ] Modify task list to be a treetable. This should show heirarichal structure of the wbs and activities section 6 in the image
- [ ] Automate the chart from and to date by getting them from data
- [ ] Modify the data structure of tasks to be a list of tasks where a task is defined as

```
[
 {id: 1, name:"Task 1", start: new Date("2022/1/1"), end: new Date("2022/3/1"), parent: null},
 {id: 2, name:"Task 2", start: new Date("2022/2/1"), end: new Date("2022/3/1"), parent: 1}
]
```

- [ ] Create current Date line to show with 4D simulation.
- [ ] Make sections resizable i.e. the treetable and the chart area
- [ ] Allow for multiple themes or even colors setting during development
- [ ] We can publish to npmjs as a reusable package
- [ ] Change the timescales to show either day, week, month or year
