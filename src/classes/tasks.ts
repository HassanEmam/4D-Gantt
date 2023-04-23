import { GanttChart } from "./ganttChart";
import { data, nestedData } from "./data";

export class Tasks {
  data: data[];
  public nestedData: nestedData[];
  gantt: GanttChart;

  constructor(data: data[], gantt: GanttChart) {
    this.data = data;
    this.gantt = gantt;
    this.calculateWBSDates(this.data);
    this.nestedData = this.list_to_tree(this.data);
    this.createTree(false);
    console.log(this.nestedData);
  }

  calculateWBSDates(data: any) {
    const startDates: any = {};
    const finishDates: any = {};

    function dfs(nodeId: number) {
      const node = data.find((n: any) => n.id === nodeId);
      if (!node) {
        return null;
      }

      const childIds = data
        .filter((n: any) => n.parent === nodeId)
        .map((n: any) => n.id);
      const childStartDates = childIds.map((childId: any) => dfs(childId));

      let minStartDate = Infinity;
      let maxFinishDate = null;
      for (let i = 0; i < childIds.length; i++) {
        const childId = childIds[i];
        const childStartDate = childStartDates[i];
        if (childStartDate !== null && childStartDate < minStartDate) {
          minStartDate = childStartDate;
        }
        const childFinishDate = finishDates[childId] as any;
        if (
          childFinishDate !== null &&
          childFinishDate !== undefined &&
          (maxFinishDate === null || childFinishDate > maxFinishDate)
        ) {
          maxFinishDate = childFinishDate;
        }
      }

      const startDate = minStartDate === Infinity ? node.start : minStartDate;
      startDates[nodeId] = startDate;

      const finishDate = maxFinishDate === null ? node.end : maxFinishDate;
      finishDates[nodeId] = finishDate;

      return startDate;
    }

    data.forEach((node: any) => {
      if (!node.parent) {
        dfs(node.id);
      }
    });
    console.log("FINISH DATE", finishDates);

    let res: any[] = [];
    data.map((node: any) => {
      res.push({
        id: node.id,
        name: node.name,
        start: startDates[node.id],
        end: finishDates[node.id],
        parent: node.parent,
      });
    });
    this.data = res;
    console.log("RES", res);
    return res;
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
    console.log(tree);
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
