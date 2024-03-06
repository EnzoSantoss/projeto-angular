import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';
import { NewsletterService } from '../../services/newsletter.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule, CommonModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  formSubmit() {
    this.loading.set(true);
    if (this.newsletterForm.valid) {
      this.service
        .sendData(
          this.newsletterForm.value.name,
          this.newsletterForm.value.email
        )
        .subscribe({
          next: () => {
            this.newsletterForm.reset;
          },
        });
    }

    console.log(this.newsletterForm.value);
  }
}
