import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeliverymethodComponent } from './deliverymethod/deliverymethod.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateDeliverymethodComponent } from './create-deliverymethod/create-deliverymethod.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DeliverymethodDetailsComponent } from './deliverymethod-details/deliverymethod-details.component';
import { DeliverymethodListComponent } from './deliverymethod-list/deliverymethod-list.component';
import { UpdateDeliverymethodComponent } from './update-deliverymethod/update-deliverymethod.component';
<<<<<<< HEAD
import { CartManagementComponent } from './cart-management/cart-management.component';
=======
>>>>>>> 0c5926d8710d9c579dd39754194b7d39a1f941af



@NgModule({
  declarations: [
    AppComponent,
    DeliverymethodComponent,
    CreateDeliverymethodComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DeliverymethodDetailsComponent,
    DeliverymethodListComponent,
    UpdateDeliverymethodComponent,
<<<<<<< HEAD
    CartManagementComponent,
=======
>>>>>>> 0c5926d8710d9c579dd39754194b7d39a1f941af
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
