import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService, Expenses } from '../expense.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  incomeData: any;
  expenseData: any;
  result: Expenses[] = [];
  categoryList: any;
  ctemplist:any;
  tempcList: any;
  amount: number;
  income: number;
  itemp: number
  ctemp: String;
  expenseList: any;
  expense: number;
  totalexp: number;
  percent: number;
  save: number;
  categoryForm: FormGroup;
  temp: any;
  ivalid: boolean;
  evalid: boolean;
  svalid: boolean;
  saved: boolean;
  exist: boolean;
  margin: number;


  constructor(fb: FormBuilder) {
    this.categoryForm = fb.group({
      category: new FormControl('', [Validators.required])
    })
    }

  ngOnInit(): void {
    this.amount = 0;
    this.income = 0;
    this.itemp = 0;
    this.categoryList = [];
    this.expenseList = [];
    this.ctemp = ''
    this.expense = 0;
    this.totalexp = 0;
    this.ivalid = false;
    this.evalid = false;
    this.percent = 0;
    this.svalid = false;
    this.exist = false;
  }

  // Income //
  updateAmount(event: any){
    this.amount = event.target.value;
  }
  addIncome(event: any){
    this.itemp = event.target.value;
  }
  updateIncome(val:number){
    this.itemp = 0;
    this.income = +this.income + +val;
    console.log(this.income);
    if(this.percent > 0){
      this.updateSavings()
      this.checkSavings();
    }
    this.updateIncomeData();
  }

  // Category //
  addCategory(event: any){
    this.ctemp = event.target.value;
  }
  updateCategoryList(str: String){
    this.ctemplist = [];
    for(let item of this.categoryList)
    {
      if(str === item)
      {
        this.exist = true;
      }
    }
    if(this.exist === false){
      for(let item of this.categoryList)
      {
        this.ctemplist.push(item);
      }
      this.ctemplist.push(str);
      this.categoryList = this.ctemplist.sort();
    }
    else{
      alert("Already a category!");
    }
    this.ctemp = '';
    this.exist = false;
  }

  // Expense //
  addExpense(event:any){
    this.expense = event.target.value;
  }
  updateExpense(){
    if(this.categoryForm.valid && this.categoryForm.value.category !== 'Select one...'){
      let i = 0;
      let update = false;
      for(let exp in this.expenseList){
        if(this.categoryForm.value.category === this.expenseList[i][0]){
          this.expenseList[i][1] = +this.expenseList[i][1] + +this.expense;
          update = true;
        }
        i++;
      }
      if(update === false){
        let etemp = this.expense
        console.log(this.expenseList);
        this.expenseList.push([this.categoryForm.value.category, etemp]);
      }
      this.expense=0;
      this.categoryForm.reset();
      this.tempcList = this.categoryList;
      this.categoryList= [];
      for( let tc of this.tempcList)
      {
      this.categoryList.push(tc);
      }
      console.log("expense list array");
      console.log(this.expenseList);
      this.result.length = 0;
      for(let exp of this.expenseList)
      {
        this.temp = Object.assign({name: exp[0], value: +exp[1]}); 
        this.result.push(this.temp); 
      }
      console.log("expense chart data");
      console.log(this.result);
      this.totalExpense(this.expenseList);
      this.updateExpenseData();
      this.checkSavings();
    }
    else if (this.categoryForm.invalid || this.categoryForm.value.category === 'Select one...'){
      this.expense = 0;
      alert('Invalid action!\nYou need to choose a category.');
    }
  }
  totalExpense(arr: any){
    this.totalexp = 0;
    for(let item of arr){
      console.log(arr);
      this.totalexp = +this.totalexp + +item[1];
    }
    console.log(this.totalexp);
  }

  // Savings //
  addSavings(event:any){
    this.percent = (event.target.value/100);
  }
  updateSavings(){
    this.save = +this.income * +this.percent;
    console.log(this.save);
    this.checkSavings();
  }
  checkSavings(){
    if(this.save > 0){
      if( this.income > 0 && this.totalexp === 0){
        this.margin = this.income;
        this.svalid = true;
        this.saved = true;
      }
      else if(this.income > 0 && this.totalexp > 0){
        this.svalid = true;
        this.margin = (this.income - this.totalexp);
        if((this.income - this.totalexp) >= this.save){
          this.saved = true;
        }
        else{
          this.saved = false;
        }
      }
      else if (this.income === 0 && this.totalexp > 0){
        if(this.percent > 0){
          this.margin = (0- this.totalexp);
          this.svalid = true;
          this.saved = false;
        }
        else{
          this.svalid = false;
          this.saved = false;
        }
      }
    }
    else{
      this.svalid = false;
      this.saved = false;
    }
  }

  // Chart Data //
  updateIncomeData(){
    this.ivalid = true;
    if(this.income > 0 && this.amount > 0){
      this.incomeData = [
        { name: "Bank" , value: +this.amount},
        { name: "Income" , value: +this.income}];
    }
    else if( this.amount <= 0 && this.income > 0){
      this.incomeData = [{ name: "Income" , value: +this.income}];
    }
    else{
      this.incomeData = [
        { name: "Bank" , value: +this.amount}];
    }
    console.log("income chart data");
    console.log(this.incomeData);
  }
  updateExpenseData(){
    this.evalid = true;
    this.expenseData = this.result;
    this.expenseData = [...this.expenseData];
    console.log("shown expense chart data");
    console.log(this.expenseData);
  }
}
  