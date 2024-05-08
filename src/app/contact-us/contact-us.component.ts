import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactUs!: FormGroup;
  notificationMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.ContactUs = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.ContactUs.controls; }

  onSubmit() {
    if (this.ContactUs.invalid) {
      return;
    }

    const formData = JSON.stringify(this.ContactUs.value);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:8080/api/contact', formData, { headers, responseType: 'text' })
      .subscribe(
        (response: string) => {
          console.log('Message sent successfully', response);
          this.notificationMessage = 'Message sent successfully';
          this.ContactUs.reset(); // Reset the form
        },
        error => {
          console.error('Error sending message', error);
          // Handle error, show error message to the user, etc.
        }
      );
  }
}
