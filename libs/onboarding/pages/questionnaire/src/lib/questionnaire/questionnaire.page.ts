import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'onboarding-questionnaire',
  imports: [CommonModule, IonContent, IonButton],
  templateUrl: './questionnaire.page.html',
  styleUrl: './questionnaire.page.scss',
})
export class QuestionnairePage {}
