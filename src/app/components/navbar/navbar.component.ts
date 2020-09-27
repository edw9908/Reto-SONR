import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public isMenuCollapsed = true;
  public textSearch = new FormControl();
  faCartPlus = faCartPlus;
  faSearch = faSearch;
  faSignOutAlt = faSignOutAlt;

  ngOnInit(): void {
  }

  testClick(){
    console.log(this.textSearch.value);
  }
}
