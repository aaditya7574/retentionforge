import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private fb: FormBuilder) {
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

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.showSuccess = this.showError = false;

    if (this.contactForm.invalid || this.f['website'].value) {
      return;
    }

    this.isSubmitting = true;

    const payload = {
      ...this.contactForm.value,
      to: 'ariel@retentionforge.io',
      subject: `New Consultation Request from ${this.f['fullName'].value}`
    };

    // Replace with your actual endpoint (Formspree, EmailJS, etc.)
    // this.http.post('https://formspree.io/f/your-form-id', payload).subscribe({
    //   next: () => {
    //     this.isSubmitting = false;
    //     this.showSuccess = true;
    //     this.contactForm.reset();
    //     this.submitted = false;
    //   },
    //   error: () => {
    //     this.isSubmitting = false;
    //     this.showError = true;
    //   }
    // });
  }
}
