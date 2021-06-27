import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    message: ["", Validators.required],
    shouldAddToNewsletter: false
  })
  ngOnInit() {

  }

  get name() {return this.contactForm.get('name')}
  get email() {return this.contactForm.get('email')}
  get message() {return this.contactForm.get('message')}
  onSubmit () {
    console.log(this.contactForm.value)
    console.log("")

  }
}
