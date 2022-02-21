import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  constructor(private productService: ApiService,private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1,total:a.price});
        });
      })
  }
  addToCart(item: any){
    this.cartService.addToCart(item);
  }
}
