import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      company: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: [''],
      website: [''] // honeypot
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.showSuccess = this.showError = false;

    if (this.contactForm.invalid || this.f['website'].value) {
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();
    formData.append("fullName", this.f['fullName'].value);
    formData.append("company", this.f['company'].value);
    formData.append("title", this.f['title'].value);
    formData.append("email", this.f['email'].value);
    formData.append("phone", this.f['phone'].value);
    formData.append("message", this.f['message'].value);

    this.http.post("https://formspree.io/f/xjkddwyk", formData, {
      headers: { "Accept": "application/json" }
    })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.showSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
          setTimeout(() => {
            this.showSuccess = false;
          }, 10000);
        },
        error: () => {
          this.isSubmitting = false;
          this.showError = true;
        }
      });
  }

}
