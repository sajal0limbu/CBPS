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
import { MainComponent } from './main/main/main.component';


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
    component:AdmindashboardComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
