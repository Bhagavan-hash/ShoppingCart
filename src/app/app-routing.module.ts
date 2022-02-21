import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
 { path: '',redirectTo:'prod', pathMatch: 'full'},
 { path: 'products', component: ProductsComponent},
 { path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
