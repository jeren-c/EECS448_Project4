import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  iniWeight: number;
  goalWeight: number;
  changedWeight: number;
  differ: number;
  remaining: number;
  commit:any; 

  constructor() { }

  
  ngOnInit(): void {
    this.iniWeight = 0;
    this.goalWeight = 0;
    this.changedWeight = 0;
    this.differ = this.changedWeight - this.iniWeight; //actual weight increase, differ increase
    this.remaining = this.changedWeight - this.goalWeight; //how much fat still need to lose
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
    if(this.remaining < 0 ){
      console.log("Congrats, you have reach the goal!");
    }
    //not reach the goal
    else{
      //get fat
      if(this.differ > 0){
        console.log("you fat ");
        console.log(this.differ);
        console.log(" pounds");
      }
      //
      else if(this.differ < 0 && this.remaining > 0){
        console.log("you still need");
        console.log(this.remaining);
        console.log("pounds");
      }
      else{
        console.log("your weight not change");
        console.log("you still need");
        console.log(this.remaining);
        console.log("pounds");
      }
    }
  }

}
