import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { PurchasedPageComponent } from './purchased-page/purchased-page.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminGuard } from './_guards/admin.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginFormComponent,
  },
  {
    path:'',
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component:RegisterFormComponent
  },
  {
    path:'products',
    component:ProductGalleryComponent,
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent
  },
  {
    path:'purchase',
    component:PurchasedPageComponent,
  },
  {
    path:'admin',
    component:AdmindashboardComponent,
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
