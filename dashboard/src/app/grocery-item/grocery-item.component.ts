import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  name: string;
  category?: string;
  price?: number;
  organic?:boolean;
  quantity: number = 1;

  constructor(name: string = "item", category: string = " ", price = 0, organic = false, quantity: number = 1){
    this.name = name;
    this.category = category;
    this.price = price;
    this.organic = organic;
    this.quantity = quantity;
  }

  edit_item( item2: GroceryItemComponent):void{
    this.name = item2.name;
    this.category = item2.category;
    this.price = item2.price;
    this.organic = item2.organic;
    this.quantity = item2.quantity;
  }

  ngOnInit(): void {
  }

}
