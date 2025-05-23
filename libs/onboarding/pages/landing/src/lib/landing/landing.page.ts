import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  IonButton,
  IonContent,
  NavController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'onboarding-landing',
  imports: [CommonModule, IonContent, IonButton, NgOptimizedImage],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
})
export class LandingPage {
  navController = inject(NavController);

  async signUp(): Promise<void> {
    await this.navController.navigateForward('onboarding/sign-up');
  }

  async signIn(): Promise<void> {
    await this.navController.navigateForward('onboarding/sign-in');
  }
}
