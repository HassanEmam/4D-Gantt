# 🚀 4D Gantt

## 📖 About

This package has started as an idea to create Gantt Chart suited for the construction industry. The inital code was inspired by the blog of [Artem aka @shybovycha](https://shybovycha.github.io/2021/03/04/gantt-chart-part3.html). The project is open source and can be found [here](https://github.com/HassanEmam/4D-Gantt).

## 📝 Description

This library is developed to fill a gap in the opensource community for tools that could deal with schedules in construction in general. The main focus of the library is the ability to play animation using the timeline so it could integrate with other tools like BIM and libraries like [ifc.js](https://github.com/IFCjs/web-ifc-three) and [three.js](https://threejs.org/).

This library is part of a suite of libraries developed primairly for planners and project controllers like the [PyP6XER library](https://github.com/HassanEmam/PyP6XER) that can be used to read and write P6 XER files.

The package is developed using [TypeScript](https://www.typescriptlang.org/) and it is still work in progress.

## 📦 Installation

The plan for the package is to be published on npmjs.com. However, it is not ready yet. The package can be installed using the following command:

```code
npm install 4d-gantt
```

## 🚀 Usage

## Demo

<p align="center">
  <img src="assets/readme/GanttChart.gif" />
</p>

You can see a live demo of the project [here](https://hassanemam.github.io/4D-Gantt/).

## 📜 License

## 📜TODO

- [x] Modify task list to be a treetable. This should show heirarichal structure of the wbs and activities section 6 in the image
- [x] Automate the chart from and to date by getting them from data
- [x] Modify the data structure of tasks to be a list of tasks where a task is defined as

```

[
{id: 1, name:"Task 1", start: new Date("2022/1/1"), end: new Date("2022/3/1"), parent: null},
{id: 2, name:"Task 2", start: new Date("2022/2/1"), end: new Date("2022/3/1"), parent: 1}
]

```

- [x] Create current Date line to show with 4D simulation.
- [ ] Make sections resizable i.e. the treetable and the chart area
- [ ] Allow for multiple themes or even colors setting during development
- [ ] Package could be publish to npmjs as a reusable package
- [ ] Change the timescales to show either day, week, month or year

```

```
