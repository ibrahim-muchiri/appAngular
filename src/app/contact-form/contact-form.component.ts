import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  firstName!: string; // Assuming firstName is a string
  log() {
    console.log(this.firstName);
  }
}
