import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CartManagementComponent } from './cart-management/cart-management.component';
=======
>>>>>>> 0c5926d8710d9c579dd39754194b7d39a1f941af
import { CreateDeliverymethodComponent } from './create-deliverymethod/create-deliverymethod.component';
import { DeliverymethodDetailsComponent } from './deliverymethod-details/deliverymethod-details.component';
import { DeliverymethodListComponent } from './deliverymethod-list/deliverymethod-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateDeliverymethodComponent } from './update-deliverymethod/update-deliverymethod.component';
//import { CreateDeliverymethodComponent } from './deliverymethod/create-deliverymethod/create-deliverymethod.component';


const routes: Routes = [
  {path: '', redirectTo: 'deliverymethod', pathMatch: 'full' },
  { path: 'deliverymethods', component:DeliverymethodListComponent },
  { path: 'add', component:CreateDeliverymethodComponent },
  { path: 'update/:id', component: UpdateDeliverymethodComponent },
  { path: 'details/:id', component: DeliverymethodDetailsComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'cart' , component :CartManagementComponent},
=======
>>>>>>> 0c5926d8710d9c579dd39754194b7d39a1f941af
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }