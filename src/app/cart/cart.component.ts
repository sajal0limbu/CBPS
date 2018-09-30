import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { Cart } from '../_model/cart';
import { CartItem } from '../_model/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart;
  constructor(private cartService:CartService) { }

  ngOnInit() {

    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    let username = currentUser.username;
    this.cartService.getCart(username).subscribe(
      data=>{
        this.cart = data;
      },
      error=>{
        console.log("error",error);
      }
    );
  }
  
  removeCartItem(cartItem:CartItem){
    console.log(cartItem);
    console.log(cartItem['id']);
    this.cartService.removeCartItem(cartItem['id']).subscribe(
      error=>{
        console.log("error",error);
      }
    );
  }

  completeTransaction(){
    this.cartService.completeTransaction().subscribe(
      error=>{
        console.log("error",error);
      }
    )
  }


}
