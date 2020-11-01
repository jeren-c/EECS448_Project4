import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { GroceryComponent } from './grocery/grocery.component';
import { WeightComponent } from './weight/weight.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'budget', component: BudgetComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'grocery', component: GroceryComponent},
  {path: 'weight', component: WeightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
