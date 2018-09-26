import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from '../config.config';
import { Product } from '../_model/product';

import { first, map } from 'rxjs/operators';
import { ResponseType } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  getProductList(): Observable<Product[]>{
    
    return this.http.get<Product[]>(Config.productUrl,{responseType: 'json'});
  }


  getProduct(id: number | string) {
    return this.getProductList().pipe(
      // (+) before `id` turns the string into a number
      map(products => products.find(product => product.id === +id))
    );
  }

  getProductsByRecommendation( id:string ){
    const params = new HttpParams().set('id',id);
    return this.http.get<Product[]>(Config.productUrl.concat("/r"),{params});
  }
}
