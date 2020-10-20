import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { GroceryComponent } from './grocery/grocery.component';
import { WeightComponent } from './weight/weight.component';
import { HeaderComponent } from './header/header.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    GroceryComponent,
    WeightComponent,
    HeaderComponent,
    GroceryListComponent,
    GroceryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
