import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { RecommendationColumnComponent } from './recommendation-column/recommendation-column.component';
import { BooksComponentComponent } from './products/books-component/books-component.component';
import { ClothingComponentComponent } from './products/clothing-component/clothing-component.component';
import { ComputerComponentComponent } from './products/computer-component/computer-component.component';
import { ShoesComponentComponent } from './products/shoes-component/shoes-component.component';
import { ToysComponentComponent } from './products/toys-component/toys-component.component';
import { PurchasedPageComponent } from './purchased-page/purchased-page.component';
import { HttpService } from './services/http.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ProductService } from './_services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainComponent } from './main/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    AdmindashboardComponent,
    LoginFormComponent,
    ProductDetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService,
    CookieService,
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
