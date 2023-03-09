import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{
  public productList!:any;
  
  constructor(private api : ServiceService,private cartService : CartService,private wishList : WishlistService) { }
  ngOnInit(): void {
      this.api.getProduct()
      .subscribe((res: any)=>{
        this.productList=res;
        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
        });
      })
  }
  addtoCart(item:any)
  {
    this.cartService.addtocart(item);
  }
  addtoWish(item:any)
  {
    this.wishList.addtoWish(item);
   
  }
}



