import { GanttChart } from "./ganttChart";
import { data, nestedData } from "./data";

export class Tasks {
  data: data[];
  public nestedData: nestedData[];
  gantt: GanttChart;

  constructor(data: data[], gantt: GanttChart) {
    this.data = data;
    this.gantt = gantt;
    this.calculateWBSDates();
    this.nestedData = this.list_to_tree(this.data);
    this.createTree(false);
  }

  calculateWBSDates() {
    let tasks = this.data.filter((act) => {
      return this.data.filter((d) => d.parent === act.id).length === 0;
    });
    let wbss = this.data.filter((act) => {
      return this.data.filter((d) => d.parent === act.id).length !== 0;
    });
    for (let wbs of wbss) {
      const tmpTasks = tasks.filter((t) => t.parent === wbs.id);
      if (tmpTasks.length > 0) {
        let min: data = tmpTasks.reduce((prev, current) => {
          return prev.start < current.start ? prev : current;
        });

        let max = tmpTasks.reduce((prev, current) => {
          return prev.start > current.start ? prev : current;
        });
        wbs.start = min.start;
        wbs.end = max.end;
      }
    }
    for (let wbs of wbss) {
      const tmpChildWbss = wbss.filter((t) => t.parent === wbs.id);
      if (tmpChildWbss.length > 0) {
        let min = tmpChildWbss.reduce((prev, current) => {
          return prev.start < current.start ? prev : current;
        });

        let max = tmpChildWbss.reduce((prev, current) => {
          return prev.start > current.start ? prev : current;
        });
        wbs.start = min.start;
        wbs.end = max.end;
      }
    }
  }
  createTree(update: boolean = false) {
    this.gantt.table.rowCounter = 0;
    this.gantt.table.tableBody.innerHTML = "";
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

  // list_to_tree(dataset: data[], update: boolean = false) {
  //   const hashTable = Object.create(null);
  //   dataset.forEach(
  //     (aData) =>
  //       (hashTable[aData.id] = {
  //         ...aData,
  //         children: [],
  //         level: 0,
  //       })
  //   );
  //   const dataTree: nestedData[] = [];
  //   dataset.forEach((aData) => {
  //     if (aData.parent) {
  //       hashTable[aData.id].level = hashTable[aData.parent].level + 1;
  //       if (update) {
  //         hashTable[aData.id].visible = aData.visible;
  //         hashTable[aData.id].expanded = aData.expanded;
  //       } else {
  //         if (aData.visible === undefined) {
  //           hashTable[aData.id].visible = true;
  //         } else {
  //           hashTable[aData.id].visible = aData.visible;
  //         }
  //         if (aData.expanded === undefined) {
  //           hashTable[aData.id].expanded = true;
  //         } else {
  //           hashTable[aData.id].expanded = aData.expanded;
  //         }
  //         if (aData.hasChildren !== undefined) {
  //           hashTable[aData.id].hasChildren = true;
  //         } else {
  //           hashTable[aData.id].hasChildren = aData.hasChildren;
  //         }

  //         // hashTable[aData.id].expanded = true;
  //       }
  //       hashTable[aData.parent].children.push(hashTable[aData.id]);
  //     } else {
  //       dataTree.push(hashTable[aData.id]);
  //     }
  //   });
  //   return dataTree;
  // }

  list_to_tree(data: data[], update: boolean = false) {
    const tree: nestedData[] = [];
    const parents = data.filter((d) => d.parent == null);
    for (const parent of parents) {
      parent.level = 0;
      let nestedObj = Object.create(null);
      nestedObj = { ...parent, children: [] };
      nestedObj.level = 0;
      if (parent.visible === undefined) {
        nestedObj.visible = true;
      } else if (parent.visible === true) {
        nestedObj.visible = true;
      } else {
        nestedObj.visible = false;
      }
      if (parent.expanded !== undefined) {
        nestedObj.expanded = parent.expanded;
      } else {
        nestedObj.expanded = true;
      }
      nestedObj.children = this.getChildren(parent, data);
      tree.push(nestedObj);
    }
    return tree;
  }

  getChildren(parent: data, data: data[]) {
    const children = data.filter((d) => d.parent === parent.id);

    const childs = [];
    if (children.length === 0) {
      return [];
    }
    for (const child of children) {
      child.level = parent.level + 1;
      let childObj: any = {};

      childObj = { ...child, children: [] };
      childObj.level = parent.level + 1;
      if (child.visible === true) {
        childObj.visible = child.visible;
      } else if (child.visible === false) {
        childObj.visible = false;
      } else {
        childObj.visible = true;
      }
      if (child.expanded !== undefined) {
        childObj.expanded = child.expanded;
      } else {
        childObj.expanded = true;
      }

      childObj.children = this.getChildren(child, data);
      childs.push(childObj);
    }
    return childs;
  }

  update() {
    // this.gantt.canvas.
    this.createTree(true);
  }
}
