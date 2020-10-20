import { Component, OnInit } from '@angular/core';
import {GroceryItemComponent} from '../grocery-item/grocery-item.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})

export class GroceryListComponent implements OnInit {
  label: string;
  l_Index = 1;
	date: Date;
	total_Cost: number;
  items:  [GroceryItemComponent];

  constructor(name,date,list, cost = 0) { 
    this.label = name;
    this.date = date;
    this.total_Cost = cost;

    for(let i = 0; i < list.length; i++){
      this.items[i] = list[i];
      this.l_Index += 1;
    }
  }

  add_Item(name: string = ("Item " + (this.items.length + 1)), price:number = 0, organic: boolean = false, quantity: number = 1, category?:string):void {
    var newItem = new GroceryItemComponent (name,category, price, organic, quantity); 
    this.items.push(newItem);
  }

  remove_Item(name: string):void{
    this.items.forEach((item, index) =>{
      if(item.name == name) this.items.splice(index, 1);
    });
  }

  edit_item(name: string, newItem: GroceryItemComponent):void{
    this.items.forEach((item, index) =>{
      if(item.name == name) this.items[index].edit_item(newItem);
    });
  }
  ngOnInit(): void {}
 
}
