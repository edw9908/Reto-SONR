import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public firstname = new FormControl();
  public email = new FormControl();
  public feedback = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  sendContact(){
    alert("Solicitud de contacto enviada: " + this.firstname.value + " " + this.email.value + " " + this.feedback.value)
  }

}
