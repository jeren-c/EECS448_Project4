import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { GroceryComponent } from './grocery/grocery.component';
import { WeightComponent } from './weight/weight.component';

const routes: Routes = [
  {path: 'budget', component: BudgetComponent},
  {path: '', redirectTo: 'budget', pathMatch: 'full'},
  {path: 'grocery', component: GroceryComponent},
  {path: 'weight', component: WeightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
