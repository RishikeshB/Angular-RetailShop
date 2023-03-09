import { CartService } from './cart.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishList: any = [];
  public cartProducts: any = [];
  public ProductWishList = new BehaviorSubject<any>([]);
  constructor(private cartService: CartService) {}
  getWishProducts() {
    return this.ProductWishList.asObservable();
    // return this.wishList
  }
  setPoduct(product: any) {
    this.wishList.push(...product);
    this.ProductWishList.next(product);
  }
  addtoWish(product: any) {
    let index = -1;
    for (let item of this.wishList) {
      if (item.id === product.id) {
        index = this.wishList.indexOf(item);
      }
      // console.log(this.wishList);
      //console.log("product",this.ProductWishList)
    }
    if (index == -1) {
      this.wishList.push(product);
      this.ProductWishList.next(this.wishList);
    } else {
      product.quantity += 1
      this.wishList[index]=product;
    }
  }
  removeWishListItem(item: any) {
    this.wishList.forEach((items: any, index: any) => {
      if (items.id == item.id) {
        this.wishList.splice(index, 1);
      }
    });
    this.ProductWishList.next(this.wishList);
  }
  addToCart(item: any) {
    this.cartService.getCart().subscribe(res=>{
      this.cartProducts=res;
    })
    let flag = 0
    for (let cartItem of this.cartProducts) {
      // console.log("InWishList",this.cartProducts)
      if (cartItem.id == item.id) {
        flag = 1
      }
    }
    if(flag == 1){
      alert('already in cart')
      } 
      else{
        this.cartService.addtocart(item)
      }
  }
  removeAllWish() {
    this.wishList = [];
    this.ProductWishList.next(this.wishList);
  }
}
