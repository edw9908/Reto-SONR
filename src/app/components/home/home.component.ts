import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products;
  isSearching = false;
  textSearch = "";

  constructor(private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params)
      if(params.type){
        this.isSearching = false;
        this.products = Products.filter((prod) => prod.category == parseInt(params.type));
      }else if(params.query){
        this.isSearching = true;
        this.textSearch = params.query;
        this.products = Products.filter((prod) => prod.name.toLocaleLowerCase().includes(params.query.toLocaleLowerCase()));
      }else{
        this.isSearching = false;
        this.products = Products;
      }
    });
  }

}
