import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})

class item{
  name: string;
  category?: string;
  price?: number;
  organic?:boolean;

  constructor(name, category = " ", price = 0, organic = false){
    this.name = name;
    this.category = category;
    this.price = price;
    this.organic = organic;
  }
}

class Grocery_List {
  
  label: string;
  l_Index = 1;
	date: Date;
	total_Cost: number;
  items:  [item];
  
  constructor(name,date,list, cost = 0){
    this.label = name;
    this.date = date;
    this.total_Cost = cost;

    for(let i = 0; i < list.length; i++){
      this.items[i] = list[i];
      this.l_Index += 1;
    }
  }

  function add_Item(name: string = ("List " + (this.l_Index + 1)), date?: Date, price?:number = 0, organic?: boolean = false, quantity?: number = 1, category?:string =" ") {
    
  }

}

export class GroceryComponent implements OnInit {
   Groceries: [Grocery_List];

  constructor() { }

  /*
const index = myArray.indexOf(key, 0);
if (index > -1) {
   myArray.splice(index, 1);
}

  removeDocument(doc){
   this.documents.forEach( (item, index) => {
     if(item === doc) this.documents.splice(index,1);
   });
}*/

  ngOnInit(): void {
  }

}