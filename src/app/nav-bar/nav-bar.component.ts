import { WishlistService } from './../services/wishlist.service';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  public totalItem : number=0;
  public wishTotalItem : number=0
  constructor(private cartService : CartService,private WishlistService:WishlistService){}
  ngOnInit():void
  {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
    // let wishList = this.WishlistService.getWishProducts()
    // this.wishTotalItem = wishList.length
    // console.log(wishList)
    this.WishlistService.getWishProducts()
    .subscribe(res=>{
      this.wishTotalItem=res.length;
    })
  }

}
