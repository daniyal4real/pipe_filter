import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  constructor() { }


  beverages = ['milk', 'tea', 'coffee', 'juice']


  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage)
  }
}
