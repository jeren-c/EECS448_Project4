import { Injectable } from '@angular/core';
import {GroceryItemService} from './grocery-item.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  label: string;
  date: Date;
  list_Cost: number = 0;
  items:  GroceryItemService[];

  constructor(name) { 
    this.label = name;
    this.date = new Date();
    this.items = [];
    //this.items.forEach(item => {
      //this.list_Cost += (item.price * item.quantity);
    //})
  
  }

  updateCost(){
    this.list_Cost = 0;
    this.items.forEach(item => {
      this.list_Cost += (item.price * item.quantity);
    })
  }

  add_item(name: string = ("Item " + (this.items.length + 1)), price:number = 0, organic: string = "Yes", quantity: number = 1, category?:string):void {
    var newItem = new GroceryItemService (name,category, price, organic, quantity); 
    this.items.push(newItem);
  }

  remove_item(name: string):void{
    var found: boolean = false;
    this.items.forEach((item, index) =>{
      if(item.name == name){ 
        this.items.splice(index, 1);
        found = true;
      }
    });

    if(!found){
      alert(name + " Does not Exist.")
    }
  }

  edit_item(name: string, field, newVal):void{
    var found: boolean = false;
    this.items.forEach((item, index) =>{
      if(item.name == name){
        this.items[index].edit_item(field, newVal);
        found = true;
      }
    });

    if(!found){
      alert(name + " Does not Exist.")
    }
  }

}
