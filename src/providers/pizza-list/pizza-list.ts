
import { Injectable } from '@angular/core';

/*
  Generated class for the PizzaListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaListProvider {
  pizzas = [{ "id": 1, "name": "Pizza BBQ", "prijs": "7,50" },
  { "id": 2, "name": "Pizza Hawai", "prijs": "7" },
  { "id": 3, "name": "Pizza Chicken", "prijs": "8" } 
 ]
  constructor() {
    console.log('Hello PizzaListProvider Provider');
  }
  getPizza() {
    return this.pizzas;
  }

}
