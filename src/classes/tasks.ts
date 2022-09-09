import { GanttChart } from "./ganttChart";
import { data, nestedData } from "./data";
import { Table } from "./table";

export class Tasks {
  data: data[];
  public nestedData: nestedData[];
  gantt: GanttChart;

  constructor(data: data[], gantt: GanttChart) {
    this.data = data;
    this.gantt = gantt;
    this.nestedData = this.list_to_tree(this.data);
    this.createTree(false);
  }

  createTree(update: boolean = false) {
    for (let i = 0; i < this.nestedData.length; i++) {
      const element = this.nestedData[i];
      this.gantt.table.drawRow(element, update);
    }
  }

  constructTree(task: nestedData, update: boolean = false) {
    if (task.children.length === 0) {
      this.gantt.table.drawRow(task);
      return;
    }

    this.gantt.table.drawRow(task, update);
    for (let i = 0; i < task.children.length; i++) {
      this.constructTree(task.children[i], update);
    }
  }

  list_to_tree(dataset: data[], update: boolean = false) {
    const hashTable = Object.create(null);
    dataset.forEach(
      (aData) =>
        (hashTable[aData.id] = {
          ...aData,
          children: [],
          level: 0,
        })
    );
    const dataTree: nestedData[] = [];
    dataset.forEach((aData) => {
      if (aData.parent) {
        hashTable[aData.id].level = hashTable[aData.parent].level + 1;
        if (update) {
          hashTable[aData.id].visible = aData.visible;
          hashTable[aData.id].expanded = aData.expanded;
        } else {
          if (aData.visible === undefined) {
            hashTable[aData.id].visible = true;
          } else {
            hashTable[aData.id].visible = aData.visible;
          }
          if (aData.expanded === undefined) {
            hashTable[aData.id].expanded = true;
          } else {
            hashTable[aData.id].expanded = aData.expanded;
          }
          if (aData.hasChildren !== undefined) {
            hashTable[aData.id].hasChildren = true;
          } else {
            hashTable[aData.id].hasChildren = aData.hasChildren;
          }

          // hashTable[aData.id].expanded = true;
        }
        hashTable[aData.parent].children.push(hashTable[aData.id]);
      } else {
        dataTree.push(hashTable[aData.id]);
      }
    });
    return dataTree;
  }

  update() {
    // this.gantt.canvas.
    this.createTree(true);
  }
}
