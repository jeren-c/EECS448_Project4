//import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
//import {GroceryListService} from '../grocery-list.service';
import {GroceryItemService} from '../grocery-item.service';
import { ThrowStmt } from '@angular/compiler';
//import * as $ from 'jquery';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})

export class GroceryComponent implements OnInit {
  //label: string;
  date: Date; // curent sytem date
  total_Cost: number = 0; // total cost of the list of groceries
  items:  GroceryItemService[]; // array of grocery items

  //list_of_items: GroceryItemService[]; * for later use

   item1: GroceryItemService;
   item2: GroceryItemService;
   item3: GroceryItemService;
   item4: GroceryItemService;

  /** Constructor: Creates and initilaze the class 
 * @pre None
 * @post Component class created with all its dependencies
 * @param None 
 * @throws None
 * @return None
 */
  constructor() { }


   /** ngOnInit: lifecycle hook of the component called after
  *    the constructor to initialize the component. Here we create 4 items and
  *    put them in the list, then compute the total cost.
   * @pre the items and the array of items are delcared.
   * @post the items and the array are initialized.
   * @param None
   * @throws None
   * @return None
   */
  ngOnInit(): void {
    //this.label = "Grocery List";
    this.date = new Date();

    this.item1 = new GroceryItemService ("item 1", "dairy", 2.5, "Yes", 2);
    this.item2 = new GroceryItemService ("item 2", "poultry", 5.89, "NO", 1);
    this.item3 = new GroceryItemService ("item 3", "drinks", 4.25, "Yes", 1);
    this.item4 = new GroceryItemService ("item 4", "consmetics", 10, "No", 1);
    this.items =[this.item1, this.item2, this.item3, this.item4];

    //this.items = this.list_of_items;

    this.items.forEach(item => {
      this.total_Cost += (item.price * item.quantity);
    })

  /*
   $('#modify-item').hide();
   $('#modify-list').hide();
    /*this.groceryList1 = new GroceryListService("Day1","10-20-2020",this.list_of_items1);
    this.groceryList2 = new GroceryListService("Day2","10-24-2020",this.list_of_items1);
    this.groceryList3 = new GroceryListService("Day3","10-20-2022",this.list_of_items1);
    this.groceries= [this.groceryList1, this.groceryList2, this.groceryList3];*/
  }

  
/** updateCost: This function is used to update the total cost after each change
 *            on the list of grocery items.
* @pre The array of items exists and is initilized
* @post The total cost is updated for the user
* @param None
* @throws None
* @return None
*/
  updateCost(){
    this.total_Cost = 0;
    this.items.forEach(item => {
      this.total_Cost += (item.price * item.quantity);
    })
  }


/** add_item: this function takes the input from the user, puts it into variables, then
 *    creates a new object Item to add to the array of groceries. It also clears the values
 *    from the user interface and the variables used to grab information form the user interface       
* @pre The array of gorcery items exists.
* @post The array of grocery items is updated
* @param None
* @throws None
* @return None
*/
  add_item():void {
    var organic:string
    var name:string = (<HTMLInputElement>document.getElementById('itemName1')).value;
    var category:string  = (<HTMLInputElement>document.getElementById('itemCategory1')).value; 
    var price:number  = Number((<HTMLInputElement>document.getElementById('itemPrice1')).value);
   // var organic:boolean = Boolean((<HTMLInputElement>document.getElementById('itemOrganic1')).value); 
    var organic:string = (<HTMLInputElement>document.getElementById('itemOrganic1')).value; 
    var quantity:number  = Number((<HTMLInputElement>document.getElementById('itemQuantity1')).value);
    
    var newItem = new GroceryItemService (name,category, price, organic, quantity); 
    this.items.push(newItem);

    console.log(name + "to add2\n");
    name = "";
    category = "";
    price = 0;
    quantity = 0;
    organic = "";
    this.updateCost();
    (<HTMLInputElement>document.getElementById('itemName1')).value = "";
    (<HTMLInputElement>document.getElementById('itemCategory1')).value = ""; 
    (<HTMLInputElement>document.getElementById('itemPrice1')).value = "";
    (<HTMLInputElement>document.getElementById('itemOrganic1')).value = ""; 
    (<HTMLInputElement>document.getElementById('itemQuantity1')).value = "";
    
  }


/** remove_item: this function takes the name of an item to remove from that the user typed.
 *  It then searches and removed that item from the list of groceries. It also clears the value
 *    from the user interface and the variable used to grab information form the user interface       
* @pre The array of gorcery items exists.
* @post The array of grocery items is updated
* @param None
* @throws None
* @return None
*/
  remove_item():void{
    var name = (<HTMLInputElement>document.getElementById('itemName2')).value;
    this.items.forEach((item, index) =>{
      if(item.name == name) this.items.splice(index, 1);
    });
    name = "";
    this.updateCost();
    (<HTMLInputElement>document.getElementById('itemName2')).value;
  }

/** edit_item: this function searches and item name from the list of groceries and 
 *          calls that item's edit_item function with the field and value to update.
* @pre The name is on the list
* @post The item is upated
* @param {name}: The name of the item to edit
* @param {field}: The field to edit
* @param {value}: The new value for the field to edit
* @throws None
* @return None
*/
  edit_item(name: string, field, value):void{
    this.items.forEach((item, index) =>{
      if(item.name == name) this.items[index].edit_item(field, value);
    });
    this.updateCost();  
  }

/** edit: this function takes the input from the user, puts it into variables, then
 *    calls the edit_item function with those variable sent as parameters. It also clears the values
 *    from the user interface and the variables used to grab information form the user interface       
* @pre None
* @post None
* @param None
* @throws None
* @return None
*/
  edit():void{
    var name = (<HTMLInputElement>document.getElementById('itemName3')).value;
    var field = (<HTMLInputElement>document.getElementById('itemField')).value;
    var value = (<HTMLInputElement>document.getElementById('fieldValue')).value;
    var ifNumber: number;
    if(field == 'price' || field == 'quantity'){
      ifNumber = Number(value);
      this.edit_item(name, field, ifNumber);
    }else{
      this.edit_item(name, field, value);
    }
    (<HTMLInputElement>document.getElementById('itemName3')).value = "";
    (<HTMLInputElement>document.getElementById('itemField')).value = "";
    (<HTMLInputElement>document.getElementById('fieldValue')).value = "";
   
    name = "";
    field = "";
    value = "";
    ifNumber = 0;
  }


//The part below if for further implementation for Project 4

 /*accOpen():void {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }*/
  
  
  /*addGroceryList(label:string, date: string, list?):void{
    list = document.getElementsByName('itemList[]');
    this.groceries.push(new GroceryListService(label,date,list));
  }

  switchEditionView(toShow: string):void{
    if(toShow  == 'item'){
      $('#modify-item').toggle();
      $('#modify-list').hide();
    }else{
      $('#modify-item').hide();
      $('#modify-list').toggle();
    }
  }
  addItemG(){
    var listName:string = $('#listName1').value;
    var category:string  = $('#itemCategory1').value; 
    var price:number  = $('#itemPrice1').value;
    var organic:boolean = $('#itemOrganic1').value; 
    var quantity:number  = $('#itemQuantity1').value;

    this.groceries.forEach((item,index) =>{ 
    if(item.label == listName){
      item.add_Item(category, price, organic, quantity);
    } 
    });

    console.log(listName + "to add\n" + $('#listName1').value);
  }

  removeItemG(listName: string, toRemove: string){

  }

  editItemG(listName: string, toEdit: string){

  }
*/
}