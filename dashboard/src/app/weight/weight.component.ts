import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  iniWeight: any; //Initial weight
  goalWeight: any;//Goal weight
  changedWeight: any;//current weight
  differ: any;//the difference between current and initial weight
  remaining: any;//the remaining amount of weight needed
  height: any//how tall a person is
  bmi: any// the value for the calculated BMI

  constructor() { }

  
  ngOnInit(): void {
    this.iniWeight = 0;//the users initial weight
    this.goalWeight = 0;//the goal weight
    this.changedWeight = 0;//The current weight
    this.differ = this.changedWeight - this.iniWeight; //actual weight increase, differ increase
    this.remaining = this.goalWeight - this.changedWeight; //how much fat still need to lose
  }


  /** doSubmit: Calculates information provided
  * Calculates information provided by using to see where they are from the goal
  * @pre none
  * @post gives the user and alert as to where they are in terms of progress 
  * @param finds the difference and remainder 
  * @throw non
  * @return none
  */
  doSubmit(): any{
    //goal reach
    this.differ=this.changedWeight - this.iniWeight;
    this.remaining=this.changedWeight-this.goalWeight;
    document.getElementById("differ").innerText="Weight Difference: " + this.differ;
    if(this.remaining == 0 ){
      alert("Congrats, you have reach the goal!");
    }
    //not reach the goal
    else{
      //get fat
      if(this.differ > 0){
        alert("You seemed to have gained weight " + this.differ + " lbs");
      }
      //
      else if(this.differ < 0 && this.remaining > 0){
        alert("You still need to lose " + this.remaining + " lbs");
      }
      else if(this.remaining < 0)
      {
        alert("You have gone past your goal Congradulations");
      }
      else{
        alert("Your weight has not changed.");
        alert("You still need to lose " + this.remaining + " lbs");
      }
    }
  }

  BMI(): any{
    this.bmi=(this.changedWeight/(this.height*this.height))*703;
    if(this.bmi>25.0)
    {
     alert("You are Overweight!");
     alert("Recommendations: Eat healthier foods and exercise");
    }
    else if(this.bmi<18.5)
    {
      alert("You are underweight!");
      alert("Recommendations: Try eating alittle more");
    }
    else
    {
      alert("Your BMI Index is good Great Job!");
    }

  }
  /** updateIni: Saves Initial weight
  * Saves the initial weight given by the user
  * @pre the info entered by the user
  * @post none 
  * @param saves initial weight 
  * @throw none
  * @return none
  */
 updateIni(event: any)
 {
   this.iniWeight=event.target.value;
   document.getElementById("ini").innerText="Initial Weight: " + this.iniWeight;
 }


 /** updateG: saves the goal weight
  * Saves the goal weight given by the user
  * @pre the info entered by the user
  * @post none 
  * @param saves goal weight 
  * @throw none
  * @return none
  */
 updateG(event: any)
 {
   this.goalWeight=event.target.value;
   document.getElementById("goalW").innerText="Goal Weight: " + this.goalWeight;
 }

 /** updateC: saves current weight
  * Saves the Current weight given by the user
  * @pre the info entered by the user
  * @post none 
  * @param saves current weight 
  * @throw none
  * @return none
  */ 
 updateC(event: any)
 {
   this.changedWeight=event.target.value;
   document.getElementById("currentW").innerText="Current Weight: " + this.changedWeight;
 }

 updateH(event: any)
 {
  this.height=event.target.value;
  document.getElementById("height").innerText="Height: " + this.height; 
 }
}




