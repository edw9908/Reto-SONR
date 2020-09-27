import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Products } from '../../products';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product;
  public quantity = new FormControl();

  constructor(private actRoute: ActivatedRoute) {
  }

  addCarrito(): void {
    this.product.quantity = this.quantity.value;
    let tmp = JSON.parse(localStorage.getItem("carrito"));
    tmp.push(this.product)
    localStorage.setItem("carrito", JSON.stringify(tmp));
    alert(this.product.name + " ha sido añadido al carrito");
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.product = Products.find((prod) => prod.id == parseInt(params.get('id')))
    });
  }
}
