import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'onboarding-sign-in',
  imports: [CommonModule, IonButton, IonContent],
  templateUrl: './sign-in.page.html',
  styleUrl: './sign-in.page.scss',
})
export class SignInPage {}
