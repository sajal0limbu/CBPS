import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.service';
import { first, map, switchMap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  constructor(private productService:ProductService, private route:ActivatedRoute) { }
  products: Product[];
  products$:Observable<Product[]>;
  selectedId: number;
  // count: number;
  // num: number[];
 
  ngOnInit() {
      console.log(this.productService.getProductList());
     this.productService.getProductList().subscribe(
      data =>{
        
        this.products = data;
        // this.count = this.products.length;
        console.log("product list", this.products);
        // for(let i = 0; i<this.count;i=i+3){
        //    this.num[i] = i;
        
      },
      error =>{
        console.log("error",error);
      }
    );

    this.products$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.productService.getProductList();
      })
    );
     
  }

}
