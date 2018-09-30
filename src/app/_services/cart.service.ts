import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Config } from '../config.config';
import { Cart } from '../_model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(q:string, productId:number){

    let params = new HttpParams().append("q",q);
    console.log(params);
    const url = `${Config.cartUrl}/${productId}`;
    return this.http.post(url,"",{params:params});
  }

  getCart(username:string){
    let params = new HttpParams().append("username", username);
    return this.http.get<Cart>(Config.cartUrl,{params:params});
  }

  removeCartItem(cartItemId: number){

    const url = `${Config.cartUrl}/${cartItemId}`;
    return this.http.delete(url);
  }

  completeTransaction(){

    return this.http.post(Config.transactionUrl,"");
  }
}
