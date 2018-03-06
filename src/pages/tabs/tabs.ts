import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrderPage;
  tab3Root = CartPage;

  constructor() {

  }
}
