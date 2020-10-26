import { Injectable } from '@angular/core';
import {GroceryItemService} from './grocery-item.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  label: string;
  l_Index = 1;
  date: Date;
  total_Cost: number = 0;
  items:  GroceryItemService[];

  constructor(name,date,list) { 
    this.label = name;
    this.date = date;
    this.items = list;

    this.items.forEach(item => {
      this.total_Cost += (item.price * item.quantity);
    })
    /*for(let i = 0; i < list.length; i++){
      this.items[i] = list[i];
      this.l_Index += 1;
    }*/
  }

  add_Item(name: string = ("Item " + (this.items.length + 1)), price:number = 0, organic: string = "Yes", quantity: number = 1, category?:string):void {
    var newItem = new GroceryItemService (name,category, price, organic, quantity); 
    this.items.push(newItem);

    console.log(name + "to add2\n");
  }

  remove_Item(name: string):void{
    this.items.forEach((item, index) =>{
      if(item.name == name) this.items.splice(index, 1);
    });
  }

  edit_item(name: string, newItem: GroceryItemService):void{
    this.items.forEach((item, index) =>{
      //if(item.name == name) this.items[index].edit_item(newItem);
    });
  }
}
