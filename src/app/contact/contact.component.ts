import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ApicallService } from '../apicall.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder, private api:ApicallService) { }
  
  contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    message: ["", Validators.required],
    shouldAddToNewsletter: false
  })
  ngOnInit() {
    this.api.getHandling().subscribe((data: any) => {
      console.log(data)

    })
  }

  get name() {return this.contactForm.get('name')}
  get email() {return this.contactForm.get('email')}
  get message() {return this.contactForm.get('message')}
  onSubmit () {
    this.api.postHandling(this.contactForm.getRawValue()).subscribe((info: any) => {
      console.log(info)
    })
    console.log("Contact successfully submitted")
    alert("contact successfully submitted")
  }
}
