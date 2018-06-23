import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { PurchasedPageComponent } from './purchased-page/purchased-page.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginFormComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'signup',
    component:RegisterFormComponent,
  },
  {
    path:'products',
    component:ProductGalleryComponent,
  },
  {
    path:'purchase',
    component:PurchasedPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
