import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RecommendationColumnComponent } from './recommendation-column/recommendation-column.component';
import { BooksComponentComponent } from './products/books-component/books-component.component';
import { ClothingComponentComponent } from './products/clothing-component/clothing-component.component';
import { ComputerComponentComponent } from './products/computer-component/computer-component.component';
import { ShoesComponentComponent } from './products/shoes-component/shoes-component.component';
import { ToysComponentComponent } from './products/toys-component/toys-component.component';
import { PurchasedPageComponent } from './purchased-page/purchased-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    ProductGalleryComponent,
    RegisterFormComponent,
    HomeComponent,
    RecommendationColumnComponent,
    BooksComponentComponent,
    ClothingComponentComponent,
    ComputerComponentComponent,
    ShoesComponentComponent,
    ToysComponentComponent,
    PurchasedPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
