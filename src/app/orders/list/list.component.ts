import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  public product:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService){}
  ngOnInit(): void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);
  }
  emptyCart()
  {
    this.cartService.removeAllCart();
  }
}
