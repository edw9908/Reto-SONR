import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito = [];
  faTrashAlt = faTrashAlt;

  constructor() { 
    this.getCarrito();
  }

  ngOnInit(): void {
  }

  getCarrito() {
    this.carrito = JSON.parse(localStorage.getItem("carrito"));
  }
  
  removeProduct(id){
    this.carrito = this.carrito.filter((el) => el.id != id);
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }

}
