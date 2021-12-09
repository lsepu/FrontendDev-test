import { Component } from '@angular/core';
import * as data from '../assets/DATA.json';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface DataNode {
  name: string | number;
  children?: DataNode[];
  price?: number;
  quantity?: number;
}

function nestGroupsBy(arr: any, properties: any) {
  properties = Array.from(properties);
  if (properties.length === 1) {
    return groupBy(arr, properties[0]);
  }
  const property = properties.shift();
  var grouped = groupBy(arr, property);
  for (let key in grouped) {
    grouped[key] = nestGroupsBy(grouped[key], Array.from(properties));
  }
  return grouped;
}

function groupBy(conversions: any, property: any) {
  return conversions.reduce((acc: any, obj: any, idx: any) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return acc;
  }, {});
}

//set array to show recursively and get the values
function setArrayNode(nestedJSON: any, key: any, level: number) {
  let obj: any = {
    name: key,
    children: [],
  };

  if (level == 1) {
    obj = setArrayNode(nestedJSON[key], key, level + 1);
  } else {
    if (level < 4) {
      for (const key of Object.keys(nestedJSON)) {
        //set child recursively
        obj.children.push(setArrayNode(nestedJSON[key], key, level + 1));

        //set price
        let sumPrice = 0;
        let sumQuantity = 0;
        obj.children.forEach((el: any) => {
          sumPrice += el.price;
          sumQuantity += el.quantity;
        });

        obj.price = sumPrice;
        obj.quantity = sumQuantity;
      }
    } else {
      let sumPrice = 0;
      let sumQuantity = 0;

      //get object and show info
      for (const key of Object.keys(nestedJSON)) {
        const price = nestedJSON[key].LineTotal;
        const quantity = nestedJSON[key].Quantity;

        sumPrice += price;
        sumQuantity += quantity;
      }
      obj.price = sumPrice;
      obj.quantity = sumQuantity;
    }
  }
  return obj;
}

function setArrayTree(nestedJSON: any) {
  let levels: DataNode[] = [];
  for (const key of Object.keys(nestedJSON)) {
    levels.push(setArrayNode(nestedJSON, key, 1));
  }
  return levels;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  treeControl = new NestedTreeControl<DataNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<DataNode>();

  hasChild = (_: number, node: DataNode) =>
    !!node.children && node.children.length > 0;

  dataArray: Array<any> = Object.values(data);

  orderListName = ['Marca', 'Vendedor', 'Categoria'];

  orderListVariables = ['FirmName', 'SlpName', 'CategoriaName'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.orderListName,
      event.previousIndex,
      event.currentIndex
    );
    this.orderListVariables = [];

    this.orderListName.forEach((el) => {
      switch (el) {
        case 'Marca':
          this.orderListVariables.push('FirmName');
          break;

        case 'Vendedor':
          this.orderListVariables.push('SlpName');
          break;

        case 'Categoria':
          this.orderListVariables.push('CategoriaName');
          break;
      }
    });

    const nestedJSON = nestGroupsBy(this.dataArray, this.orderListVariables);
    const TREE_DATA = setArrayTree(nestedJSON);

    this.dataSource.data = TREE_DATA;
  }

  constructor() {
    this.dataArray.splice(-2);
    const nestedJSON = nestGroupsBy(this.dataArray, this.orderListVariables);
    const TREE_DATA = setArrayTree(nestedJSON);
    this.dataSource.data = TREE_DATA;
  }
}
