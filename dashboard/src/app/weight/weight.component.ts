import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  iniWeight: any;
  goalWeight: any;
  changedWeight: any;
  differ: any;
  remaining: any;
  commit:any; 

  constructor() { }

  
  ngOnInit(): void {
    this.iniWeight = 0;
    this.goalWeight = 0;
    this.changedWeight = 0;
    this.differ = this.changedWeight - this.iniWeight; //actual weight increase, differ increase
    this.remaining = this.goalWeight - this.changedWeight; //how much fat still need to lose
    this.commit = '';
  }



  /*
  public iniWeight: 0;
  public goalWeight: 0;
  public changedWeight: 0;
  public lowDiffer = this.iniWeight - this. changedWeight;  //when changedWeight lower than iniWeight
  public highDiffer = this.changedWeight - this.iniWeight; //when changedWeight higher than iniWeigh
  public remaining = this.changedWeight - this.goalWeight;
  public commit: '';

  constructor() { }

  ngOnInit(): void {
  }
  */
  doSubmit(): any{
    //goal reach
    this.differ=this.changedWeight - this.iniWeight;
    this.remaining=this.changedWeight-this.goalWeight;
    if(this.remaining == 0 ){
      console.log("Congrats, you have reach the goal!");
    }
    //not reach the goal
    else{
      //get fat
      if(this.differ > 0){
        console.log("You seemed to have gained weight " + this.differ + " lbs");
      }
      //
      else if(this.differ < 0 && this.remaining > 0){
        console.log("You still need to lose " + this.remaining + " lbs");
      }
      else if(this.remaining < 0)
      {
        console.log("You have gone past your goal Congradulations");
      }
      else{
        console.log("Your weight has not changed.");
        console.log("You still need to lose " + this.remaining + " lbs");
      }
    }
  }
 updateIni(event: any)
 {
   this.iniWeight=event.target.value;
 }

 updateG(event: any)
 {
   this.goalWeight=event.target.value;
 }

 updateC(event: any)
 {
   this.changedWeight=event.target.value;
 }
}


