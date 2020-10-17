import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Expenses{
  name: string;
  value: number;
}

export class ExpenseService {

  constructor() { }
}
