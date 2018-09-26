import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_model/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService
  ) { }
  param:ParamMap;
  products: Product[];
  selectedId:number;
  product$: Observable<Product>;
  products$:Observable<Product[]>;
  ngOnInit() {
    console.log("this is product detail");
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getProduct(params.get('id')))
    );
    console.log("product-detail", this.product$);

    this.productService.getProductsByRecommendation(this.param.get('id')).subscribe(
      data=>{
        this.products=data;
        console.log("Recommended List",this.products);
      },
      error=>{
        console.log("error",error);
      }
    );

    this.products$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.productService.getProductList();
      }));

  }

  gotoProducts(product: Product) {
    let productId = product ? product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/products', { id: productId, foo: 'foo' }]);
  }

}
