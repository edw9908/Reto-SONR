import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  terms = `<h1>Terminos y Condiciones</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed pellentesque sed urna non suscipit. In hac habitasse platea dictumst. 
    Integer rutrum tortor sed lectus dapibus mattis. Quisque vitae fermentum eros, 
    quis euismod enim. Ut aliquam diam iaculis finibus euismod. Ut ipsum magna, 
    porttitor non ipsum et, pretium laoreet ante. Proin aliquam viverra est, non 
    pretium risus posuere quis. Praesent blandit fringilla mi vitae dictum. Suspendisse 
    in neque urna. Proin in vehicula dolor. Suspendisse lorem purus, elementum ut cursus 
    eget, suscipit ac diam. Nam sollicitudin quam ante, vehicula accumsan sem euismod sit amet. 
    Quisque est justo, pellentesque vehicula enim in, egestas vestibulum risus. Sed consectetur 
    diam eget sodales varius. Cras vel diam et ligula convallis posuere nec aliquam lorem. Nam 
    orci augue, elementum et fringilla mattis, porttitor ullamcorper est.</p>`

  constructor() { }

  ngOnInit(): void {
  }

}
