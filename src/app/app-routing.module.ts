import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { PurchasedPageComponent } from './purchased-page/purchased-page.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainComponent } from './main/main/main.component';
import { CartComponent } from './cart/cart.component';
import { AlgorithmComponent } from './admin/algorithm/algorithm.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';




const routes: Routes = [
  {
    path:'login',
    component: LoginFormComponent,
  },
  {
    path:'',
    component:MainComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        component:HomeComponent,
      },   
      {
        path:'products',
        component:ProductGalleryComponent,
      },
      {
        path:'products/:id',
        component:ProductDetailsComponent,
      },
      {
        path:'cart',
        component:CartComponent,
      },
      {
        path:'purchase',
        component:PurchasedPageComponent,
      },     
    ]
  },
  {
    path:'register',
    component:RegisterFormComponent
  },

  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate: [AuthGuard,AdminGuard],
    children:[
      {
        path:'algorithm',
        component:AlgorithmComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
