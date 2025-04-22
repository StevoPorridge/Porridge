import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonItem,
  IonSelect,
} from '@ionic/angular/standalone';
import { CatService } from '@onboarding/cat-service';

@Component({
  selector: 'onboarding-cat-breed',
  imports: [CommonModule, IonButton, IonContent, IonFooter, IonItem, IonSelect],
  templateUrl: './cat-breed.page.html',
  styleUrl: './cat-breed.page.scss',
})
export class CatBreedPage {
  catService = inject(CatService);

  catName = computed(() => {
    return this.catService.getCats()[0].name;
  });

  submit() {}
}
