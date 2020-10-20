import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import {GroceryListComponent} from '../grocery-list/grocery-list.component';
import {GroceryItemComponent} from '../grocery-item/grocery-item.component';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})

export class GroceryComponent implements OnInit {
   groceries: [GroceryListComponent];
   list_of_items1: [GroceryItemComponent];
   groceryList1: GroceryListComponent;
   item1: GroceryItemComponent;
   item2: GroceryItemComponent;
   item3: GroceryItemComponent;
   item4: GroceryItemComponent;

  constructor() { }


  ngOnInit(): void {
    this.item1 = new GroceryItemComponent ("item 1", "dairy", 2.5, true, 2);
    this.item2 = new GroceryItemComponent ("item 2", "poultry", 5.89, false, 1);
    this.item3 = new GroceryItemComponent ("item 3", "drinks", 4.25, true, 1);
    this.item4 = new GroceryItemComponent ("item 4", "consmetics", 10, false, 1);

    this.list_of_items1.push(this.item1);
    this.list_of_items1.push(this.item2);
    this.list_of_items1.push(this.item3);
    this.list_of_items1.push(this.item4);
    this.groceryList1 = new GroceryListComponent("Day1","10-20-2020",this.list_of_items1, 40);
    this.groceries.push(this.groceryList1);
  }

}