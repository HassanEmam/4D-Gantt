import { GanttChart } from "./ganttChart";
import { data, nestedData } from "./data";
import { Table } from "./table";

export class Tasks {
  data: data[];
  nestedData: nestedData[];
  gantt: GanttChart;

  constructor(data: data[], gantt: GanttChart) {
    this.data = data;
    this.gantt = gantt;
    this.nestedData = this.list_to_tree(this.data);
    this.createTree();
  }

  createTree() {
    for (let i = 0; i < this.nestedData.length; i++) {
      const element = this.nestedData[i];
      this.gantt.table.drawRow(element);
      // for (let j = 0; j < element.children.length; j++) {
      //   this.constructTree(element.children[j]);
      // }
    }
  }

  constructTree(task: nestedData) {
    if (task.children.length === 0) {
      this.gantt.table.drawRow(task);
      return;
    }
    this.gantt.table.drawRow(task);
    for (let i = 0; i < task.children.length; i++) {
      this.constructTree(task.children[i]);
    }
  }

  list_to_tree(dataset: data[]) {
    const hashTable = Object.create(null);
    dataset.forEach(
      (aData) =>
        (hashTable[aData.id] = {
          ...aData,
          children: [],
          level: 0,
          expanded: true,
        })
    );
    const dataTree: nestedData[] = [];
    dataset.forEach((aData) => {
      if (aData.parent) {
        hashTable[aData.id].level = hashTable[aData.parent].level + 1;
        hashTable[aData.id].expanded = true;
        hashTable[aData.parent].children.push(hashTable[aData.id]);
      } else {
        dataTree.push(hashTable[aData.id]);
      }
    });
    return dataTree;
  }
}
