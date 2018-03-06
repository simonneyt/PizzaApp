
import { Injectable } from '@angular/core';

/*
  Generated class for the StoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoresProvider {
  stores = [{ "id": 1, "name": "Johnnys Pizza", "email": "JohnnysPizza@gmail.com", "Tel": "0495 11 11 11", "image": "assets/img/johnny.png", "hours": [{ "day": "Maandag", "start": "09", "end": 20 },{ "day": "Dinsdag", "start": "09", "end": 20 },{ "day": "Woensdag", "start": "09", "end": 20 },{ "day": "Donderdag", "start": "08", "end": 20 },{ "day": "Vrijdag", "start": "09", "end": 22 }] },
 { "id": 2, "name": "PizzaHut", "email": "PizzaHut@gmail.com", "Tel": "0495 22 22 22", "image": "assets/img/PizzaHut.jpg", "hours": [{ "day": "Maandag", "start": "08", "end": 20 },{ "day": "Dinsdag", "start": "08", "end": 20 },{ "day": "Woensdag", "start": "08", "end": 20 },{ "day": "Donderdag", "start": "08", "end": 21 },{ "day": "Vrijdag", "start": "08", "end": 22 }] },
 { "id": 2, "name": "Domino's", "email": "Domino@gmail.com", "Tel": "0495 33 33 33", "image": "assets/img/DominosPizza.jpg", "hours": [{ "day": "Maandag", "start": "08", "end": 18 },{ "day": "Dinsdag", "start": "08", "end": 19 },{ "day": "Woensdag", "start": "08", "end": 20 },{ "day": "Donderdag", "start": "08", "end": 22 },{ "day": "Vrijdag", "start": "08", "end": 24 }] } 
]

  constructor() {
    console.log('Hello StoresProvider Provider');
  }
  getAll() {
    return this.stores;
  }

}
