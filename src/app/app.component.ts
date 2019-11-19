import { Component,OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'; //The subscriber function defines how to obtain or generate values or messages to be published.
import {ProductsApiService} from './products/products-api.service';
import {Products} from './products/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'webapp';
  productsListSubs: Subscription;
  productsList: Products[];

  constructor(private productsApi: ProductsApiService) {
  }

  ngOnInit() { //The ngOnInit function gets called by default in any component created.
    this.productsListSubs = this.productsApi
      .getProducts()
      .subscribe(res => {
          this.productsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() { //A lifecycle hook that is called when a directive, pipe, or service is destroyed.
    this.productsListSubs.unsubscribe();
  }




}
