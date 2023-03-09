import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent {
  public wishList:any=[];
  constructor(private WishlistService : WishlistService){}
  ngOnInit(): void{
    this.WishlistService.getWishProducts()
    .subscribe(res=>{
      this.wishList=res;
    })
  }
  removeItem(item:any)
  {
    this.WishlistService.removeWishListItem(item);
  }
  addToCart(item:any)
  {
    this.WishlistService.addToCart(item)
  }
  emptyWishList()
  {
    this.WishlistService.removeAllWish();
  }
}
