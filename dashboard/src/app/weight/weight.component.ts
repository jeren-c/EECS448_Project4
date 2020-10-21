import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  iniWeight: any;
  goalWeight: any;
  weightIn: any;
  constructor() { }

  ngOnInit(): void 
  {
   
  }
 updateInitial(): void
 {
  alert(this.iniWeight);
 }

 updateGoal(): void
 {
  alert(this.goalWeight);
 }

 updateCurrent(): void
 {
  alert(this.weightIn);
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
   this.weightIn=event.target.value;
 }
}
