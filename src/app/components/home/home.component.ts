import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BtnPrimaryComponent, NgOptimizedImage],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
