import { AddComponent } from './orders/add/add.component';
import { ListComponent } from './orders/list/list.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrdersComponent
      },
      {
        path: 'add',
        component:AddComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
