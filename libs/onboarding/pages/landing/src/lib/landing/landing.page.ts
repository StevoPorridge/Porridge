import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'onboarding-landing',
  imports: [CommonModule, IonContent, IonButton],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
})
export class LandingPage {}
