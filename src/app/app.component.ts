import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carrito = [];

  constructor(){
    this.loadStorage();
  }

  loadStorage(){
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }
  /*
  setStorage(){
    let tmp = JSON.parse(localStorage.getItem("carrito"));
    tmp.push(4)
    localStorage.setItem("carrito", tmp)
    //localStorage.setItem("carrito", )
  }
  */
}
