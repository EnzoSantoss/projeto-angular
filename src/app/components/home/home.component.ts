//Angular Imports
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

//Components
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BtnPrimaryComponent,
    NgOptimizedImage,
    NewsletterFormComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
