import { Component, OnInit } from '@angular/core';
import {GroceryItemService} from '../grocery-item.service';
import {GroceryListService} from '../grocery-list.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})

export class GroceryComponent implements OnInit {
  date: Date; // curent sytem date
  total_Cost: number = 0; // total cost of the list of groceries
  //items:  GroceryItemService[]; // array of grocery items
  lists: GroceryListService[];
  ArrayInputListenner;

  groList1: GroceryListService;
  groList2: GroceryListService;
  
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
    this.date = new Date();
    //this.items = [];
    this.lists = [];

    this.groList1 = new GroceryListService("Grocery 1");
    this.groList2 = new GroceryListService("Grocery 2");

    this.groList1.add_item("bread", 4.5, "yes", 4, "pain");
    this.groList1.add_item("oil", 3.2, "no", 1, "huile");
    this.groList2.add_item("shoes", 30.8, "no", 1, "clothing");
    this.groList2.add_item("jean", 40.00, "no", 3, "Clothing");

    this.lists.push(this.groList1);
    this.lists.push(this.groList2);

    this.lists.forEach((item, index) => {
      this.lists[index].updateCost();
    })

  }

  list_label_edit(){
    var newName: string = (<HTMLInputElement>document.getElementById("listNameNew")).value;
    var listName: string = (<HTMLInputElement>document.getElementById("listNameOld")).value;
    var found: boolean = false;
    if(this.validInput("string", "listNameOld"))  
      this.lists.forEach((item, index) => {
        if(item.label === listName){
          found = true;
          item.label = newName;
        }
      })
      if(!found){
        alert(listName + " Does not Exist.");
      }

      listName = "";
      newName = "";
      (<HTMLInputElement>document.getElementById("listNameNew")).value = "";
      (<HTMLInputElement>document.getElementById("listNameOld")).value = "";
  }

  list_remove(){
    var listName = (<HTMLInputElement>document.getElementById("lisToRemove")).value;
    var found: boolean = false;
    if(this.validInput("string", "lisToRemove"))  {
      this.lists.forEach((item, index) =>{
        if (item.label == listName) this.lists.splice(index, 1);
        found = true;
      })
    }
    if(!found){
      alert(listName + " Does not Exist.");
    }

    listName = "";
    (<HTMLInputElement>document.getElementById("lisToRemove")).value = "";
  }

  list_add(){
    var listName = (<HTMLInputElement>document.getElementById("listToAdd")).value;
    if(this.validInput("string", "listToAdd")){
      var newList: GroceryListService = new GroceryListService(listName);
      this.lists.push(newList);
    }

    listName = "";
    (<HTMLInputElement>document.getElementById("listToAdd")).value = "";
  }

  validInput(type:string, field_selector:string):boolean{
    var val_toCheck, text;
    val_toCheck = (<HTMLInputElement>document.getElementById(field_selector)).value;
    var field: string = (<HTMLInputElement>document.getElementById(field_selector)).title;
    if(type === "number"){
      if (isNaN(val_toCheck) || val_toCheck <= 0 ) {
        alert("Invalid Input for: " + field);
        return false;
      }
     
    }else if(type === "string"){
      if(val_toCheck.length < 2){
        alert("Invalid Input for: " + field);
        return false;
      }
    }else if(type === "yes/no"){
      if(val_toCheck != "Yes" && val_toCheck != "No"){
        alert("Invalid Input for: " + field);
        return false;
      }
    }/*else if(type === "yes/no"){
      if(val_toCheck != "yes" && val_toCheck != "no"){
        alert("Invalid Input for: " + field);
        return false;
      }
    }*/
    return true;
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
  this.lists.forEach((item, index) => {
    this.lists[index].updateCost();
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
    var listName: string = (<HTMLInputElement>document.getElementById('listName1')).value;
    var item_name:string = (<HTMLInputElement>document.getElementById('itemName1')).value;
    var category:string  = (<HTMLInputElement>document.getElementById('itemCategory1')).value; 
    var price:number  = Number((<HTMLInputElement>document.getElementById('itemPrice1')).value);
    var organic:string = (<HTMLInputElement>document.getElementById('itemOrganic1')).value; 
    var quantity:number  = Number((<HTMLInputElement>document.getElementById('itemQuantity1')).value);
    
    if(this.validInput("string","listName1") && this.validInput("string", "itemName1")
      && this.validInput("string", "itemCategory1") && this.validInput("number", "itemPrice1")
      && this.validInput("yes/no", "itemOrganic1") && this.validInput("number", "itemQuantity1")){
        var found: boolean = false;
        var newItem = new GroceryItemService (item_name,category, price, organic, quantity); 
        this.lists.forEach((item, index) => {
        if(listName === this.lists[index].label){
          this.lists[index].items.push(newItem);
          found = true;
          }
        })

        if(!found){
          alert(listName + " Does not Exist.")
        }
    }
    

    listName = "";
    item_name = "";
    category = "";
    price = 0;
    quantity = 0;
    organic = "";
    this.updateCost();
    (<HTMLInputElement>document.getElementById('listName1')).value = "";
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
    var listName = (<HTMLInputElement>document.getElementById('listName2')).value;
    var item_name = (<HTMLInputElement>document.getElementById('itemName2')).value;

    if(this.validInput("string","listName2") && this.validInput("string", "itemName2")){
      var found: boolean = false;
      this.lists.forEach((item, index) =>{
        if(item.label == listName) { 
          this.lists[index].remove_item(item_name);
          found = true;
        }
      });
      if(!found){
          alert(listName + " Does not Exist.")
        }
    }

    listName = "";
    item_name = "";
    this.updateCost();
    (<HTMLInputElement>document.getElementById('listName2')).value = "";
    (<HTMLInputElement>document.getElementById('itemName2')).value = "";
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
  edit_item(list_name: string, item_name: string, field, value):void{
    var found: boolean = false;
    this.lists.forEach((item, index) =>{
      if(item.label == list_name) {
        this.lists[index].edit_item(item_name, field, value);
        found = true
      }
    });
    if(!found){
      alert(list_name + " Does not Exist.");
    }
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
    var listName = (<HTMLInputElement>document.getElementById('listName3')).value;
    var name = (<HTMLInputElement>document.getElementById('itemName3')).value;
    var field = (<HTMLInputElement>document.getElementById('itemField')).value;
    var value = (<HTMLInputElement>document.getElementById('fieldValue')).value;
    var ifNumber: number;

    if(field == "organic"){
      if(this.validInput("yes/no", "fieldValue")){
        this.edit_item(listName, name, field, value);
      }
    }else if(field == 'price' || field == 'quantity'){
      ifNumber = Number(value);
      if(this.validInput("string","listName3") && this.validInput("string", "itemName3")
        && this.validInput("number", "fieldValue")){
        this.edit_item(listName, name, field, ifNumber);
      }
    }else{
      if(this.validInput("string","listName3") && this.validInput("string", "itemName3")
        && this.validInput("number", "fieldValue")){
        this.edit_item(listName, name, field, value);
      }
    }
    
    listName = "";
    name = "";
    field = "";
    value = "";
    ifNumber = 0;

    var normalInput = document.createElement("input");
    normalInput.id = "fieldValue";
    normalInput.type = "text";
    var toReplace = document.getElementById('fieldValue');
    var container = document.getElementById('fieldValue').parentNode;
    container.removeChild(toReplace);
    container.appendChild(normalInput);

    (<HTMLInputElement>document.getElementById('itemName3')).value = "";
    (<HTMLInputElement>document.getElementById('itemField')).value = "";
    (<HTMLInputElement>document.getElementById('fieldValue')).value = "";
    (<HTMLInputElement>document.getElementById('listName3')).value = "";
  }

  isOrganic(){
    var field = (<HTMLInputElement>document.getElementById('itemField')).value;
    var value = (<HTMLInputElement>document.getElementById('fieldValue'));
    if(field == "organic"){
      var op1 = document.createElement("option");
      op1.value = "yes";
      op1.innerHTML = "yes";
      var op2 = document.createElement("option");
      op2.value = "no";
      op2.innerHTML = "no";
      var selector = document.createElement("select");
      selector.id="fieldValue";
      var toReplace = document.getElementById("fieldValue");
      var container = toReplace.parentNode;
      container.removeChild(toReplace);
      selector.appendChild(op1);
      selector.appendChild(op2);
      container.appendChild(selector);
    }
  }

//The part below if for further implementation for Project 4

 accOpen():void {
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
  }
  
}